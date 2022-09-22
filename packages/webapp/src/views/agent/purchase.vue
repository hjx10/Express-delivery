<template>
  <div class="vertical-layout">
    <agent-header />
    <purchase-body class="flex-1 overflow-auto" />
  </div>
</template>

<script lang="ts" setup>
import AgentHeader from './components/AgentHeader/index.vue'
import PurchaseBody from './components/PurchaseBody.vue'</script>
