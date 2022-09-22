import * as http from 'node:http'

import express from 'express'
import {expressjwt} from 'express-jwt'
import cors from 'cors'
import type {HttpError} from 'http-errors'
import createError from 'http-errors'
import chalk from 'chalk'

import constant from '@/constant'
import helper from '@/utils/helper'
import redis from '@/database/redis'
import {addressRouter, authRouter, easemobRouter, ordersRouter, userRouter, couponRouter} from '@/router'

console.log(chalk.greenBright('后端服务器准备启动...'))
;(async () => {
  let app = express()
  let httpServer = http.createServer(app)

  // 引入中间件
  app.use(cors())
  app.use(express.static('public'))
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: false
    })
  )
  app.use(
    '/api',
    expressjwt({
      secret: constant.secretKey,
      algorithms: constant.algorithms
    }).unless({
      path: constant.whitelist
    })
  )

  // 注册路由模块
  app.use('/api/oauth', authRouter)
  app.use('/api/user', userRouter)
  app.use('/api/address', addressRouter)
  app.use('/api/easemob', easemobRouter)
  app.use('/api/orders', ordersRouter)
  app.use('/api/coupon', couponRouter)

  // 捕获所有/api的404并且抛出
  app.use('/api/*', function (req, res, next) {
    next(createError(404))
  })

  // 统一错误处理
  app.use(function (err: HttpError, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(200).send(helper.illegalToken({error: err.message}))
    } else if (err.name === 'NotFoundError') {
      res.status(200).send(helper.notFound({error: err.message}))
    } else {
      res.status(200).send(helper.fail({error: err.message}))
    }

    // 用于开发调试抛出错误信息
    next(err)
  })

  await redis.connect() // 启动redis服务器连接

  httpServer.on('close', () => {
    redis.disconnect()
    console.log(chalk.redBright('服务器断开链接'))
  })

  httpServer.listen(constant.port, function () {
    console.log(`服务器本机地址：${chalk.blueBright(`http://localhost:${constant.port}`)}`)
  })
})()
