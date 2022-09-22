const mysql = require('mysql2')

let conn = mysql.createConnection({
  host: 'lisys.club',
  user: 'rabbit_run',
  password: 'rabbit_run',
  database: 'rabbit_run',
  namedPlaceholders: true
})

let order = {
  from_address_id: 1,
  to_address_id: 1,
  name: 'name',
  kind: 'kind',
  price: '10元以下',
  remark: '',
  tip: 10,
  weight: 100,
  user_id: 13,
  a:`1 or 1=1'#`
}
// console.log(order)
// console.log(mysql.format('insert into rr_order set ?', order))

// conn.query(
//   mysql.format('select * from rr_order where id=?', [`3 or 1=1'#`]),
//   function (err,result) {
//     if(err){
//       console.log(err)
//     }
//
//     console.log(result)
//     conn.destroy()
//   }
// )
// conn.query('insert into rr_order set ?', order, function (err, result, fields) {
//   console.log(err)
//   conn.destroy()
// })
