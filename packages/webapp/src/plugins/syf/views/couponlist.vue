<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab title="已使用">
        <van-empty
          style="margin-top: 200px"
          :image="require('../assets/nocoupon.png')"
          image-size="80"
          description="暂无相关优惠券" />
      </van-tab>
      <van-tab title="已过期">
        <van-empty
          style="margin-top: 200px"
          :image="require('../assets/nocoupon.png')"
          image-size="80"
          description="暂无相关优惠券" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const active = ref(0)
    return {
      active
    }
  }
})
</script>

<style lang="scss" scoped>
:deep {
  .van-tab__text {
    margin-right: 0;
  }

  .van-tabs__line {
    background: #007AFF;
  }
}
</style>
