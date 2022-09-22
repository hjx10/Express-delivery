<template>
  <div>
    <van-search v-model="value" show-action shape="round" placeholder="输入收货人姓名或手机号" @search="onSearch">
      <template #action>
        <div @click="onClickButton" class="action_text">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {Toast} from 'vant'

export default defineComponent({
  setup() {
    const value = ref('')
    const onSearch = (val) => Toast(val)
    const onClickButton = () => Toast(value.value)
    return {
      value,
      onSearch,
      onClickButton
    }
  }
})
</script>

<style scoped>
.action_text {
  color: #3C87FA;
}

:deep(.van-search__content) {
  background-color: white;
  border: 1px solid #EEEEEE;
  font-size: 13px;
  padding: 3px 5px;
}
</style>
