<template>
  <van-nav-bar title="优惠券" left-text="返回" left-arrow @click-left="onClickLeft" />

  <div class="discount-coupon">
    <div class="coupon-card">
      <div class="coupon-left">
        <div class="left-icon"> 新家券</div>
        <div class="left-text">
          <div class="price">
            <span>￥</span>
            <span>0.1</span>
          </div>
          <div class="mag-img">
            <img src="../assets/coupon-title-icon.png" alt="" />
          </div>
          <div class="coupon-mag"> 一口价</div>
        </div>
      </div>
      <div class="coupon-right">
        <div class="right-text">
          <div class="coupon-title"> 1口价0.1元券</div>
          <div class="coupon-desc"> 最高减17元</div>
          <van-dropdown-menu style="padding-left: 0">
            <van-dropdown-item ref="item" title="不可用原因">
              <div style="padding: 15px 16px">
                <span>生效日期:2022年08月10日</span>
                <span>失效日期:2022年08月12日</span>
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
      <van-button type="primary" size="small" style="border-radius: 50px"> 去使用</van-button>
    </div>
  </div>
</template>
export default { setup() { const onClickLeft = () => history.back(); return { onClickLeft, }; }, };

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

:deep {
  .van-dropdown-menu {
    position: relative;
    margin-top: 3px;
    margin-left: -38px;
  }

  .van-dropdown-menu__bar {
    display: block;
    height: 30px;
    background-color: transparent;
    box-shadow: none;
  }

  .van-ellipsis {
    color: #A7A7A8;
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
    height: func.rpx(250);
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
  background-image: url("../assets/beijing.png");
  background-size: 100%;

  .coupon-left {
    width: func.rpx(85);
    height: func.rpx(77);
    color: #008CFF;

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

    .coupon-title {
      display: flex;
      overflow: hidden;
      -webkit-box-orient: vertical;
      color: #0D1E40;
      font-size: 14px;
      font-weight: 500;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
    }

    .coupon-desc {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #5C6880;
      font-size: 12px;
    }
  }

  button {
    position: absolute;
    top: 29px;
    right: 15px;
    padding: 0 20px;
  }
}
</style>
