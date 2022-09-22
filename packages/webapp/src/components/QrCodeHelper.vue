<template>
  <van-popup
    :show="modelValue"
    position="bottom"
    closeable
    :style="{height: '100%'}"
    @update:show="$emit('update:modelValue', $event)">
    <div class="py-5 px-5 min-h-full bg-[#f4f4f4]">
      <qrcode-vue :value="value" :size="size" level="H" background="#f4f4f4" foreground="#3ac569" />
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import QrcodeVue from 'qrcode.vue'

defineProps({
  modelValue: {
    required: false,
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

let value = location.href
let size = 300
</script>
