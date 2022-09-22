<template>
  <div class="body">
    <h2 class="strong">个人敏感信息授权协议</h2>
    <p><strong>【重要提示】</strong>达疆网络科技（上海）有限公司（电子邮件：shts@imdada.cn，电话：400-991-9512，以下简称“我们”或“小兔快送平台”）尊重并保护您的个人隐私，为了遵守相关法律法规要求，当您选择通过小兔快送使用由小兔集团的关联公司或合作伙伴等第三方提供的服务时，我们将依据实现第三方服务的具体服务收集您的个人信息并共享至第三方，<strong>本《信息提供授权协议》将向您明确说明您的个人信息接收方的公司名称、处理目的和个人信息的种类等信息。</strong></p>
    <p><strong>本协议列明的第三方仅限于本协议列明的授权范围内使用您的个人信息，如第三方公司改变您的个人信息用途的，将由第三方向您明示收集及共享范围、目的以第三方公示的协议、隐私政策或相关声明以获取您的授权，</strong>小兔快送提示您于使用服务前仔细阅读该等协议、隐私政策或相关声明并确保您认可第三方拟收集、使用您的个人信息的范围。
    </p>
    <p class="strong">请您在使用我们提供的各项产品/服务前，仔细阅读并充分理解本《个人敏感信息授权协议》（重点内容我们已将字体加粗请您特别关注）并作出相应选择。一旦您使用或继续使用我们的产品/服务时，即意味着您同意我们按照本协议处理您的相关信息。<strong class="decoration">小兔快送系列产品或服务</strong></p>
    <p>小兔快送隐私政策相关文件包括：《隐私政策》、《个人敏感信息授权协议》、《信息提供授权协议》，共同适用于由小兔集团运营的<strong>小兔快跑产品或服务</strong></p>
    <p>本协议更新日期为2022年8月，版本号为：V1.3。</p>
  </div>
</template>

<script>
export default {
  name: 'sensitive'
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
