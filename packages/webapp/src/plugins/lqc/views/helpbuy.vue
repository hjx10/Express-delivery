<template>
  <div class="navbar">
    <div>帮我送</div>
    <div>帮我买</div>
    <div>订单</div>
    <div>我的</div>
  </div>
  <div>
    <img src="../assets/03.png" alt="" />
  </div>
  <div>
    <van-notice-bar left-icon="volume-o" text="平台不支持代购处方类药品。" />
  </div>
  <h1>达达速购</h1>
  <div class="pay">
    <div>
      <img src="../assets/04.png" class="w-7" />
      <div>便利店</div>
    </div>
    <div>
      <img src="../assets/05.png" class="w-7" />
      <div>取快递</div>
    </div>
    <div>
      <img src="../assets/06.png" class="w-7" />
      <div>代买菜</div>
    </div>
  </div>
</template>

<script></script>

<style>
.navbar {
  display: flex;
  width: 100%;
  height: 10vw;
  justify-content: space-around;
  line-height: 10vw;
}

.pay {
  display: flex;
  justify-content: space-around;
}
</style>
