<template>
  <div class="addaddress">
    <!-- 新增地址 -->
    <!-- 头部导航 -->
    <van-nav-bar @click-left="$router.back()">
      <template #title>
        <h1 class="text-[#333] text-[20px] font-bold">
          请填写发货地址
        </h1>
      </template>
      <template #left>
        <van-icon
          name="arrow-left"
          size="28"
          color="#333"
          class="font-bold"
        />
      </template>
    </van-nav-bar>

    <!-- 中间部分，信息输入 -->
    <van-form
      ref="formRef"
      class="middle-form"
      label-width="110"
    >
      <van-cell-group>
        <!-- 地址选择 -->
        <van-field
          v-model="formValue.result"
          is-link
          readonly
          name="area"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />

        <van-field
          v-model="formValue.houseNumber"
          label="门牌号"
          name="mph"
          placeholder="请填写门牌号（非必填）"
        />

        <van-field
          v-model="formValue.userName"
          label="联系人"
          name="userName"
          placeholder="请输入纯汉字姓名"
          :rules="[{pattern: /^[\u4e00-\u9fa5·]{2,16}$/, message: '请输入纯汉字姓名'}]"
        />

        <van-field
          v-model="formValue.phone"
          type="tel"
          label="电话"
          name="phone"
          placeholder="输入您的手机号"
          :rules="[{pattern: /^1[3-9]\d{9}$/, message: '请输入正确的11位手机号'}]"
        />
      </van-cell-group>

      <div class="smart-text-group">
        <div class="py-3 pl-[20px]">
          智能填写
        </div>
        <div>
          <van-field
            v-model="addressText"
            class="smart-text"
            maxlength="200"
            rows="4"
            type="textarea"
            placeholder="粘贴整段发货信息，自动识别并填充地址、姓名、电话。例如：上海市浦东新区浦东南路1036号隆宇大厦608室，13500000000，董先生"
          />
          <van-button
            class="smart-btn"
            color="#303747"
            round
            @click="handleSmartParser"
          >
            提交
          </van-button>
        </div>
      </div>
    </van-form>

    <div class="submit-panel">
      <van-button
        color="#303747"
        block
        @click="handleClick"
      >
        确定
      </van-button>
    </div>

    <van-popup
      v-model:show="showArea"
      position="bottom"
    >
      <van-area
        :area-list="areaList"
        @confirm="onConfirm"
        @cancel="showArea = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import type {FormInstance} from 'vant'
import {reactive} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {areaList} from '@vant/area-data'

import {useStore} from '@/store/hook'

let router = useRouter()
let route = useRoute()
let store = useStore()

let target = (route.query['target'] as string) || 'delivery'
let addressText = $ref('')
let showArea = $ref(false)
let formRef = $ref<FormInstance>()
let formValue = reactive({
  result: store.state.address[target]?.address,
  houseNumber: store.state.address[target]?.house_number,
  userName: store.state.address[target]?.contact,
  phone: store.state.address[target]?.phone
})

function onConfirm(areaValues) {
  showArea = false
  formValue.result = areaValues
    .filter((item) => !!item)
    .map((item) => item.name)
    .join('/')
}

function handleClick() {
  formRef.validate().then(() => {
    store
      .dispatch('address/addAddress', {
        type: target,
        addressInfo: {
          address: formValue.result,
          house_number: formValue.houseNumber,
          contact: formValue.userName,
          phone: formValue.phone
        }
      })
      .then(() => {
        router.back()
      })
  })
}

function handleSmartParser() {
  console.log(addressText.split(/[,， ]/))
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.addaddress {
  display: flex;
  height: 100vh;
  flex-direction: column;

  .middle-form {
    flex: 1;
    color: #333333;
    font-size: func.rpx(14);
    overflow-y: auto;

    :deep {
      .van-cell {
        @apply py-[20px];

        border-bottom: 1px solid #E7DFDF;
      }

      input::placeholder {
        color: #999999;
        font-size: 18px;
      }

      .van-cell__title {
        font-size: 16px;
      }

      .van-cell__title.address-title {
        width: 110px;
        flex: 0 0 110px;
        margin-right: 12px;
      }

      .van-cell__value.address-value {
        text-align: left;
      }
    }

    .smart-text-group {
      position: relative;

      .smart-text {
        padding-bottom: 50px;
      }

      .smart-btn {
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 62px;
        height: 31px;
      }
    }
  }

  .submit-panel {
    padding: func.rpx(20);
  }
}
</style>
