import request from '@/utils/request'

/**
 * 发送短信接口
 */
export function sendSms(phone) {
  return request({
    url: '/oauth/sendsms',
    method: 'POST',
    data: {
      phone
    }
  })
}

export function login(data) {
  return request({
    url: '/oauth/login',
    method: 'POST',
    data: data
  })
}

export function getUser() {
  return request({
    url: '/user',
    method: 'GET'
  })
}
