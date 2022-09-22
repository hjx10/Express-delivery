<template>
  <div class="body">
    <h2 class="strong">隐私政策</h2>
    <p class="strong">
      尊敬的快送用户：我们对《隐私政策》进行了更新，此版本更新主要集中在：更新第三方平台物流助手传输场景、协议排版优化，以便于您更加清晰、直观了解个人信息的保护政策。</p>
    <p class="strong">
      【重要提示】请您在使用我们提供的各项产品/服务前，仔细阅读并充分理解本《隐私政策》（重点内容我们已将字体加粗请您特别关注）并作出相应选择。</p>
    <p>本政策适用于由达疆网络科技（上海）有限公司（注册地址：上海市杨浦区杨树浦路1088号2205单元）及其关联公司（以下称“小兔集团”）运营的<strong
      class="decoration"
    >小兔快送产品和服务及其延伸的功能，包括小兔快送APP、小兔快送PC端、小兔快送微信小程序、小兔快送支付宝服务端等小兔快送不时于其他合作第三方平台展示的服务端、以及其他随技术发展出现的新形态向您提供的各项产品和服务</strong>
      （以下称“小兔快送平台”）。如我们提供的某款产品有单独的隐私政策或相应的用户服务协议中存在特殊约定，则该产品的隐私政策将优先使用，该款产品隐私政策和用户服务协议未涵盖的内容，以本政策内容为准。如我们关联公司的产品或服务中使用了小兔提供的产品或服务但未设置独立隐私政策的，则本隐私政策同样适用于该部分产品或服务。
    </p>
    <p>
      小兔快送隐私政策相关文件包括：《隐私政策》、《个人敏感信息授权协议》、《信息提供授权协议》，共同适用于由小兔集团运营的<strong
      class="decoration"
    >小兔快送系列产品或服务</strong></p>
    <p>
      <strong>除本政策说明的相关信息收集使用活动外，本政策不适用于小兔快送平台内的其他第三方向您提供的其他服务，其他服务适用其向您另行说明的隐私政策等个人信息收集使用规则。</strong>例如，当您使用“一键登录”方式登录小兔快送平台时，则您的网络通讯业务运营商收集使用您的个人信息适用其向您专门说明的规则。
    </p>
    <p>版本号为：V7.0。</p>
    <p>版本更新日期：2022年8月16日。</p>
    <p>版本生效日期：2022年8月23日。</p>
    <p class="strong">如果您有任何疑问、意见、建议或投诉，请通过以下联系方式与我们联系：</p>
    <p>电子邮件：1099326194@qq.com</p>
    <p>电话：19834790000</p>

  </div>
</template>

<script>
export default {
  name: 'registry'
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

}


</style>
