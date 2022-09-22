import type {Router} from 'express'
import express from 'express'
import type {Request as JWTRequest} from 'express-jwt'

import helper from '@/utils/helper'
import type {QueryResultType} from '@/database/mysql'
import mysql from '@/database/mysql'

const router: Router = express.Router()

router.get('', async (req: JWTRequest, res, next) => {
  try {
    let [rows]: QueryResultType = await mysql.query('select nickname,phone,balance from rr_user where id=? limit 1', [
      req.auth!['id']
    ])

    if (rows.length > 0) {
      res.json(helper.ok(rows[0]))
    } else {
      helper.throwHttpError('未知的用户信息')
    }
  } catch (e) {
    next(e)
  }
})

export default router
