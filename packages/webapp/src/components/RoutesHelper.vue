<template>
  <van-popup
    :show="modelValue"
    position="bottom"
    closeable
    :style="{height: '100%'}"
    @update:show="$emit('update:modelValue', $event)">
    <div class="py-5 min-h-full bg-gray-500">
      <van-cell-group inset>
        <van-cell title="功能已关闭，全面迁移主页" is-link />
        <van-cell title="地图调试" is-link to="/map" />
      </van-cell-group>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    required: false,
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])
</script>
