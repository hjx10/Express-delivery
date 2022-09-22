<template>
  <div class="body">
    <h1>保价协议</h1>
    <p>1、您在选择达达商户平台发布配送需求时，可以对您将要配送的物品进行价值认定及选择保价服务。</p>
    <p>2、请您悉知达达商户平台只提供信息发布服务，并不直接提供物品配送及保价服务。</p>
    <p>3、保价功能由您自由选择，我们提供以下3种保价方案：</p>
    <div class="move">
      <p>（1）您选择1元保价，若物品出现丢失或损毁，最高可赔付100元。</p>
      <p>（2）您选择3元保价，若物品出现丢失或损毁，最高可赔付300元。</p>
      <p>（3）您选择5元保价，若物品出现丢失或损毁，最高可赔付1000元。</p>
    </div>
    <p>
      4、当您对寄递物品选择保价后：如出现物品丢失或损毁则按照您提供的相关配送物品信息及价值凭证进行赔偿，赔偿金额不超过您选择的保价方案的最高赔付金额。
    </p>
    <p>5、以下物品不在保价范围：</p>
    <div class="move">
      <p>
        （1）工艺品（包括各类雕刻、编织、艺术品、刺绣、古董、字画、瓷器、玉雕及其他玉石制品等）、现金、有价证券、珠宝、具有收藏价值的货物以及文件、账册、图表、技术资料、计算机软件、计算机数据资料等无法鉴定价值的财产；
      </p>
      <p>（2）文件证件丢失，仅赔偿补办相关证件的费用；</p>
      <p>（3）鲜活动物、植物、农作物。</p>
    </div>
    <p>6、若您选择不保价，若物品出现丢失或损毁，最高可获得平台30元优惠券。（优惠券直接存入用户账户中）。</p>
    <p>温馨提示:</p>
    <div class="move">
      <p>（1）建议您根据配送物品价值进行保价。</p>
      <p>（2）如您发现物品送达之后损坏时，请您第一时间联系平台客服。</p>
      <p>（3）本条款为《注册协议》的重要组成部分，对缔约各方均具有约束力。</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.body {
  width: 100vw;
  height: 100vh;
  padding: func.rpx(22);
  background-color: white;
  font-size: func.rpx(12);
  line-height: func.rpx(16);

  h1 {
    margin-bottom: 20px;
    color: #333333;
    font-size: func.rpx(20);
    font-weight: bold;
    text-align: center;
  }

  .move {
    margin-left: func.rpx(15);
  }

  p {
    margin-bottom: func.rpx(6);
  }
}
</style>
