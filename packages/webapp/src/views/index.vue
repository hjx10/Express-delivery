<template>
  <div ref="rootRef" class="home">
    <div class="bg-white">
      <almost-scroll ref="scrollRef" height="100vh">
        <template #top>
          <top-group :data="topData" @click="handleClick" />
        </template>

        <home-content @click="handlePlaceOnOrder" />
      </almost-scroll>
    </div>

    <routes-helper v-model="routesHelperShow" />
    <qr-code-helper v-model="qrHelperShow" />
  </div>
</template>

<script lang="ts" setup>
import type {BScrollInstance} from '@better-scroll/core'
import {useRouter} from 'vue-router'

import AlmostScroll from '@/components/AlmostScroll.vue'
import RoutesHelper from '@/components/RoutesHelper.vue'
import TopGroup from '@/components/TopGroup.vue'
import HomeContent from '@/views/_components/HomeContent.vue'
import QrCodeHelper from '@/components/QrCodeHelper.vue'

let router = useRouter()

let scrollRef = $ref<{ bs: BScrollInstance } | null>(null)
let routesHelperShow = $ref(false)
let qrHelperShow = $ref(false)
let keys = ['apps-o', 'wechat', 'qq', 'alipay', 'live', 'more', 'phone', 'location', 'bag', 'qr']
let topData = $ref(keys)

function handleClick(record: typeof keys[number]) {
  switch (record) {
    case 'apps-o':
      routesHelperShow = true
      break
    case 'qr':
      qrHelperShow = true
      break
  }
}

function handlePlaceOnOrder() {
  router.push('/agent/delivery')
}
</script>

<style lang="scss" scoped>
.home {
  :deep {
    .scroll-top {
      background-image: linear-gradient(#FFFFFF, #3A91FA 70%);
    }
  }
}
</style>
