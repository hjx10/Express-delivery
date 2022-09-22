<template>
  <div class="home-content">
    <img class="mb-3" :src="require('@/assets/home/header.png')" alt="header" />

    <div class="px-3">
      <van-button class="place-on-order-btn" color="#E79B37" type="primary" block @click="handleClick">
        立即下单
      </van-button>

      <img v-for="item in 6" :key="item" :src="require(`@/assets/home/company-${item}.jpg`)" :alt="`company-${item}`" />
    </div>
  </div>
</template>

<script lang="ts" setup>
let emits = defineEmits(['click'])

function handleClick() {
  emits('click')
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";
@use "@rabbit-run/common/styles/var.scss";

.home-content {
  img {
    display: block;
    width: 100%;
    height: auto;
    -webkit-user-drag: none;
    user-select: none;
  }

  .place-on-order-btn {
    padding: func.rpx(25) 0;
    margin-bottom: 15px;
    font-size: func.rpx(18);
    line-height: 28px;
  }
}
</style>
