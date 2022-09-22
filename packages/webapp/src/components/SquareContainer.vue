<template>
  <div class="square-container" :style="{width}">
    <div class="square-wrap">
      <div class="box">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  width: {
    required: false,
    type: String,
    default: '100%'
  }
})
</script>

<style lang="scss" scoped>
.square-container {
  .square-wrap {
    position: relative;
    width: 100%;
    padding-top: 100%;

    .box {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
