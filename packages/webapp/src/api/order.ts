import request from '@/utils/request'

export interface OrderType {
  to_address_id: number
  from_address_id: number
  name: string
  kind: string
  weight: number
  price: string
  remark: string
  tip: number
  coupon_id: number
  expect_timestamp: string
}

export function placeOnOrder(data: OrderType) {
  return request({
    url: '/orders',
    method: 'POST',
    data
  })
}

export function getOrder(status?: number) {
  if (status === 0) {
    return request({
      url: '/orders',
      method: 'GET'
    })
  } else {
    return request({
      url: '/orders',
      method: 'GET',
      params: {status}
    })
  }
}
