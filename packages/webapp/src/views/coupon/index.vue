<template>
  <div class="coupon-container">
    <!-- 导航条 -->
    <van-nav-bar
      title="优惠券"
      right-text="使用说明"
      @click-right="$router.push('/coupon/usemethod')"
    />

    <!-- 内容 -->
    <discount-coupon
      v-for="item in coupons"
      :key="item.id"
      :kind="item.kind"
      :satisfy="item.satisfy"
      :discount="item.discount"
      :effective-date="item.effective_date || ''"
      :expire-date="item.expire_date || ''"
      @click-use="handleClickUse(item)"
    />

    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item to="/coupon/couponlist">
        <img
          src="@/assets/coupon/coupon-invalid-icon.png"
          alt="coupon-invalid-icon"
        >
        <span>已失效优惠券</span>
      </van-tabbar-item>

      <div class="xian" />

      <van-tabbar-item to="/coupon/excoupon">
        <img
          src="@/assets/coupon/coupon-recharge.png"
          alt="coupon-recharge"
        >
        <span>兑换优惠券</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import {AxiosResponse} from 'axios'
import {useRouter} from 'vue-router'
import {HTTP_TYPES} from '@rabbit-run/common'

import {useStore} from '@/store/hook'
import {getCoupons} from '@/api/coupon'
import DiscountCoupon from './components/DiscountCoupon.vue'

const store = useStore()
const router = useRouter()

let coupons = $ref<HTTP_TYPES.CouponMessage[]>([])

function handleClickUse(record) {
  store.commit('coupon/setCurrent', record)
  router.back()
}

getCoupons(0).then(({data}: AxiosResponse<HTTP_TYPES.HttpCouponMessage>) => {
  coupons = data.data.coupons
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";
@use "@rabbit-run/common/styles/mixin.scss";

.coupon-container {
  @include mixin.container-bg-white;

  :deep {
    .van-nav-bar::after {
      display: none;
    }

    .van-nav-bar__content {
      .van-nav-bar__title {
        font-size: 18px;
      }

      .van-nav-bar__text {
        color: #323233;
        font-size: 14px;
      }
    }

    .van-tabbar {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      border-top: 1px solid #DDE1EB;
      color: #5C6880;
      line-height: func.rpx(50);

      .xian {
        width: func.rpx(2);
        height: func.rpx(20);
        background-color: #DDE1EB;
      }

      .van-tabbar-item__text {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 16px;
        }

        img {
          width: 18px;
          height: 15px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
