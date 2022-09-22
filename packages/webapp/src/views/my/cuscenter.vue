<template>
  <!-- 联系客服 -->
  <div class="box">
    <!-- 顶部背景图 -->
    <img src="@/assets/my/cuscenter1.png" alt="cuscenter1" />
    <!-- 自助服务 -->
    <div class="zizhu">
      <span>自助服务</span>
      <router-link to="#">
        服务进度
        <van-icon name="arrow" />
      </router-link>
    </div>
    <!-- 版心 -->
    <div class="center">
      <!-- 主体部分 -->
      <div class="zhu">
        <p>猜你想问</p>
        <div>
          <!-- v-for循环 -->
          <router-link v-for="(i, index) in list" :key="index" :to="`/customerchat?que=${encodeURIComponent(i)}`">
            {{ i }}
          </router-link>
          <!-- <router-link to="./customerchat">
            修改和重置密码的方式
          </router-link>
          <router-link to="./customerchat">
            APP版本升级更新
          </router-link>
          <router-link to="./customerchat">
            订单催单
          </router-link>
          <router-link to="./customerchat">
            是否支持到付？
          </router-link>
          <router-link to="./customerchat">
            达达快送可以发外地嘛？
          </router-link>
          <router-link to="./customerchat">
            异地下单的操作方式
          </router-link>
          <router-link to="./customerchat">
            下单后多久可以送达
          </router-link> -->
        </div>

        <van-button icon="replay" type="primary" @click="change()"> 换一批</van-button>
      </div>
      <!-- 下面按钮 -->
      <van-row justify="space-between">
        <van-col span="11">
          <img src="@/assets/my/cuscenter3.png" alt="cuscenter3" />
          <div>
            <h1>在线客服</h1>
            <p>24小时服务</p>
          </div>
        </van-col>
        <van-col span="11">
          <img src="@/assets/my/cuscenter2.png" alt="cuscenter2" />
          <div>
            <h1>电话客服</h1>
            <p>24小时服务</p>
          </div>
        </van-col>
      </van-row>
      <!-- 底部log -->
      <img class="botton_img" src="@/assets/my/cuscenterlogo.png" alt="cuscenterlogo" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const list = [
      '修改和重置密码的方式',
      'APP版本升级更新',
      '订单催单',
      '是否支持到付？',
      '达达快送可以发外地嘛？',
      '异地下单的操作方式',
      '下单后多久可以送达'
    ]
    const xxx = ref<boolean>(true)
    const methods = {
      change() {
        xxx.value = !xxx.value
        console.log('xxx', xxx)
      }
    }
    return {
      xxx,
      list,
      ...methods
    }
  }
})
</script>

<style scoped lang="scss">
@use "@rabbit-run/common/styles/func.scss";

.zizhu {
  position: absolute;
  top: 160px;
  left: 15px;
  display: flex;
  width: func.rpx(360);
  height: 75px;
  justify-content: space-between;
  padding: 15px 12px;
  background-color: white;
  border-radius: 10px;

  span {
    font-size: 17px;
  }

  a {
    color: #666666;
    font-size: 15px;
  }
}

.box {
  position: relative;
  min-height: 100vh;
  background-color: #EEEEEE;
}

.center {
  width: func.rpx(360);
  margin: 35px auto;

  .zhu {
    position: relative;
    width: 100%;
    height: 400px;
    padding: 15px 12px;
    background-color: white;
    border-radius: 10px;

    a {
      display: block;
      width: 100%;
      margin: 18px 0;
      color: #666666;
      font-size: 18px;
    }

    .van-button {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      border: 0;
      border-top: 1px solid #EEEEEE;
      background-color: white;
      border-radius: 0 0 10px 10px;
      color: #039EFF;
    }
  }
}

.van-col {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  background-color: white;
  border-radius: 20px;

  img {
    width: 25px;
    height: 25px;
  }

  h1 {
    font-size: 18px;
  }

  p {
    color: #666666;
    font-size: 12px;
  }
}

.botton_img {
  width: func.rpx(110);
  margin: 35px auto;
}
</style>
