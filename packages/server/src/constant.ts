import type {Secret, Algorithm} from 'jsonwebtoken'
import type {Path} from 'express-unless'

interface ConstantType {
  port: number

  secretKey: Secret
  algorithms: Algorithm[]
  whitelist: Path | Path[]

  host: string
  user: string
  password: string
  database: string

  redisUrl: string

  SmsSdkAppId: string
  smsSecretId: string
  smsSecretKey: string

  easemboUrl: string
  easemboToken: string
}

const constant: ConstantType = {
  port: 5500,

  secretKey: 'SystemLight',
  algorithms: ['HS256'],
  whitelist: ['/', /\/api\/oauth\/.*$/],

  host: 'lisys.club',
  user: 'rabbit_run',
  password: 'rabbit_run',
  database: 'rabbit_run',

  redisUrl: 'redis://lisys.club:6379',

  SmsSdkAppId: '1400288789',
  smsSecretId: 'AKIDFH2WjsjW5OREjwsYw3c2GDuLWQ4To485',
  smsSecretKey: 'MSIr9AuXzHI2MPBgusa2D8nCLDpBMIyN',

  easemboUrl: 'https://a1.easemob.com/1131220812131764/rabbit-run/',
  easemboToken:
    'YWMtXx1N0hoUEe2xDC8mbry2LlcnqQT0KD6WtoE4_GFSS_vKsnQMcKpLQr60qLjr9nZJAgMAAAGCkQ6iGQAAAAD4kZYump_MCkwx56RSVwIxgduJjDInC_XLxvmn1JyQ9Q'
}

export default constant
