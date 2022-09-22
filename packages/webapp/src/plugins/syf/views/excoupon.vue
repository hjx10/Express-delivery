<template>
  <div class="changecoupon">
    <span>兑换优惠券</span>
    <van-field v-model="value" placeholder="请输入兑换码" size="large" />
    <div class="btn">
      <van-button type="primary" size="large" style="border-radius: 50px"> 立即兑换</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
@use "@rabbit-run/common/styles/func.scss";

span {
  display: block;
  padding: 20px 40px;
  color: #0D1E40;
  font-size: 20px;
  font-weight: 600;
}

.btn {
  padding: 0 20px;
}

.changecoupon {
  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
}

:deep {
  .van-cell {
    width: func.rpx(340);
    border-bottom: 2px solid #2B3A58;
    margin: 0 25px;
  }

  .van-button {
    padding: 20px 0;
    border-color: #80C5FF;
    margin: 40px 0;
    background: #80C5FF;
  }
}
</style>
