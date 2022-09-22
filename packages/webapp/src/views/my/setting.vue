<template>
  <div class="px-3 pt-2">
    <van-button
      block
      type="warning"
      @click="handleClick"
    >
      退出登录
    </van-button>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from '@/store/hook'

const store = useStore()

function handleClick() {
  store.commit('user/removeToken')
  location.replace('/')
}
</script>
