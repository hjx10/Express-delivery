import type {Router} from 'express'
import express from 'express'
import {Request as JWTRequest} from 'express-jwt'
import {query} from 'express-validator'
import {randomHash} from '@rabbit-run/common'

import helper from '@/utils/helper'
import type {ExecuteResultType, QueryResultType} from '@/database/mysql'
import mysql, {formatSql} from '@/database/mysql'

const router: Router = express.Router()

// 获取指定类型的全部订单
router.get(
  '',
  helper.validate([
    query('status').optional().matches(/^[0-8]$/).toInt()
  ]),
  async (req: JWTRequest, res, next) => {
    try {
      /**
       * 订单状态
       * - 0 未知
       * - 1 待支付
       * - 2 待接单
       * - 3 待取货
       * - 4 配送中
       * - 5 已完成
       * - 6 已取消
       * - 7 保留
       * - 8 保留
       */
      let status = req.query['status']
      let orderSql = `
        select ro.id               as id,
               ro.user_id          as user_id,
               ro.status           as status,
               ro.cancel_reason    as cancel_reason,
               ro.code             as code,
               ro.expect_timestamp as expect_timestamp,
               ro.kind             as kind,
               ro.price            as price,
               ro.weight           as weight,
               ro.distance         as distance,
               ro.discount_price   as discount_price,
               ro.order_type       as order_type,
               ro.source           as source,
               ro.name             as name,
               ro.remark           as remark,
               ro.delivery_fee     as delivery_fee,
               ro.markup           as markup,
               ro.tip              as tip,
               json_object(
                 'id', rar.id,
                 'address', rar.address,
                 'house_number', rar.house_number,
                 'contact', rar.contact,
                 'phone', rar.phone,
                 'user_id', rar.user_id,
                 'weights', rar.weights
                 )                 as from_address,
               json_object(
                 'id', rar2.id,
                 'address', rar2.address,
                 'house_number', rar2.house_number,
                 'contact', rar2.contact,
                 'phone', rar2.phone,
                 'user_id', rar2.user_id,
                 'weights', rar2.weights
                 )                 as to_address
        from rr_order ro
               left join rr_address_record rar on ro.from_address_id = rar.id
               left join rr_address_record rar2 on ro.to_address_id = rar2.id
        where ro.user_id = ?
      `

      if (status) {
        let [rows]: QueryResultType = await mysql.query(orderSql + ' and ro.status = ?', [
          req.auth!['id'],
          status
        ])
        res.json(helper.ok({orders: rows}))
      } else {
        let [rows]: QueryResultType = await mysql.query(orderSql, [req.auth!['id']])
        res.json(helper.ok({orders: rows}))
      }
    } catch (e) {
      next(e)
    }
  })

// 新增订单
router.post(
  '',
  helper.validate([
    // body('to_address_id').notEmpty(),
    // body('from_address_id').notEmpty(),
    //
    // body('name').notEmpty(),
    // body('kind').notEmpty(),
    // body('price').notEmpty(),
    // body('weight').notEmpty(),
    // body('remark').notEmpty(),
    // body('tip').notEmpty(),
    //
    // body('coupon_id').notEmpty()
  ]),
  async (req: JWTRequest, res, next) => {
    try {
      // TODO: 触发优惠卷使用
      let {coupon_id} = req.body
      let order = {
        from_address_id: req.body['from_address_id'],
        to_address_id: req.body['to_address_id'],
        name: req.body['name'],
        kind: req.body['kind'],
        price: req.body['price'],
        remark: req.body['remark'],
        tip: req.body['tip'],
        weight: req.body['weight'],
        user_id: req.auth!['id'],
        pay_id: randomHash(10),
        code: randomHash(4),
        expect_timestamp: req.body['expect_timestamp'] // 期望配送时间
      }

      let [effect]: ExecuteResultType = await mysql.execute(
        formatSql(
          'insert into rr_order set ?',
          order
        )
      )

      res.json(helper.ok({id: effect.insertId}))
    } catch (e) {
      next(e)
    }
  })

export default router
