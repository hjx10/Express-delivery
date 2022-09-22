<template>
  <div>
    <img src="@/assets/my/prohibt.png" class="w-[100vw]">
    <div class="body">
      <van-button type="primary" block @click="onClick">
        我知道了
      </van-button>
    </div>
  </div>

</template>
<script lang="ts" setup>
const onClick = () => history.back()
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.body {
  width: 100vw;
  padding: func.rpx(22);
  background-color: white;
  color: #656c70;

}
</style>
