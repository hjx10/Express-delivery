<template>
  <div class="w-[100vw] min-h-full bg-white">
    <van-cell-group>
      <van-cell is-link title="注册协议" to="protocol/registry"/>
      <van-cell is-link title="隐私政策" to="/protocol/privacy"/>
      <van-cell is-link title="隐私政策简要版" to="/protocol/shortprivacy"/>
      <van-cell is-link title="个人敏感信息授权协议" to="/protocol/sensitive"/>
      <van-cell is-link title="信息提供授权协议" to="/protocol/authorizatio"/>
      <van-cell is-link title="保价协议" to="/protocol/agreement"/>
      <van-cell is-link title="充值协议" to="/protocol/recharge"/>
      <van-cell is-link title="注销协议" to="/protocol/cancellation"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

:deep(.van-cell) {
  line-height: func.rpx(60);
  color: #000;
  font-size: func.rpx(17);
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>
