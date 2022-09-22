import {createClient} from 'redis'
import type {RedisClientType} from 'redis'
import chalk from 'chalk'

import constant from '@/constant'

const client: RedisClientType = createClient({
  url: constant.redisUrl
})

client.on('error', (err) => {
  console.log(chalk.redBright('Redis Client Error '), err)
})

export default client
