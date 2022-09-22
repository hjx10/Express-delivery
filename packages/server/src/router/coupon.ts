import type {Router} from 'express'
import express from 'express'
import {Request as JWTRequest} from 'express-jwt'
import {body, query} from 'express-validator'
import {randomHash} from '@rabbit-run/common'

import helper from '@/utils/helper'
import type {QueryResultType, ExecuteResultType} from '@/database/mysql'
import mysql from '@/database/mysql'

const router: Router = express.Router()

// 获取所有优惠卷
router.get('', async (req: JWTRequest, res, next) => {
  try {
    let trigger = req.query['trigger'] || 0
    let couponSql = `select ruc.id                                               as id,
       date_format(ruc.effective_date, '%Y-%m-%d %H:%i:%s') as effective_date,
       date_format(ruc.expire_date, '%Y-%m-%d %H:%i:%s')    as expire_date,
       rc.id                                                as coupon_id,
       rc.kind                                              as kind,
       rc.satisfy                                           as satisfy,
       rc.discount                                          as discount,
       ruc.\`trigger\`                                      as \`trigger\`
from rr_user_coupon ruc
         left join rr_coupon rc on ruc.coupon_id = rc.id
where ruc.user_id = ?
  and rc.status = 0
  and ruc.\`trigger\` = ?`

    let [rows]: QueryResultType = await mysql.query(
      couponSql,
      [req.auth!['id'], trigger]
    )

    res.send(helper.ok({coupons: rows}))
  } catch (e) {
    next(e)
  }
})

router.post('', async (req: JWTRequest, res, next) => {
  try {
    let [effect]: ExecuteResultType = await mysql.execute(
      'insert into rr_user_coupon(user_id, coupon_id) values (?, ?)',
      [req.auth!['id'], 2]
    )

    res.send(helper.ok({id: effect.insertId}))
  } catch (e) {
    next(e)
  }
})

export default router
