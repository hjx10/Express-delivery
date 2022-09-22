<template>
  <div class="body">
    <div class="header">
      <van-nav-bar title-class="beizhu" left-arrow @click-left="onClickLeft">
        <template #title>
          <h1 style="color: #333333; font-size: 18px; font-weight: bold"> 填写保价物品的金额 </h1>
        </template>
        <template #left>
          <div style="color: #333333; font-size: 18px; font-weight: bold">
            <van-icon name="arrow-left" />
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="insurance">
      <div class="text">
        <input type="text" placeholder="输入金额不大于1万元" />
        <span>元</span>
      </div>
      <div class="price">
        <span>需收取保价费</span>
        <span style="margin-left: 5px">0元</span>
      </div>
      <van-notice-bar
        left-icon="volume-o"
        wrapable
        :scrollable="false"
        text="若配送过程中导致物品损坏或丢失，我们将根据您提供的物品信息及价值凭证进行赔偿，赔偿金额不超过您选择的保价最高金额。
" />
      <div style="padding: 20px 0; color: #BCC1CC">
        <van-radio-group v-model="checked">
          <van-radio name="1">
            <span>已同意并已阅读</span>
            <router-link to="/hjx/agreement" style="color: #317DFB"> 《保价协议》</router-link>
          </van-radio>
        </van-radio-group>
      </div>

      <div style="margin-top: 15px; background-color: white">
        <van-button color="black" block> 确认</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const checked = ref('0')
    const onClickLeft = () => history.back()
    return {
      onClickLeft,
      checked
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.body {
  width: 100vw;
  height: 100vh;
  background-color: white;
}

.header {
  border-bottom: 1px solid #E9E9EB;
}

.header .van-icon::before {
  display: inline-block;
  color: #333333;
  font-size: func.rpx(18);
  font-weight: bold;
}

.van-notice-bar {
  align-items: flex-start;
}

// 内容
.insurance {
  padding: func.rpx(15);
  background-color: white;
}

.text {
  display: flex;
  height: func.rpx(70);
  justify-content: space-between;
  border-top: 1px solid #E9E9EB;
  border-bottom: 1px solid #E9E9EB;
  margin: func.rpx(10) 0;
  line-height: func.rpx(70);
}

.price {
  margin: 15px 0;
}

.price > span:last-child {
  color: #317DFB;
}

.van-notice-bar--wrapable {
  background: white;
  color: #FFAE33;
}

.van-badge__wrapper {
  margin-top: 15px;
}

.insurance i {
  font-size: 10px;
}
</style>
