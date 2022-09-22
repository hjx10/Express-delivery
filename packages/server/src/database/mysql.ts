import mysqlPromise from 'mysql2/promise'
import type {FieldPacket, ResultSetHeader, RowDataPacket} from 'mysql2'

import constant from '@/constant'

export type QueryResultType = [RowDataPacket[], FieldPacket[]]
export type ExecuteResultType = [ResultSetHeader, FieldPacket[]]

// https://github.com/mysqljs/mysql#pool-options
const pool = mysqlPromise.createPool({
  host: constant.host,
  user: constant.user,
  password: constant.password,
  database: constant.database,
  namedPlaceholders: true
})

export {format as formatSql} from 'mysql2'

export default pool
