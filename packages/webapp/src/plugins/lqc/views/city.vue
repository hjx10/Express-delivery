<template>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="item in citys" :key="item" :title="item" />
  </van-list>
</template>

<script lang="ts" setup>
let citys = $ref(['北京', '上海', '广州', '深圳', '江西', '湖北', '湖南'])
</script>
