<template>
  <div class="vertical-layout">
    <agent-header />
    <delivery-body class="flex-1 overflow-auto" />
    <delivery-footer />
  </div>
</template>

<script lang="ts" setup>
import {useStore} from '@/store/hook'
import AgentHeader from './components/AgentHeader/index.vue'
import DeliveryBody from './components/DeliveryBody.vue'
import DeliveryFooter from './components/DeliveryFooter.vue'

const store = useStore()

store.dispatch('user/getUser')
</script>
