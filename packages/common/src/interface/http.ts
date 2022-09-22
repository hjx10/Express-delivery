import {Dictionary} from './utils'

/**
 * - 20000: Ok
 * - 50001: Fail
 * - 50404: Not Found
 * - 50008: Illegal token
 * - 50012: Other clients logged in
 * - 50014: Token expired
 */
export type StatesCodeType = 20000 | 50001 | 50404 | 50008 | 50012 | 50014

export interface HttpMessage<T = Dictionary> {
  code: StatesCodeType
  msg: string
  data: T
}

// 地址列表信息
export interface AddressMessage {
  id: number
  address: string
  house_number: string
  contact: string
  phone: string
}

export type HttpAddressMessage = HttpMessage<{ addresses: AddressMessage[] }>

// 环信token请求接口返回数据
export interface TokenMessage {
  username: string
  userToken: string
  customer: {
    id: number
    phone: string
  }
}

export type HttpTokenMessage = HttpMessage<TokenMessage>

// 用户信息
export interface UserMessage {
  balance: number
  nickname: string
  phone: string
}

export type HttpUserMessage = HttpMessage<UserMessage>

// 优惠卷信息
export interface CouponMessage {
  id: number,
  effective_date: string,
  expire_date: string,
  coupon_id: number,
  kind: number,
  satisfy: number, // 满足多少产生优惠
  discount: number, // 优惠价格为多少
}

export type HttpCouponMessage = HttpMessage<{ coupons: CouponMessage[] }>
