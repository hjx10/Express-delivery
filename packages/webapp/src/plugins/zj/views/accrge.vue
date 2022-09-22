<template>
  <div class="accrge">
    <!-- 头部导航 -->
    <van-nav-bar @click-left="onClickLeft">
      <template #title>
        <h1 class="text-[#333] text-[20px] font-bold"> 账户充值 </h1>
      </template>
      <template #left>
        <van-icon name="arrow-left" size="28" color="#333" class="font-bold" />
      </template>
    </van-nav-bar>
    <div class="top">
      <div class="balance">
        <h1 class="num"> 0.00 </h1>
        <p class="desc"> 当前余额( 元 ) </p>
      </div>

      <van-button class="w-7/12" type="primary"> 去充值</van-button>
    </div>

    <div class="transaction-details">
      <span><van-icon name="bill-o" />交易明细</span>
      <span><van-icon name="arrow" /></span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const onClickLeft = () => history.back()
    return {
      onClickLeft
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.accrge {
  width: 100vw;
  height: 100vh;
  background-color: #EEEEEE;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 10px 20px;
    margin-bottom: 15px;
    background: #FFFFFF;

    .balance {
      padding: 15px;
      text-align: center;

      .num {
        margin-bottom: func.rpx(5);
        color: #333333;
        font-size: func.rpx(27);
        line-height: func.rpx(33);
      }

      .desc {
        color: #666666;
        font-size: func.rpx(14);
      }
    }
  }

  .transaction-details {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background: #FFFFFF;
    font-size: func.rpx(16);
  }
}
</style>
