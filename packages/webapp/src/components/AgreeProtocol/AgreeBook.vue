<template>
  <span class="link" @click.stop="handleClick"><slot /></span>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

let props = defineProps({
  to: {
    required: true,
    type: String
  }
})

let router = useRouter()

function handleClick() {
  router.push(props.to)
}
</script>

<style lang="scss" scoped>
.link {
  color: #007AFF;
}
</style>
