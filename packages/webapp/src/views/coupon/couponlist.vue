<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab title="已使用">
        <van-empty
          v-if="useList.length===0"
          style="margin-top: 200px"
          :image="require('@/assets/coupon/nocoupon.png')"
          image-size="80"
          description="暂无相关优惠券"
        />
        <div v-else>
          <discount-coupon
            v-for="item in useList"
            :key="item.id"
            :kind="item.kind"
            :satisfy="item.satisfy"
            :discount="item.discount"
            :effective-date="item.effective_date || ''"
            :expire-date="item.expire_date || ''"
            disabled
          />
        </div>
      </van-tab>
      <van-tab title="已过期">
        <van-empty
          v-if="expireList.length===0"
          style="margin-top: 200px"
          :image="require('@/assets/coupon/nocoupon.png')"
          image-size="80"
          description="暂无相关优惠券"
        />
        <div v-else>
          <discount-coupon
            v-for="item in expireList"
            :key="item.id"
            :kind="item.kind"
            :satisfy="item.satisfy"
            :discount="item.discount"
            :effective-date="item.effective_date || ''"
            :expire-date="item.expire_date || ''"
            disabled
          />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import type {AxiosResponse} from 'axios'
import type {HTTP_TYPES} from '@rabbit-run/common'
import {triggerStatus} from '@rabbit-run/common'

import {getCoupons} from '@/api/coupon'
import DiscountCoupon from './components/DiscountCoupon.vue'

let active = $ref(0)
let useList = $ref<HTTP_TYPES.CouponMessage[]>([])
let expireList = $ref<HTTP_TYPES.CouponMessage[]>([])

getCoupons(triggerStatus.invalid)
  .then(({data}: AxiosResponse<HTTP_TYPES.HttpCouponMessage>) => {
    useList = data.data.coupons
  })

getCoupons(triggerStatus.invalid)
  .then(({data}: AxiosResponse<HTTP_TYPES.HttpCouponMessage>) => {
    expireList = data.data.coupons
  })
</script>

<style lang="scss" scoped>
:deep {
  .van-tab__text {
    margin-right: 0;
  }

  .van-tabs__line {
    background: #007AFF;
  }
}
</style>
