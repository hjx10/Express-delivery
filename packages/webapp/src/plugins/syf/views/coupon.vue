<template>
  <div>
    <!-- 导航条 -->
    <van-nav-bar title="优惠券" right-text="使用说明" @click-right="onClickRight" />
    <!-- 内容 -->
    <discount-coupon />
    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item to="/syf/couponlist">
        <img src="../assets/coupon-invalid-icon.png" alt="" />
        <span>已失效优惠券</span>
      </van-tabbar-item>
      <div class="xian" />
      <van-tabbar-item to="/syf/excoupon">
        <img src="../assets/coupon-recharge.png" alt="" />
        <span>兑换优惠券</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import DiscountCoupon from '../components/DiscountCoupon.vue'

export default {
  components: {DiscountCoupon},
  setup() {
    const $router = useRouter()
    const onClickRight = () => {
      $router.push('/syf/usemethod')
    }
    const active = ref(0)
    return {
      active,
      onClickRight
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

div {
  background-color: #FFFFFF;
}

:deep {
  .van-nav-bar::after {
    display: none;
  }

  .van-nav-bar__content {
    padding: 20px 0;

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
</style>
