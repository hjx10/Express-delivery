import type {Router} from 'express'
import express from 'express'
import type {Request as JWTRequest} from 'express-jwt'
import {randomInt} from '@rabbit-run/common'

import helper from '@/utils/helper'
import type {QueryResultType} from '@/database/mysql'
import mysql from '@/database/mysql'
import {getUserToken} from '@/api/easemob'

const router: Router = express.Router()

router.get('/token', async (req: JWTRequest, res, next) => {
  try {
    // 获取用户的环信登录用户名和密码
    let [rows]: QueryResultType = await mysql.query('select password from rr_user where id=?', [req.auth!['id']])

    // 环信用户token
    let token = await getUserToken(req.auth!['phone'], rows[0].password)

    // 获取所有客服
    let [customerRows]: QueryResultType = await mysql.query('select id,phone from rr_user where role_id=2')

    res.json(
      helper.ok({
        username: req.auth!['phone'],
        userToken: token,
        customer: customerRows[randomInt(0, customerRows.length - 1)]
      })
    )
  } catch (e) {
    next(e)
  }
})

export default router
