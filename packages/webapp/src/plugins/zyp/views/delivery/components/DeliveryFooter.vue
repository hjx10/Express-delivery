<template>
  <div class="del-footer" style="position: fixed; bottom: 0">
    <div class="footer-list">
      <van-cell
        is-link
        title="请选择物品信息"
        title-class="van-ellipsis"
        icon="point-gift"
        style="width: 130px; margin: 0 23px"
        @click="zhanshi = true" />
      <van-cell
        is-link
        title="立即配送"
        title-class="van-ellipsis"
        icon="clock"
        style="width: 130px"
        @click="zhanshi = true" />
      <van-action-sheet v-model:show="zhanshi" :actions="actions" cancel-text="取消" close-on-click-action />
    </div>
    <div class="commit">
      <div class="van-ellipsis"> 信息填写完成自动生成运费</div>
      <van-button round disabled type="primary" size="normal"> 立即下单</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelFooter'
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

// 底部
.del-footer {
  overflow: hidden;
  padding: func.rpx(12) func.rpx(16);
  background-color: #FFFFFF;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 func.rpx(10) #E6E6E6;

  .footer-list {
    display: flex;
    justify-content: flex-start;
  }

  .footer-list .van-cell__title {
    display: flex;
    width: func.rpx(103);
    align-items: center;
    justify-content: flex-start;
    color: #5C6880;
    font-size: func.rpx(14);
  }

  .commit {
    display: flex;
    height: func.rpx(60);
    align-items: center;
    justify-content: space-between;
    padding: func.rpx(5);
    background-color: #0D1E40;
    border-radius: func.rpx(30);
    color: white;
    line-height: func.rpx(60);

    > div {
      padding-left: func.rpx(24);
      font-size: func.rpx(12);
    }
  }

  .van-button {
    width: func.rpx(115);
    height: func.rpx(44);
    border: none;
    margin-right: func.rpx(5);
    font-size: func.rpx(14);
  }

  .van-button.van-button--disabled {
    background-color: #BCC1CC;
    color: white;
  }

  .van-overlay {
    opacity: 0.6;
  }
}
</style>
