<template>
  <div class="delivery">
    <delivery-header />
  </div>
</template>

<script lang="ts" setup>
import DeliveryHeader from './components/DeliveryHeader.vue'</script>

<style lang="scss" scoped>
.delivery {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
}
</style>
