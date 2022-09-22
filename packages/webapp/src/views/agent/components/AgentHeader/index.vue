<template>
  <div class="agent-header">
    <div class="agent-function">
      <div :class="{active: $route.path === '/agent/delivery'}">
        <router-link to="/agent/delivery"> 帮我送</router-link>
      </div>
      <div :class="{active: $route.path === '/agent/purchase'}">
        <router-link to="/agent/purchase"> 帮我买</router-link>
      </div>
    </div>
    <div class="user-manager">
      <div class="order">
        <router-link to="/orders"> 订单</router-link>
      </div>
      <div class="my">
        <router-link to="/my"> 我的</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.agent-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: func.rpx(13) func.rpx(22) func.rpx(13) func.rpx(42);
  background-color: #FFFFFF;

  .agent-function {
    display: flex;
    color: #8796B3;
    font-size: func.rpx(16);

    > :first-child {
      margin-right: func.rpx(20);
    }

    .active {
      position: relative;
      color: #0D1E40;
      font-size: func.rpx(18);
      font-weight: bold;

      &::after {
        position: absolute;
        bottom: func.rpx(-10);
        left: 50%;
        display: block;
        width: func.rpx(22);
        height: func.rpx(6);
        background: url("@/assets/delivery/slide-line.png") 0 0 / 100% auto no-repeat;
        content: "";
        transform: translateX(-50%);
      }
    }
  }

  .user-manager {
    display: flex;
    color: #8796B3;
    font-size: func.rpx(16);

    > :first-child {
      margin-right: func.rpx(20);
    }
  }
}
</style>
