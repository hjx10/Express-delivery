<template>
  <div class="address-favorites">
    <van-nav-bar
      title="常用发货地址"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="p-2">
      <div
        v-for="item in addresses"
        :key="item.id"
        class="address-item"
      >
        <div
          class="address-item-info"
          @click="handleChooseAddress(item)"
        >
          <div class="address">
            {{ item.address }}
          </div>
          <div class="house-number">
            {{ item.house_number }}
          </div>
          <div class="contact">
            {{ item.contact }} {{ item.phone }}
          </div>
        </div>
        <div class="delete-btn">
          <van-button
            type="danger"
            size="small"
            @click.stop="handleDelete(item)"
          >
            删除
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {AxiosResponse} from 'axios'
import {useRoute, useRouter} from 'vue-router'
import {HTTP_TYPES} from '@rabbit-run/common'

import {deleteAddress, getAddress} from '@/api/address'
import {useStore} from '@/store/hook'

const route = useRoute()
const router = useRouter()
const store = useStore()

let target = (route.query['target'] as string) || 'delivery'
target = target[0].toUpperCase() + target.substring(1)
let addresses = $ref<HTTP_TYPES.AddressMessage[]>([])

function handleChooseAddress(item: HTTP_TYPES.AddressMessage) {
  store.commit('address/set' + target, item)
  router.back()
}

function handleDelete(item: HTTP_TYPES.AddressMessage) {
  deleteAddress(item.id)
    .then(() => getAddress())
    .then(({data}: AxiosResponse<HTTP_TYPES.HttpAddressMessage>) => {
      addresses = data.data.addresses
    })
}

getAddress().then(({data}: AxiosResponse<HTTP_TYPES.HttpAddressMessage>) => {
  addresses = data.data.addresses
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";
@use "@rabbit-run/common/styles/mixin.scss";

.address-favorites {
  @include mixin.container-bg-white;

  .address-item {
    @apply py-[15px];
    border-bottom: 1px solid #E9E9EB;
    color: #22252A;
    font-size: func.rpx(14);
    display: flex;
    align-items: center;

    &:first-child {
      border-top: 1px solid #E9E9EB;
    }

    .address-item-info {
      flex: 1;

      %ellipsis {
        width: 100%;
        @include mixin.text-ellipsis;
      }

      .address {
        @extend %ellipsis;

        line-height: 2;
        font-size: func.rpx(17);
      }

      .house-number {
        @extend %ellipsis;

        color: #BCC1CC;
      }

      .contact {
        @extend %ellipsis;

        display: flex;
        margin-top: 10px;
      }
    }
  }
}
</style>
