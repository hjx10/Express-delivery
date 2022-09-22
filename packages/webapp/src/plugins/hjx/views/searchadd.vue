<template>
  <div class="body">
    <div class="header">
      <van-nav-bar title-class="beizhu" left-arrow @click-left="onClickLeft">
        <template #title>
          <h1> 地址搜索 </h1>
        </template>
        <template #left>
          <div style="color: #333333; font-size: 18px; font-weight: bold">
            <van-icon name="arrow-left" />
          </div>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const checked = ref(false)
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

h1 {
  color: #333333;
  font-size: func.rpx(18);
  font-weight: bold;
}

.header .van-icon::before {
  display: inline-block;
  color: #333333;
  font-size: func.rpx(18);
  font-weight: bold;
}
</style>
