<template>
  <div class="discount-coupon">
    <van-nav-bar title="优惠券" left-arrow @click-left="onClickLeft" />

    <div class="coupon-card">
      <div class="coupon-left">
        <div class="left-icon"> 新家券</div>
        <div class="left-text">
          <div class="price">
            <span>￥</span>
            <span>0.1</span>
          </div>
          <div class="mag-img">
            <img src="@/assets/coupon/coupon-tag-hui.png" alt="" />
          </div>
          <div class="coupon-mag"> 一口价</div>
        </div>
      </div>
      <div class="coupon-right">
        <div class="right-text">
          <div class="coupon-title"> 1口价0.1元券</div>
          <div class="coupon-desc"> 最高减17元</div>
          <van-dropdown-menu style="padding-left: 0">
            <div class="dis_img"><img src="@/assets/coupon/coupon-dis-use.png" alt="" /></div>
            <van-dropdown-item ref="item" title="不可用原因" left-icon="info-o">
              <div style="padding: 15px 16px">
                <span>基础运费满6元可用</span>
                <span>新用户专享</span>
                <!-- <span>可用品类:个人</span>
                <span>基础运费满6元可用</span>
                <span>可用时段:全天</span>
                <span> 最高减17元 </span>
                <span>可用配送工具:电动车</span>
                <span>可用城市:不限</span>
                <span>优惠券不能抵扣小费、保费、优享配送服务费和动态溢价类费用</span>
                <span>新用户专享</span> -->
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </div>
      <div class="circle"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    const onClickLeft = () => history.back()
    return {
      onClickLeft
    }
  }
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

:deep {
  .van-nav-bar {
    margin-bottom: 25px;

    .van-icon,
    .van-nav-bar__title {
      color: #333333;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .van-dropdown-menu {
    position: relative;
    margin-top: 3px;

    .van-dropdown-menu__bar {
      display: block;
      height: 30px;
      background-color: transparent;
      box-shadow: none;
    }

    .van-ellipsis {
      color: #FF9600;
      font-size: 12px;
    }

    .van-dropdown-menu__title--active {
      color: #A7A7A8;
    }

    .van-popup {
      overflow-y: hidden;
    }

    .van-overlay {
      background-color: transparent;
    }

    .van-dropdown-item__content {
      max-height: 100%;
    }

    .van-dropdown-item {
      width: func.rpx(350);
      height: func.rpx(60);
      padding: 25px 10px;
      border: 1px solid #DDE2EB;
      margin: -3px 20px;
      background-color: #FFFFFF;

      div {
        display: flex;
        flex-flow: column wrap;
        line-height: 18px;

        span {
          color: #8796B3 !important;
          font-size: 12px !important;
        }
      }
    }
  }
}

.discount-coupon {
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
}

.coupon-card {
  position: relative;
  display: flex;
  width: func.rpx(350);
  height: func.rpx(90);
  border: 1px solid #E9ECF2;
  margin: 10px 20px 0;
  background-image: url("@/assets/coupon/beijing-hui.png");
  background-size: 100%;

  .coupon-left {
    width: func.rpx(85);
    height: func.rpx(77);
    color: #8796B3;

    .mag-img {
      position: absolute;
      top: 0;
      left: 0;
      width: func.rpx(51);
      height: func.rpx(20);
    }

    .left-icon {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      padding: 3px 5px;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 400;
    }

    .left-text {
      margin-top: 20px;
      text-align: center;

      .price {
        > span:last-child {
          font-size: 25px;
          font-weight: bold;
        }
      }

      .coupon-mag {
        margin-top: 8px;
        font-size: 12px;
      }
    }
  }

  .coupon-right {
    display: flex;
    width: func.rpx(265);
    padding: 15px 10px;
    position: relative;

    .coupon-title {
      display: flex;
      overflow: hidden;
      -webkit-box-orient: vertical;
      color: #8796B3;
      font-size: 14px;
      font-weight: 500;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
    }

    .coupon-desc {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #8796B3;
      font-size: 12px;
    }

    .dis_img {
      position: absolute;
      width: 15px;
      height: 15px;
      top: 2px;
      left: -6px;
    }
  }

  .circle {
    position: absolute;
    top: 35px;
    right: 15px;
    width: 20px;
    height: 20px;
    border: 1px solid #DDE2EB;
    border-radius: 50%;
  }
}
</style>
