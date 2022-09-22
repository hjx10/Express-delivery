<template>
  <div class="del-content">
    <div class="send">
      <!-- 第一块，定位-->
      <div class="address">
        <div class="position">
          <van-icon name="location" style="font-size: 0.3rem" />
          <span>北京市</span>
        </div>
        <div class="knight">
          <img src="../assets/delivery/knight.png" alt="" />
          <span>填写发货地址后展示附近的运力情况</span>
        </div>
      </div>

      <!--第二块，发货寄货地址-->
      <div class="sendadd">
        <van-cell-group inset>
          <van-cell to="" @click="login = !login">
            <div class="sendout">
              <img src="../assets/delivery/sender.png" alt="sender" />
              <div>
                <div class="sendtitle"> 从哪里发货？</div>
                <div class="sendopstion"> 定位中，点击直接填写</div>
              </div>
            </div>
          </van-cell>

          <div class="middle">
            <div />
            <img src="../assets/delivery/toggle.png" alt="toggle" />
          </div>
          <van-cell to="">
            <div class="recevie">
              <img src="../assets/delivery/receiver.png" alt="" />
              <div>
                <div class="sendtitle"> 要寄到哪里？</div>
                <div class="sendopstion"> 定位中，点击直接填写</div>
              </div>
            </div>
          </van-cell>
        </van-cell-group>

        <span class="lower">低至0.1元起</span>
      </div>

      <!--第三块-->
      <div class="service">
        <van-cell title="优惠券" is-link value="无可用优惠券" />
        <van-cell to="/hjx/insurance" title="物品保价" is-link value="贵重货物建议使用保价服务" value-class="text" />
        <div class="item">
          <div class="item-title"> 加小票</div>
          <div class="item-container">
            <van-stepper v-model="value" input-width="40px" button-size="32px" />
          </div>
        </div>
      </div>

      <!-- 第四块 备注 -->
      <van-cell-group inset border>
        <van-cell to="/hjx/message" title="备注" value="点击添加备注内容" is-link size="large" />
      </van-cell-group>

      <!--第五块，收货码-->
      <van-cell-group inset border>
        <van-cell center title-class="switch" value-class="right" label="骑士送达时，您需要提供签收码，确保安全签收">
          <template #title>
            <span class="custom-title" style="margin-right: 4px">收货码</span>
            <van-icon name="question-o" />
          </template>
          <template #value>
            <van-switch v-model="checked" size="21px" />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
const value = $ref(1)
const checked = $ref(true)
const login = $ref(false) // 弹出登录框
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.del-content {
  margin-top: func.rpx(40);
}

// 内容
.send {
  padding: 16px;

  // 单元格图标
  .van-cell__right-icon {
    color: rgb(109 112 119);
    font-size: func.rpx(13);
  }

  // 单元格右侧
  .van-cell__value {
    min-width: 60%;

    > span {
      color: #BCC1CC;
    }
  }

  // 单元格组
  .van-cell-group--inset {
    margin: 15px 0;
    border-radius: 10px;
  }

  :deep {
    .text {
      min-width: 70%;
    }

    .switch {
      min-width: 70%;
    }

    .right {
      min-width: 30%;
    }

    //  收货码
    .van-cell {
      border: 0;
      background-image: none !important;
    }
  }

  // 第一块
  .address {
    display: flex;
    width: 100%;
    padding: 10px 8px;
    margin: 12px 0;
    background-color: white;
    border-radius: 10px;

    //  城市
    .position {
      display: flex;
      color: #0D1E40;
      font-size: func.rpx(15);

      //  左侧文字
      > span {
        display: inline-block;
        padding-right: func.rpx(10);
        border-right: 2px solid #BCC1CC;
      }
    }

    //  骑士
    .knight {
      display: flex;
      align-items: center;
      color: #5C6880;
      font-size: func.rpx(13);

      // 图片
      img {
        display: inline-block;
        width: func.rpx(30);
        height: func.rpx(30);
        margin-left: func.rpx(2);
      }
    }
  }

  // 第二块
  .sendadd {
    position: relative;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #EEEEEE;

    .van-cell::after {
      display: none;
    }

    .sendout {
      display: flex;
      align-items: center;
      padding-top: func.rpx(30);
    }

    .sendtitle {
      font-size: 16px;
    }

    .sendopstion {
      color: #BCC1CC;
      font-size: func.rpx(14);
    }

    .middle {
      display: flex;
      align-items: center;
      justify-content: right;

      > div {
        width: func.rpx(250);
        height: func.rpx(1.7);
        background-color: #F2F3F6;
      }

      > img {
        width: func.rpx(24);
        height: func.rpx(24);
        margin: 0 func.rpx(15);
      }
    }

    .recevie {
      display: flex;
      overflow: hidden;
      align-items: center;
      padding-bottom: func.rpx(20);
    }

    .sendout img,
    .recevie img {
      display: inline-block;
      width: func.rpx(24);
      height: func.rpx(24);
      margin-right: func.rpx(15);
    }

    // 固定小标签
    .lower {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      padding: func.rpx(8) func.rpx(12);
      background: #FFEFE9;
      border-radius: 0 10px;
      color: #E64600;
      font-size: func.rpx(12);
      font-weight: bold;
    }
  }

  // 第三块
  .service {
    overflow: hidden;
    margin: 15px 0;
    background-color: white;
    border-radius: 10px;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;

      .item-title {
        font-size: func.rpx(14);
      }

      .item-container {
        display: flex;
        align-items: center;

        > button {
          border: 1px solid #409EFF;
          background-color: white;
        }
      }
    }
  }
}
</style>
