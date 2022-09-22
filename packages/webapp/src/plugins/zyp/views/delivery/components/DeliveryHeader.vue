<template>
  <div class="delivery-header">
    <div class="navleft">
      <span class="active">帮我送</span>
      <span>帮我买</span>
    </div>
    <div class="navright">
      <router-link to=""> 订单</router-link>
      <router-link to=""> 我的</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.delivery-header {
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: func.rpx(12) func.rpx(21) func.rpx(12) func.rpx(41);
  background-color: white;
  color: #8796B3;
  font-size: func.rpx(16);

  // 左边
  .navleft {
    display: flex;
    width: func.rpx(170);
    height: func.rpx(26);
    align-items: center;
    justify-content: space-between;

    > span {
      width: func.rpx(54);
      height: func.rpx(26);
      margin-right: func.rpx(30);
      line-height: func.rpx(26);
    }

    .active {
      position: relative;
      color: #0D1E40;
      font-size: func.rpx(18);
      font-weight: bold;
    }

    .active::after {
      position: absolute;
      bottom: func.rpx(-10);
      left: func.rpx(20);
      width: func.rpx(21);
      height: func.rpx(10);
      background-image: url("../assets/delivery/slide-line.png");
      background-repeat: no-repeat;
      background-size: 90%;
      content: " ";
    }
  }

  // 右边
  .navright {
    display: flex;
    width: func.rpx(110);
    justify-content: space-between;

    > a {
      margin-left: func.rpx(20);
    }
  }
}
</style>
