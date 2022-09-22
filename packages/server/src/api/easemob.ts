import axios from 'axios'

import constant from '@/constant'

let service = axios.create({
  baseURL: constant.easemboUrl,
  headers: {
    Authorization: `Bearer ${constant.easemboToken}`
  }
})

export async function registerUser(username: string, password: string) {
  let {data} = await service.post('/users', {
    username,
    password
  })
  return data['entities']
}

export async function getUserStatus(usernames: string[]) {
  let {data} = await service.post('/users/batch/status', {
    usernames: usernames
  })
  return data['username']
}

export async function getUserToken(username: string, password: string) {
  // 请求登录token，token有效期为1天并返回
  // https://docs-im.easemob.com/ccim/rest/usertoken
  let {data} = await service.post('/token', {
    grant_type: 'password',
    username: username,
    password: password,
    autoCreateUser: false
  })
  return data['access_token']
}

export default service
