<template>
  <div class="body">
    <div class="search">
      <input placeholder="请输入您要查询的11位快递单号"/>
      <div class="cha">
        <van-icon name="search" />
        <span>查快递</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'query -express'
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.body{
  padding: func.rpx(20);
  width: 100vw;
  height: 100vh;
  background-color: white;

  .search{
    margin: func.rpx(30) auto;
    display: flex;
    align-items: center;

    input{
      line-height: func.rpx(50);
      width: func.rpx(266);
      padding: 0 func.rpx(5);
      background-color: #f5f5f5;
    }

    .cha{
      background-color: #3c87fa;
      color: white;
      text-align: center;
      line-height: func.rpx(50);
      width: func.rpx(90);
    }
  }
}


</style>
