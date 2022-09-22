<template>
  <div class="agree-protocol" @click="handleClick(!modelValue)">
    <div class="agree-protocol-checkbox">
      <van-checkbox :model-value="modelValue" class="checkbox" @click.stop="handleClick" />
    </div>
    <div class="agree-protocol-desc">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

let emits = defineEmits(['update:modelValue'])

function handleClick() {
  emits('update:modelValue', !props.modelValue)
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.agree-protocol {
  display: flex;
  align-items: flex-start;
  margin-top: func.rpx(18);
  font-size: func.rpx(12);

  .agree-protocol-checkbox {
    margin-right: 8px;
  }

  .agree-protocol-desc {
    flex-grow: 1;
    color: #8796B3;
    line-height: 1.3;
    transform: scale(0.85);
    transform-origin: 0 0;
  }
}
</style>
