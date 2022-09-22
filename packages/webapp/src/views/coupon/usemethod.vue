<template>
  <div class="use">
    <h2>优惠券使用说明</h2>
    <van-notice-bar
      style="font-size: 14px; text-indent: 28px"
      wrapable
      :scrollable="false"
      background="#fff"
      color="#323233"
      text="  充值优惠券仅限于用户在为其账户充值时方可使用相应的优惠券。
      —张优惠券仅能使用一次。充值成功后，达达平台将会把相应的红包打入其账户。
      请在有效期限内使用，超出其那艮范围的优惠券将失效。" />
    <van-notice-bar
      style="font-size: 14px; text-indent: 28px"
      wrapable
      :scrollable="false"
      background="#fff"
      color="#323233"
      text=" 运费券仅限于用户在发单时使用。每次发单可以使用—张运费券,不得叠加使用。
      请在有效期那限内使用，超出期限范围的运费券将失效。" />
  </div>
</template>

<style lang="scss" scoped>
.use {
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
}

h2 {
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

:deep {
  .van-notice-bar {
    color: #333333;
    line-height: 22px;
  }

  .van-notice-bar__wrap {
    padding: 0 10px;
  }

  .van-notice-bar--wrapable {
    padding: 0;
  }
}
</style>
