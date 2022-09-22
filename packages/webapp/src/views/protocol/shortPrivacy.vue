<template>
  <div class="body">
    <h2 class="strong">隐私政策简要版</h2>
    <p class="strong right">版本号：V1.0</p>
    <p class="strong right">更新时间：2022年8月16日</p>
    <p>我们非常注重保护用户(“您”）的个人信息及隐私，并希望通过本概要向您简洁介绍我们如何收集、使用和保护您的个人信息。本概要为小兔快送《隐私政策》的简要版本，如您希望了解我们详细的隐私政策，请点击查阅隐私政策正文全部内容。
    </p>
    <p>为提供服务收集使用的个人信息类型</p>
    <p>对于我们收集的个人信息清单明细，您可以查阅《个人信息收集清单》</p>
    <table>
      <tr>
        <td>账号登录、注册</td>
        <td>个人移动电话号码、唯一设备识别码（android_id）、拟使用的用户名和密码</td>
      </tr>
      <tr>
        <td>实名认证</td>
        <td>证件信息、姓名</td>
      </tr>
      <tr>
        <td>下单及订单管理</td>
        <td>下单商品、订单信息</td>
      </tr>
      <tr>
        <td>支付、提现</td>
        <td>订单信息、支付信息、账户信息、银行卡信息</td>
      </tr>
      <tr>
        <td>订单评价</td>
        <td>发布内容</td>
      </tr>
      <tr>
        <td>售后及客服服务</td>
        <td>聊天记录</td>
      </tr>
      <tr>
        <td>安全风控</td>
        <td>设备信息、日志信息及其他必要信息</td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'shortPrivacy'
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.body {
  padding: func.rpx(10);
  width: 100vw;
  min-height: 100vh;
  background-color: white;

  h2 {
    text-align: center;
    margin-bottom: func.rpx(15);
    font-size: func.rpx(20);
  }

  p {
    text-indent: 2em;
    margin-bottom: func.rpx(15);
    line-height: func.rpx(20);

    &.right {
      text-align: right;
    }
  }

  .strong {
    font-weight: bolder;
    color: #000;
  }

  .decoration {
    text-decoration: black;
  }

  table {
    border: 1px solid #000;

    td {
      padding: func.rpx(8) func.rpx(20);
      border: 1px solid #5c5c5c;
    }
  }

}


</style>
