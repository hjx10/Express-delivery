<template>
  <div class="my-container">
    <!-- 我的 -->
    <div class="user">
      <div class="user-info">
        <h1 class="name">
          {{ user.nickname }}
        </h1>
        <p class="phone">
          {{ user.phone }}
        </p>
      </div>
      <div class="avatar">
        <img
          src="@/assets/my/avatar.png"
          alt="avatar"
        >
      </div>
    </div>

    <div class="nav">
      <router-link
        class="link"
        to="/orders"
      >
        <van-icon name="comment" />
        我的订单
      </router-link>
      <router-link
        class="link"
        to="/my/accrge"
      >
        <van-icon name="gold-coin" />
        账户充值
      </router-link>
      <router-link
        class="link"
        to="/coupon"
      >
        <van-icon name="balance-list" />
        优惠券
      </router-link>
      <router-link
        class="link"
        to="/my/problem"
      >
        <van-icon name="graphic" />
        常见问题
      </router-link>
      <router-link
        class="link"
        to="/my/feedback"
      >
        <van-icon name="phone-circle" />
        意见反馈
      </router-link>
      <router-link
        class="link"
        to="/my/prohibit"
      >
        <van-icon name="clear" />
        禁止配送物品目录
      </router-link>
      <router-link
        class="link"
        to="/my/bdinvite"
      >
        <van-icon name="send-gift" />
        BD邀请码
      </router-link>
      <router-link
        class="link"
        to="/my/cuscente"
      >
        <van-icon name="service" />
        联系客服
      </router-link>
      <router-link
        class="link"
        to="/my/license"
      >
        <van-icon name="graphic" />
        平台资质
      </router-link>
      <router-link
        class="link"
        to="/protocol"
      >
        <van-icon name="column" />
        法律条款
      </router-link>
      <router-link
        class="link"
        to="/my/queryExpress"
      >
        <van-icon name="gift-card" />
        快递查询
      </router-link>
      <router-link
        class="link"
        to="/my/setting"
      >
        <van-icon name="setting" />
        设置
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from '@/store/hook'

const store = useStore()

let user = $computed(() => store.state.user.user || {})

store.dispatch('user/getUser')
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.my-container {
  padding: 25px 28px;
  background-color: white;

  .user {
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #BCC1CC;

    .name {
      margin-bottom: 10px;
      font-size: 25px;
      font-weight: bold;
    }

    .phone {
      color: #BCC1CC;
      font-size: 14px;
    }

    .avatar {
      overflow: hidden;
      width: func.rpx(55);
      height: func.rpx(55);
      border: 1px solid #000000;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .link {
    display: block;
    margin-top: 20px;
    color: black;
    font-size: 18px;
    line-height: 28px;
    text-decoration: none;
  }
}
</style>
