<template>
  <div class="header">
    <van-nav-bar title-class="beizhu" left-arrow @click-left="$router.back()">
      <template #title>
        <h1> 填写备注 </h1>
      </template>
      <template #left>
        <div class="left">
          <van-icon name="arrow-left" />
        </div>
      </template>
    </van-nav-bar>
  </div>
  <div class="message">
    <van-cell-group>
      <van-field
        v-model="message"
        rows="4"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="请填写备注信息"
        show-word-limit />
    </van-cell-group>
  </div>
  <div style="padding: 15px; background-color: white">
    <van-button color="black" block> 确认</van-button>
  </div>
</template>
<script lang="ts" setup>
let message = $ref('')
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

body {
  background-color: white;
}

.header {
  border-bottom: 1px solid #E9E9EB;

  h1 {
    color: #333333;
    font-size: func.rpx(18);
    font-weight: bold;
  }

  .left {
    color: #333333;
    font-size: func.rpx(18);
    font-weight: bold;
  }
}

.header .van-icon::before {
  display: inline-block;
  color: #333333;
  font-size: func.rpx(18);
  font-weight: bold;
}

.message {
  padding: func.rpx(15);
  margin-top: 1px;
  background-color: white;
}

.message .van-cell-group {
  border-top: 1px solid #E9E9EB;
  border-bottom: 1px solid #E9E9EB;
}
</style>
