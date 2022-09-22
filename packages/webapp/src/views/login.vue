<template>
  <div class="login">
    <div class="logo">
      <img :src="require('@/assets/login/slogan.png')" alt="slogan" />
    </div>

    <van-form ref="loginFormRef" class="block" label-width="80" @submit="handleLoginSubmit">
      <van-field
        v-model="loginFormInfo.phone"
        name="phone"
        center
        clearable
        type="number"
        placeholder="请输入手机号"
        :rules="[
          {required: true, message: '请填写手机号'},
          {pattern: /^1[3-9]\d{9}$/, message: '请输入正确手机号'}
        ]" />
      <div class="register-tips"> 自动为未注册手机号创建达达快送账号</div>

      <van-field
        v-model="loginFormInfo.code"
        name="code"
        center
        clearable
        placeholder="请填写验证码"
        :rules="[
          {required: true, message: '请填写验证码'},
          {pattern: /\d{6}/, message: '请填写6位验证码'}
        ]">
        <template #button>
          <div class="send-code-btn" @click="handleSendSms">
            <span v-if="isSendCode">
              <van-count-down :time="resendCodeTime" format="ss" @finish="isSendCode = false" />
              秒后重新发送
            </span>
            <span v-else>发送验证码</span>
          </div>
        </template>
      </van-field>

      <div class="mt-3">
        <van-button
          block
          round
          class="login-btn"
          color="linear-gradient(128deg, rgb(0, 140, 255), rgb(40, 200, 255))"
          :disabled="!agree"
          native-type="submit">
          立即登陆
        </van-button>
      </div>
    </van-form>

    <agree-protocol v-model="agree">
      <div class="whitespace-nowrap ml-3">
        阅读并同意
        <agree-book to="#"> 《隐私政策》</agree-book>
        、
        <agree-book to="#"> 《个人敏感信息授权协议》</agree-book>
        、
      </div>
      <div class="whitespace-nowrap">
        <agree-book to="#"> 《信息提供授权协议》</agree-book>
        及
        <agree-book to="#"> 《注册协议》</agree-book>
        ， 未满18岁用户不得使用
      </div>
    </agree-protocol>
  </div>
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
import {reactive} from 'vue'
import type {FormInstance} from 'vant'
import {Toast} from 'vant'

import {sendSms} from '@/api/auth'
import {useStore} from '@/store/hook'
import AgreeProtocol from '@/components/AgreeProtocol/index.vue'
import AgreeBook from '@/components/AgreeProtocol/AgreeBook.vue'

const store = useStore()
const router = useRouter()
const route = useRoute()

let isSendCode = $ref(false)
let resendCodeTime = $ref(300000)
let agree = $ref(false)
let loginFormRef = $ref<FormInstance | null>(null)
let loginFormInfo = reactive({
  phone: '',
  code: ''
})

function handleLoginSubmit() {
  store.dispatch('user/login', loginFormInfo).then(() => {
    router.replace((route.query['redirect'] as string) || '/')
  })
}

function handleSendSms() {
  loginFormRef?.validate('phone').then(() => {
    if (isSendCode) {
      Toast({
        message: '已经发送'
      })
    } else {
      isSendCode = true
      sendSms(loginFormInfo.phone)
    }
  })
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.login {
  width: 100vw;
  min-height: 100vh;
  background-color: #FFFFFF;
  @apply px-3;

  .logo {
    overflow: hidden;

    img {
      display: block;
      width: func.rpx(188);
      height: func.rpx(53);
      margin: func.rpx(80) auto func.rpx(40);
      object-fit: cover;
    }
  }

  .van-cell {
    padding: 0 func.rpx(20);
    border: 1px solid #F2F3F6;
    border-radius: func.rpx(30);
    font-size: func.rpx(14);

    &::after {
      display: none;
    }

    .send-code-btn {
      color: #008CFF;
      font-size: func.rpx(16);
      text-align: end;
    }

    :deep(.van-count-down) {
      display: inline-block;
      color: #008CFF;
    }

    :deep(input) {
      line-height: func.rpx(45);

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #FFFFFF inset;
      }
    }
  }

  .register-tips {
    margin: func.rpx(8) 0 func.rpx(20) func.rpx(17);
    color: #8796B3;
    font-size: func.rpx(12);
  }

  .login-btn {
    height: func.rpx(43);
    font-size: func.rpx(14);
  }
}
</style>
