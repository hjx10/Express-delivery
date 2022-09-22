<template>
  <van-cell-group inset>
    <van-field
      v-model="message"
      rows="2"
      autosize
      label="留言"
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit />
  </van-cell-group>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    const message = ref('')
    return {message}
  }
}
</script>
