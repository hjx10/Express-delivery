<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar title="动态显示状态" left-text="返回" left-arrow :fixed="true" @click-left="onClickLeft" />
    <!-- 聊天界面 -->
    <div id="chat">
      <div class="chatBox">
        <div class="chatBox-top">
          <div class="chatBox-top-imgBox">
            <van-image
              round
              width="40px"
              height="40px"
              class="object-cover"
              :src="require('../assets/customerPhotos.jpg')" />
          </div>
          <div class="chatBox-top-text">
            <span>客服小周正在为您服务</span>
          </div>
        </div>
        <div class="chatBox-middle">
          <div id="chatInfo" class="chatInfo">
            <div
              v-for="(item, index) in infoList"
              :key="index"
              class="chatUser-box"
              :class="[current == item.id ? 'chatUser-box1' : 'chatUser-box']">
              <!-- 数组内部的图片，当头像 -->
              <div class="chatUser-box-img">
                <van-image round width="60px" height="60px" :src="item.images" />
              </div>
              <!--  -->
              <div class="chatUser-info">
                <div
                  class="chatUser-info-name"
                  :class="[current == item.id ? 'chatUser-info-name1' : 'chatUser-info-name']">
                  <span>{{ item.name }}</span
                  ><span class="nowDate">{{ item.time }}</span>
                </div>
                <div
                  class="chatUser-info-text"
                  :class="[current == item.id ? 'chatUser-info-text1' : 'chatUser-info-text']">
                  <span>{{ item.message }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chatBox-infoDesk">
          <div class="chatBox-textarea">
            <van-field v-model="messages" rows="4" type="textarea" placeholder="请输入咨询信息" />
          </div>
          <div class="chatBox-sendOut">
            <van-button class="sendOut" type="primary" @click="getSends"> 客户</van-button>
            <van-button class="sendOut" type="primary" @click="getSend"> 用户</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Toast} from 'vant'
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const onClickLeft = () => history.back()
    // 输入框输入的数据
    const messages = ref('')
    const nowDate = ref('')
    // 控制消息在左还是在右，与id数值比较
    const current = ref<number>(2)
    const methods = {
      getSend() {
        if (messages.value == '') {
          Toast('请输入咨询信息')
          return
        }
        let userData = {
          id: 2,
          name: '艳芳',
          time: nowDate.value,
          images: '/avatr/customerPhotos1.jpg',
          message: messages.value
        }
        infoData.push(userData)
        messages.value = ''
      },
      getSends() {
        if (messages.value == '') {
          Toast('请输入回复信息')
          return
        }
        let customerData = {
          id: 1,
          name: '小周',
          time: nowDate.value,
          images: '/avatr/customerPhotos.jpg',
          message: messages.value
        }
        infoData.push(customerData)
        messages.value = ''
      }
    }
    const infoData = [
      {
        id: 2,
        name: '艳芳',
        time: '2021-4-23 18:00:05 星期五',
        images: '/avatr/customerPhotos1.jpg',
        message: '是小周嘛？'
      },
      {
        id: 1,
        name: '小周',
        time: '2021-4-23 17:59:50 星期五',
        images: '/avatr/customerPhotos.jpg',
        message: '您好！'
      },
      {
        id: 1,
        name: '小周',
        time: '2021-4-23 18:00:24 星期五',
        images: '/avatr/customerPhotos.jpg',
        message: '请问有什么需要帮助的吗？'
      }
    ]
    return {
      onClickLeft,
      infoList: infoData,
      current,
      ...methods,
      messages,
      nowDate
    }
  }
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

body {
  background-color: #E8E8E8;
}

#chat {
  width: 100%;
}

#chat .chatBox {
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: #FFFFFF;
  border-radius: 10px;
}

#chat .chatBox-top {
  display: flex;
  width: 100%;
  height: 50px;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 45px;
  background-color: #2B3D63;
}

#chat .chatBox-top-imgBox {
  margin-left: 10px;
}

#chat .chatBox-top-text {
  margin-left: 10px;
  color: #FFFFFF;
  font-size: 15px;
}

#chat .chatBox-middle {
  width: 100%;
  height: 630px;
  border-bottom: 1px solid #2B3D63;
  background-color: #FFFFFF;
}

#chat .chatBox-infoDesk {
  width: 100%;
  height: 110px;
  background-color: white;
}

#chat .chatBox-textarea {
  width: 100%;
  height: 70px;
  background-color: white;
}

#chat .chatBox-sendOut {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  text-align: right;
}

#chat .sendOut {
  height: 20px;
  padding: 0 5px;
  margin: 5px 10px 0 0;
}

#chat .chatInfo {
  overflow: auto;
  width: 94%;
  height: 94%;
  margin: func.rpx(1.25) auto;
}

#chat .chatUser-box {
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 6px;
}

#chat .chatUser-box-img {
  display: flex;
  align-items: bottom;
}

#chat .chatUser-info {
  margin: 0 10px;
}

#chat .chatUser-info-name {
  display: flex;
  flex-direction: row;
  color: #888888;
  font-size: 12px;
}

#chat .nowDate {
  margin: 0 10px;
}

#chat .chatUser-info-text {
  overflow: hidden;
  max-width: 100%;
  padding: func.rpx(10);
  margin-top: func.rpx(10);
  background-color: #E8E8E8;
  border-radius: func.rpx(10);
  float: left;
  table-layout: fixed;
  word-break: break-all;
}

#chat .chatUser-info-text span {
  font-size: func.rpx(0.9735);
  line-height: func.rpx(1.5625);
}

#chat .chatUser-box1 {
  flex-direction: row-reverse;
}

#chat .chatUser-info-name1 {
  flex-direction: row-reverse;
}

#chat .chatUser-info-text1 {
  float: right;
}
</style>
