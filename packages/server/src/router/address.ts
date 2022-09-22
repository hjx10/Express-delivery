import type {Router} from 'express'
import express from 'express'
import {body} from 'express-validator'
import {Request as JWTRequest} from 'express-jwt'

import helper from '@/utils/helper'
import type {ExecuteResultType, QueryResultType} from '@/database/mysql'
import mysql from '@/database/mysql'

const router: Router = express.Router()

// 获取当前用户的地址列表
router.get('', async (req: JWTRequest, res, next) => {
  try {
    let [rows]: QueryResultType = await mysql.query(
      'select id,address,house_number,contact,phone,weights from rr_address_record where user_id=?',
      [req.auth!['id']]
    )
    res.json(helper.ok({addresses: rows}))
  } catch (e) {
    next(e)
  }
})

router.post(
  '',
  helper.validate([
    body('address').notEmpty(),
    body('house_number').notEmpty(),
    body('contact').notEmpty(),
    body('phone').notEmpty().isMobilePhone('zh-CN')
  ]),
  async (req: JWTRequest, res, next) => {
    try {
      let {address, house_number, contact, phone} = req.body
      let [effect]: ExecuteResultType = await mysql.execute(
        'insert into rr_address_record(address,house_number,contact,phone,user_id) values(?,?,?,?,?)',
        [address, house_number, contact, phone, req.auth!['id']]
      )
      res.json(helper.ok({id: effect.insertId}))
    } catch (e) {
      next(e)
    }
  }
)

router.delete('/:id', async (req: JWTRequest, res, next) => {
  try {
    await mysql.execute(
      'delete from rr_address_record where id=? and user_id=?',
      [req.params['id'], req.auth!['id']]
    )
    res.json(helper.ok())
  } catch (e) {
    next(e)
  }
})

export default router
