export function log(issuer: string, msg: any) {
  console.log(`%c${issuer}: `, 'color:#E53A40;background:#E0E3DA;padding:3px;margin-right:5px;border-radius:3px;', msg)
}
