<template>
  <div class="pt-[80px]">
    <div class="chatroom">
      <div class="chatroom-navbar">
        <div class="login-user">
          <div class="login-user-avatar">
            <img src="@/assets/customerPhotos.jpg" alt="avatar" />
          </div>
          <div class="login-username"> 神秘客服 </div>
        </div>
        <div class="chatroom-status"> 对方正在输入... </div>
      </div>
      <div class="chat-panel">
        <!-- 左侧用户列表 -->
        <div class="user-list">
          <div
            v-for="item in users"
            :key="item.id"
            class="user"
            :class="{active: item.id === currentUserId}"
            @click="userListAvatar(item.id)">
            <div class="user-avatar">
              <img src="@/assets/customerPhotos1.jpg" alt="user-avatar" />
            </div>
            <div class="user-name">
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- 右侧消息显示列表 -->
        <div class="user-messages">
          <div class="messages" ref="Messages">
            <div v-for="(item, index) in currentUserMessages" :key="index">
              <div v-if="item.type === 0" class="left">
                {{ item.value }}
              </div>
              <div v-else class="right">
                {{ item.value }}
              </div>
            </div>
          </div>
          <div class="control">
            <textarea autofocus v-model="text" />
            <button @click="sendNew" class="send-btn"> 发送 </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue'
import WebIM from 'easemob-websdk'
import {appKey} from '@rabbit-run/common'

// 判断消息类型
interface MessagesType {
  type: 0 | 1 // 0为接收，1为发送
  value: string // 接收到的信息
}

// 每个用户的对象的基本属性
interface UserType {
  id: string
  name: string
  phone: string
  avatar: string
  messages: MessagesType[]
}

let Messages = ref<HTMLDivElement | null>(null)
let text = ref<string>('') //客服输入框双向数据绑定的值
let users = ref<UserType[]>([]) // 用户列表
let currentUserId = ref<UserType['id'] | null>(null) // 当前激活的用户id
let currentUserMessages = computed(function () {
  if (currentUserId.value) {
    let currentUser = users.value.find((v) => v.id === currentUserId.value)
    console.log('currentUser', currentUser)
    if (currentUser) {
      return currentUser.messages
    }
  }
  return []
}) // 当前的消息列表
let conn = new WebIM.connection({appKey}) // 环信SDK连接实例

/**
 * 发送文本消息
 * https://docs-im.easemob.com/ccim/web/message2#%E6%9E%84%E9%80%A0%E6%B6%88%E6%81%AF
 * @param userId - 用户id
 * @param msg - 消息主题内容
 */
function sendMessage(userId: string, msg: any) {
  let imMsg = WebIM.message.create({
    chatType: 'singleChat', // 会话类型，设置为单聊。
    type: 'txt', // 消息类型。
    to: userId, // 消息接收方（用户 ID)。
    msg: msg // 消息内容。
  })
  return conn.send(imMsg)
}

function sendNew() {
  // 通过双向数据绑定 text 获取多文本输入框的值
  console.log('text:', text.value)
  console.log('users.value:', users.value)
  // 保证接收到消息后滚动条持续在底部
  let user = users.value.find((v) => v.id === currentUserId.value!)
    if (user) {
      user.messages.push({type: 1, value: text.value})
      Messages.value!.scrollTop = Messages.value!.scrollHeight
      // 调用sendMessage方法将信息发送到客户端
      sendMessage(currentUserId.value!, text.value)
   }
}

// 左侧用户列表添加点击事件
function userListAvatar(id) {
  currentUserId.value = id
  console.log('id', id)
}

// 登录环信打开连接
conn.open({
  user: 'customer',
  pwd: 'customer'
})

// 环信事件监听
// https://docs-im.easemob.com/ccim/web/message2#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF
conn.addEventHandler('connection&message', {
  onConnected: () => {
    console.log('onConnected')
  },
  onDisconnected: () => {
    console.log('onDisconnected')
  },
  onTextMessage: (message) => {
    // 收到消息事件
    console.log('收到消息', message)
    //判断是否是新用户，逻辑为用户列表里是否有id与message中的id相同
    // findIndex( 查找数组里有无指定对象)  无则为-1  有则是满足当前条件对象的下标
    let userId = users.value.findIndex((v) => v.id === message.from)
    console.log('userId', userId)
    if (userId == -1) {
      // 将接收到的消息push到用户数组里
      users.value.push({
        id: message.from!,
        name: message.from!,
        phone: message.from!,
        avatar: '@/assets/customerPhotos1.jpg',
        messages: [{type: 0, value: message.msg}]
      })
      // 保证接收到消息后滚动条持续在底部
    Messages.value!.scrollTop = Messages.value!.scrollHeight
      //  index.value=users.value.length-1
    } else {
      users.value[userId].messages.push({type: 0, value: message.msg})
      // 保证接收到消息后滚动条持续在底部
    Messages.value!.scrollTop = Messages.value!.scrollHeight
      // index.value = userId
    }
  },
  onError: (error) => {
    console.log('onError', error)
  }
})

onMounted(() => {
  conn.close() // 卸载组件以后关闭环信
})
</script>

<style lang="scss" scoped>
.chatroom {
  width: 900px;
  height: 500px;
  border-radius: 15px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #3e82fc;
  box-shadow: 2px 2px 5px #58656d;

  .chatroom-navbar {
    background-color: #0d1e40;
    color: #ffffff;
    height: 60px;
    display: flex;
    flex: 0 0 60px;
    align-items: center;

    .login-user {
      padding-left: 15px;
      display: flex;
      align-items: center;
      width: 260px;
      overflow: hidden;

      .login-user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 6px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .login-username {
        font-size: 18px;
      }
    }

    .chatroom-status {
      flex: 1;
    }
  }

  .chat-panel {
    height: 438px;
    display: flex;

    .user-list {
      background-color: #eae8e7;
      width: 260px;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      border-right: 1px solid #b7c9e2;

      .user {
        border-bottom: 1px solid #b7c9e2;
        border-right: 1px solid #b7c9e2;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        user-select: none;
        cursor: pointer;
        color: #2b3a58;

        &.active {
          background-color: #ffffff;
          color: #75b3e7;
          border-right-color: #ffffff;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 5px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .user-name {
          margin-left: 15px;
          flex: 1;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    .user-messages {
      flex: 1;
      display: flex;
      flex-direction: column;

      .messages {
        padding: 15px 15px 0 15px;
        height: 300px;
        overflow: auto;
        overflow-x: hidden;
        flex: 1;
        background-color: #ffffff;

        .left,
        .right {
          position: relative;
          line-height: 16px;
          font-size: 14px;
          max-width: 50%;
          margin-bottom: 15px;
          background-color: #75b3e7;
          padding: 8px;
          color: #3f012c;
          border-radius: 8px;
        }

        .right {
          transform: translateX(100%);
        }

        .left::before {
          content: '';
          display: block;
          position: absolute;
          left: -18px;
          top: 5px;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-right-color: #75b3e7;
        }

        .right::before {
          content: '';
          display: block;
          position: absolute;
          right: -18px;
          top: 5px;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-left-color: #75b3e7;
        }
      }

      .control {
        background-color: #d8dcd6;
        height: 150px;
        position: relative;

        textarea {
          display: block;
          resize: none;
          background-color: transparent;
          width: 100%;
          height: 100%;
          outline: none;
          padding: 10px;
          font-size: 16px;
          color: #333333;
        }

        .send-btn {
          position: absolute;
          right: 10px;
          bottom: 10px;
          padding: 10px;
          color: #ffffff;
          background-color: #2f6ef8;
        }
      }
    }
  }
}
</style>
