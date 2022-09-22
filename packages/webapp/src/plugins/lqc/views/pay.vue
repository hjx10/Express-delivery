<template>
  <div id="fu">
    <div style="padding-top: 5vw; color: white; font-size: 10vw"> ￥75</div>
    <div class="paytime">
      <div>
        剩余支付时间:
        <van-count-down :time="time" />
      </div>
    </div>
  </div>

  <div class="flex m-[10px] border-[1px] border-[#F9F9F9]">
    <img src="../assets/vxpay.png" alt="" class="w-[7vw]" />
    <span class="leading-[27px]">微信支付</span>
  </div>

  <div class="fixed-btn">
    <van-button round type="success"> 立即支付75元</van-button>
  </div>
</template>

<script lang="ts" setup>
let time = $ref(30 * 60 * 60 * 1000)
</script>

<style>
#fu {
  width: 100%;
  height: 35vw;
  background: #47B14F;
  text-align: center;
}

.van-count-down {
  color: white;
  font-size: 20px;
  line-height: 38px;
}

.van-button {
  display: block;
  width: 95%;
  margin: 0 auto;
}

.fixed-btn {
  @apply fixed bottom-[20px] left-[10px] right-[10px];
}

.paytime {
  display: flex;
  width: 40%;
  height: 8vw;
  justify-content: center;
  margin: 10px auto;
  margin-top: 5vw;
  color: white;
}
</style>
