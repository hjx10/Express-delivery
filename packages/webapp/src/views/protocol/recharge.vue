<template>
  <div class="body">
    <h2 class="strong">充值协议</h2>
    <p>
      尊敬的小兔商户，为保障您的合法权益，请您在点击“充值”按钮前，完整、仔细地阅读本充值协议。<strong>当你继续点击“充值”按钮，即视为您已阅读、理解本协议，并同意按照本协议内容执行。</strong></p>
    <p class="strong">1.您充值后，账户余额仅可用于支付小兔商户平台提供的小兔平台服务；账户余额使用不设限制，不能转移、转赠，用户充值余额可提现，平台赠送余额不能提现，请根据您的实际需求选择充值金额。</p>
    <p>2.特别说明</p>
    <p>2.1 余额构成：</p>
    <p>余额是指您实际支付的充值本金加上小兔平台的返现金额会构成您的账户余额（人民币）；</p>
    <p>2.2 充值余额有效期：</p>
    <p>充值及返现金额有期限为自充值日起至用完即止；</p>
    <p>2.3 余额使用规则：</p>
    <p>包含充值赠送余额在内的余额可用于支付小兔商户的订单费用，不能转赠。</p>
    <p class="strong">3.您在下单接受服务前，请您认真查看价格提示，确认无异议后下单，订单服务费金额以您下单时显示及确认的为准，如您对服务费有异议，请在下单前联系客服。</p>
    <p>
      4.我们包含充值赠送在内的所有优惠推广活动仅面向正当、合法使用服务的商户。一旦您存在利用我们的规则漏洞进行任何形式的作弊行为（包括但不限于通过我们的活动获得不正当的经济利益），我们有权取消与作弊行为相关账户赠送金额、追回您作弊所得的不正当经济利益、关闭作弊账户或与您相关的所有账户，并保留取消您后续使用我们服务的权利，及依据严重程度追究您的法律责任。
    </p>

  </div>
</template>

<script>
export default {
  name: 'recharge'
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
