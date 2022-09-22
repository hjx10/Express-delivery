import {triggerStatus} from '@rabbit-run/common'

import request from '@/utils/request'

export function getCoupons(trigger = triggerStatus.normal) {
  return request({
    url: '/coupon',
    params: {
      trigger
    },
    method: 'GET'
  })
}

export function addCoupon(code) {
  return request({
    url: '/coupon',
    method: 'POST',
    data: {
      code
    }
  })
}
