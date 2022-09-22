<template>
  <div class="changecoupon">
    <span>请输入BD邀请码</span>
    <van-field
      v-model="value"
      placeholder="请输入BD邀请码"
      size="large"
    />
    <div class="btn">
      <van-button
        type="primary"
        size="large"
        block
        :disabled="!value"
        @click="handleExchange"
      >
        绑定
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Toast} from 'vant'

import {addCoupon} from '@/api/coupon'

let value = $ref('')

function handleExchange() {
  addCoupon(value).then(() => {
    value = ''
    Toast('绑定完毕')
  })
}
</script>

<style scoped lang="scss">
@use "@rabbit-run/common/styles/func.scss";

span {
  display: block;
  text-align: center;
  margin-top: func.rpx(40);
  margin-bottom: func.rpx(10);
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
    margin: 40px 0;
  }
}
</style>
