import {Toast} from 'vant'
import type {AxiosResponse} from 'axios'
import axios from 'axios'
import type {HTTP_TYPES} from '@rabbit-run/common'

import store from '@/store'
import {getToken} from './auth'
import {log} from './log'

let devURL = 'http://localhost:5500/api' // 开发环境请求前缀
let proURL = '/api' // 生产环境请求前缀

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? devURL : proURL,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization
      config.headers = {
        Authorization: `Bearer ${getToken()}`,
        ...config.headers
      }
    }
    return config
  },
  (error) => {
    log('AxiosRequest', error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse<HTTP_TYPES.HttpMessage>) => {
    let data = response.data

    if (data.code !== 20000) {
      if (data.code === 50008 || data.code === 50012 || data.code === 50014) {
        handleTokenError(data)
      } else {
        handleError(data)
      }

      return Promise.reject(new Error(data.msg || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    log('AxiosResponse', error)
    return Promise.reject(error)
  }
)

function handleError(msg: HTTP_TYPES.HttpMessage) {
  log('handleError', msg)
  if (msg.data.errors) {
    Toast(msg.data.errors[0].msg)
  } else if (msg.data.error) {
    Toast(msg.data.error)
  } else {
    Toast(JSON.stringify(msg.data))
  }
}

function handleTokenError(msg: HTTP_TYPES.HttpMessage) {
  log('handleTokenError', msg)
  store.commit('user/removeToken')
  location.replace('/')
}

export default service
