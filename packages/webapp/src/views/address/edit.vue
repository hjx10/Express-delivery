<template>
  <div class="addaddress">
    <!-- 新增地址 -->
    <!-- 头部导航 -->
    <van-nav-bar>
      <template #title>
        <h1 class="text-[#333] text-[20px] font-bold">
          请编辑您的{{ editTitle }}地址
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
      class="middle-form"
      label-width="110"
    >
      <van-cell-group>
        <!-- 地址选择 -->
        <van-field
          v-model="result"
          is-link
          readonly
          name="area"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />

        <van-field
          v-model="houseNumber"
          label="门牌号"
          placeholder="请填写门牌号（非必填）"
        />

        <van-field
          v-model="userName"
          label="联系人"
          placeholder="请输入姓名"
          :rules="[{validator: checkName, message: '请输入纯汉字姓名'}]"
        />

        <van-field
          v-model="phone"
          type="tel"
          label="电话"
          placeholder="输入手机号或座机号"
          :rules="[{validator: checkPhone, message: '请输入正确的11位手机号'}]"
        />
      </van-cell-group>

      <!-- 是否设置地址为默认地址 -->
      <van-field
        name="switch"
        label-width="200"
        label="是否设置地址为默认地址"
      >
        <template #input>
          <van-switch
            v-model="checked"
            size="20"
          />
        </template>
      </van-field>
    </van-form>

    <div class="submit-panel">
      <van-button
        color="red"
        block
      >
        删除
      </van-button>
    </div>

    <div class="submit-panel">
      <van-button
        color="#303747"
        block
        @click="getDate()"
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
import {areaList} from '@vant/area-data'
import {useRouter} from 'vue-router'

const router = useRouter()

let checked = $ref(false)
let houseNumber = $ref('')
let userName = $ref('')
let phone = $ref('')
let result = $ref('')
let showArea = $ref(false)

function onConfirm(areaValues) {
  showArea = false
  result = areaValues
    .filter((item) => !!item)
    .map((item) => item.name)
    .join('/')
}

// 正则校验电话函数返回 true 表示校验通过，false 表示不通过
function checkPhone() {
  // 验证密码框
  let exp = /^1[3-9]\d{9}$/
  if (exp.test(phone)) {
    return true
  }
}

// 正则校验用户名函数返回 true 表示校验通过，false 表示不通过
function checkName() {
  // 验证密码框
  let exp = /^(?:[\u4e00-\u9fa5·]{2,16})$/
  if (exp.test(userName)) {
    // 验证成功
    return true
  } else {
    // 验证失败
    userName = ''
    return false
  }
}

// 此处应该是将数据导入到数据库内
function getDate() {
  if (checkName() && checkPhone()) {
    $router.push(
      `/address/favorites?houseNumber=${houseNumber.value}&userName=${userName.value}&phone=${phone.value}`
    )
  } else {
    return
  }
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
