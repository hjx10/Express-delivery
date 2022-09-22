<template>
  <div class="top-group">
    <square-container v-for="item in data" :key="item" class="square-item enable-click" @click="handleClick(item)">
      <div class="w-full h-full enable-click">
        <div class="rounded-btn enable-click">
          <van-icon :name="item" class="enable-click" />
        </div>
      </div>
    </square-container>
  </div>
</template>

<script lang="ts" setup>
import SquareContainer from '@/components/SquareContainer'

defineProps({
  data: {
    required: true,
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['click'])

function handleClick(record) {
  emit('click', record)
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";
@use "@rabbit-run/common/styles/var.scss";

.top-group {
  display: flex;
  flex-wrap: wrap;

  .square-item {
    flex: 0 0 90px;
    padding: 15px;

    @media screen and (max-width: 576px) {
      flex: 0 0 20%;
    }

    .rounded-btn {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      border: 1px solid #D8E6E7;
      background-color: #FE4365;
      border-radius: 50%;
      box-shadow: var.$shadow-1;
      color: #FFFFFF;

      &:hover {
        box-shadow: unset;
      }

      .van-icon {
        font-size: func.rpx(30);

        @media screen and (min-width: 576px) {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
