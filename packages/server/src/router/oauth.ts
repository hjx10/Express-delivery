import type {Router} from 'express'
import express from 'express'
import {body} from 'express-validator'
import jwt from 'jsonwebtoken'
import omit from 'omit.js'
import {randomHash} from '@rabbit-run/common'

import helper from '@/utils/helper'
import type {ExecuteResultType, QueryResultType} from '@/database/mysql'
import pool from '@/database/mysql'
import redis from '@/database/redis'
import {sendSms} from '@/api/sms'
import {registerUser} from '@/api/easemob'
import constant from '@/constant'

const router: Router = express.Router()

router.post(
  '/login',
  helper.validate([
    body('phone').isMobilePhone('zh-CN'),
    body('code', '必须是6位数字').isNumeric().bail().isLength({min: 6, max: 6})
  ]),
  async (req, res, next) => {
    try {
      // 比对phone和code是否一致
      // let code = await redis.get(req.body['phone'])
      // if (code !== req.body['code']) {
      //   helper.throwHttpError('验证码不匹配')
      // }

      let isNewUser = true // 查询是否已经存在用户
      let [rows]: QueryResultType = await pool.query('select id from rr_user where phone = ? limit 1', [
        req.body['phone']
      ])
      let id = 0

      if (rows.length > 0) {
        id = rows[0].id
        isNewUser = false
      } else {
        // 未存在用户自动注册信息
        let [effect]: ExecuteResultType = await pool.execute(
          'insert into rr_user (nickname, phone, password, role_id) values (?,?,?,?)',
          ['小兔用户', req.body['phone'], randomHash(6), 1]
        )

        // 是否新建成功
        if (!effect.insertId) {
          helper.throwHttpError('新建用户失败')
        }

        id = effect.insertId
      }

      // 获取用户详情数据
      let [userRows]: QueryResultType = await pool.query('select id,nickname,phone,password from rr_user where id=?', [
        id
      ])

      // 新用户注册一个环信账户
      if (isNewUser) {
        try {
          let entities = await registerUser(userRows[0]['phone'], userRows[0]['password'])
          // https://console.easemob.com/app/applicationOverview/userManagement
          if (entities[0].username !== userRows[0]['phone']) {
            helper.throwHttpError('环信注册失败')
          }
        } catch (e) {
          helper.throwHttpError('环信注册失败')
        }
      }

      // 清除验证码保存
      await redis.del(req.body['phone'])

      // 颁发token
      res.json(
        helper.ok({
          token: jwt.sign(omit(userRows[0], ['password']), constant.secretKey, {
            algorithm: constant.algorithms[0],
            // https://github.com/vercel/ms
            expiresIn: '1d'
          })
        })
      )
    } catch (e) {
      next(e)
    }
  }
)

router.post('/sendsms', helper.validate([body('phone').isMobilePhone('zh-CN')]), async (req, res, next) => {
  try {
    // 检查是否已经发送并且没有过期
    let phone = req.body['phone']
    let code = await redis.get(phone)
    if (code) {
      helper.throwHttpError('已经发送')
    } else {
      code = randomHash(6)
      await redis.setEx(phone, 180, code)
      await sendSms(phone, code)
      res.json(helper.ok())
    }
  } catch (e) {
    next(e)
  }
})

export default router
