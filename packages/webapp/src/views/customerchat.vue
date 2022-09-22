<template>
  <!-- 客服聊天界面 -->
  <div class="customer-chat">
    <!-- 顶部 -->
    <van-nav-bar
      title="动态显示状态"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="$router.back()"
    />
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
              :src="require('@/assets/my/customerPhotos.jpg')"
            />
          </div>
          <div class="chatBox-top-text">
            <span>客服小周正在为您服务</span>
          </div>
        </div>
        <div class="chatBox-middle">
          <div
            id="chatInfo"
            class="chatInfo"
            ref="xxx"
          >
          <!-- 对消息队列进行遍历 判断是在左侧还是在右侧-->
            <div
              v-for="(item, index) in messagesList"
              :key="index"
              class="chatUser-box"
              :class="[current === item.id ? 'chatUser-box1' : 'chatUser-box']"
            >
              <!-- 数组内部的图片，当头像 -->
              <div class="chatUser-box-img">
                <van-image
                  round
                  width="60px"
                  height="60px"
                  :src="item.images"
                />
              </div>
              <!--  -->
              <div class="chatUser-info">
                <div
                  class="chatUser-info-name"
                  :class="[current === item.id ? 'chatUser-info-name1' : 'chatUser-info-name']"
                >
                  <span>{{ item.name }}</span><span class="nowDate">{{ item.time }}</span>
                </div>
                <div
                  class="chatUser-info-text"
                  :class="[current === item.id ? 'chatUser-info-text1' : 'chatUser-info-text']"
                >
                  <span>{{ item.message }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chatBox-infoDesk">
          <div class="chatBox-textarea">
            <van-field
              v-model="messages"
              rows="4"
              type="textarea"
              placeholder="请输入咨询信息"
            />
          </div>
          <div class="chatBox-sendOut">
            <van-button
              class="sendOut"
              type="primary"
              @click="handleSend"
            >
              用户
            </van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {Toast} from 'vant'
import WebIM from 'easemob-websdk'
import {appKey, HTTP_TYPES} from '@rabbit-run/common'

import {getEasemobToken} from '@/api/easemob'

// 自定义数组对象类型
interface MessageType {
  id: number
  images: string
  name: string
  message: string
}

const route = useRoute()
let xxx = $ref<HTMLDivElement | null>(null)
let customer: HTTP_TYPES.TokenMessage['customer'] | null = null // 当前获取的可接入的客服信息
let messages = $ref('') // 输入框输入的数据
let current = $ref<number>(-1) // 控制消息在左还是在右，与id数值比较
let messagesList = $ref<MessageType[]>([])
let conn = new WebIM.connection({appKey}) // 环信SDK连接实例对象

/**
 * 发送文本消息
 * https://docs-im.easemob.com/ccim/web/message2#%E6%9E%84%E9%80%A0%E6%B6%88%E6%81%AF
 * @param msg - 消息主题内容
 */
function sendMessage(msg: any) {
  messagesList.push({
    id: -1,
    images: '/avatr/customerPhotos1.jpg',
    name: '小趴菜',
    message: msg
  })
  xxx!.scrollTop = xxx!.scrollHeight
  let imMsg = WebIM.message.create({
    chatType: 'singleChat', // 会话类型，设置为单聊。
    type: 'txt', // 消息类型。
    to: customer!.phone, // 消息接收方（用户 ID)。
    msg: msg // 消息内容。
  })

  return conn.send(imMsg)
}

/**
 * 处理点击发送按钮事件
 */
function handleSend() {
  sendMessage(messages)
}

// 环信事件监听
// https://docs-im.easemob.com/ccim/web/message2#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF
conn.addEventHandler('connection&message', {
  onConnected: () => {
    console.log('onConnected')
    sendMessage(route.query['que'] || '你好，客服')
  },
  onDisconnected: () => {
    console.log('onDisconnected')
  },
  onTextMessage: (message) => {
    // 收到消息事件
    console.log('收到消息', message)
    messagesList.push({
      id: Number(message.from!),
      images:'/avatr/customerPhotos.jpg',
      name:'神秘蓝皮龟',
      message:message.msg,
      })
      xxx!.scrollTop = xxx!.scrollHeight
  },
  onError: (error) => {
    console.log('onError', error)
  }
})

getEasemobToken().then(({data}) => {
  if (data.code === 20000) {
    customer = data.data.customer
    conn.open({
      user: data.data.username,
      accessToken: data.data.userToken
    })
  } else {
    Toast('获取环信token失败')
  }
})

onMounted(() => {
  conn.close() // 组件卸载时关闭连接，释放内存
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.customer-chat {
  width: 100vw;
  height: 100vh;
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
  align-items: flex-end;
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
