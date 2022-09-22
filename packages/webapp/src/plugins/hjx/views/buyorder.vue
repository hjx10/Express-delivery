<template>
  <div class="buy-order">
    <div class="head">
      <div class="message">
        <van-cell-group>
          <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            maxlength="200"
            placeholder="请输入想买的商品"
            show-word-limit />
        </van-cell-group>
      </div>
      <div class="require">
        <span v-for="(x, i) in items" :key="i" @click="inputs(i)">{{ x }}</span>
      </div>
    </div>
    <!-- 填写地址 -->
    <div class="address">
      <div class="cell">
        <div>
          <span class="buy">买</span>
          <span>指定哪个店铺购买</span>
        </div>
        <van-icon name="arrow" />
      </div>
      <div class="cell">
        <div>
          <span class="receive">收</span>
          <span>填写收货地址</span>
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 商品价格 -->
    <div class="price" @click="show = true">
      <div>
        <span class="title">商品价格:</span>
        <span class="send">此费用与配送员结算</span>
      </div>
      <div class="right">
        <input placeholder="预估商品费" class="fee" readonly v-model="fee" />
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 弹窗-->
    <van-popup v-model:show="show" position="bottom">
      <div class="pop">
        <div class="pop-title">
          <span @click="del">取消</span>
          <span>填写商品估价</span>
          <span @click="sure">确认</span>
        </div>
        <div class="pop-content">
          <div class="assess">
            <span>估价：</span>
            <input type="text" v-model.number="price" autofocus oninput="value=value.replace(/[^0-9.]/g,'')" />
          </div>
          <div class="send"> 估价供骑士参考（最高500元），骑士帮买时预先垫付，送货时当面结算</div>
        </div>
      </div>
    </van-popup>

    <!-- 小费和优惠券-->
    <div class="pure">
      <div class="tip">
        <div class="title"> 小费:</div>
        <div class="btn">
          <button :disabled="count === 0" @click="count--">
            <van-icon name="minus" />
          </button>
          <span class="num">{{ count }} 元</span>
          <button @click="count++">
            <van-icon name="plus" />
          </button>
        </div>
      </div>
      <div class="cell">
        <div class="title"> 优惠券:</div>
        <div class="right">
          <span class="fee">无可用消费卷</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- 协议-->
    <div>
      <agree-protocol v-model="agree">
        <div class="whitespace-nowrap ml-3">
          阅读并同意
          <agree-book to="/"> 《代买跑腿服务协议》</agree-book>
          、
          <agree-book to="/"> 《注册协议》</agree-book>
          、
        </div>
        <div class="whitespace-nowrap">
          <agree-book to="/"> 《隐私政策》</agree-book>
          、
          <agree-book to="/"> 《个人敏感信息授权协议》</agree-book>
          、
          <agree-book to="/"> 《信息提供授权协议》</agree-book>
        </div>
      </agree-protocol>
    </div>

    <!-- 底部 -->
    <div class="buy-footer">
      <div class="foot">
        <span>跑腿费<span class="font">0.0</span>元</span>
        <span class="send">此产品不含商品费用</span>
      </div>
      <van-button disabled type="primary" class="xiadan"> 下单</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AgreeProtocol from '@/components/AgreeProtocol/index.vue'
import AgreeBook from '@/components/AgreeProtocol/AgreeBook.vue'

let message = $ref('')
// let items = ['纸巾', '暖宝宝', '电池', '插座', '扑克牌', '卫生巾', '1个', '与我联系', '需要小票']
let show = $ref(false)
let count = $ref(0)
let agree = $ref(false)
let items = $ref<string[]>([])
// let items=$ref([''])
let price = $ref('')
let fee = $ref('')

setTimeout(() => {
  items = ['纸巾', '暖宝宝', '电池', '插座', '扑克牌', '卫生巾', '1个', '与我联系', '需要小票']
}, 3000)

function inputs(i) {
  message += `${items[i]};`
}

function sure() {
  show = false
  fee = `${price}元`
}

function del() {
  show = false
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.buy-order {
  // padding: func.rpx(10) func.rpx(5);
  width: 100vw;
  height: 100vh;
  padding: func.rpx(13);
  background-color: #EEEEEE;

  .head {
    :deep {
      .van-field__control {
        font-size: func.rpx(16);
      }
    }

    .require {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      padding: 5px;
      background-color: white;
      font-size: func.rpx(12);

      > span {
        padding: func.rpx(5) func.rpx(7);
        margin: func.rpx(5);
        background-color: #F4F4F4;
        border-radius: 4px;
        color: #6D7077;
      }
    }
  }

  .address {
    margin: func.rpx(10) 0;
  }

  .cell,
  .tip {
    display: flex;
    width: 100%;
    height: func.rpx(52);
    align-items: center;
    justify-content: space-between;
    padding: func.rpx(10) func.rpx(16);
    background-color: white;
    color: #CCCCCC;
    font-size: func.rpx(14);
  }

  .buy,
  .receive {
    display: inline-block;
    width: func.rpx(18);
    height: func.rpx(18);
    margin-right: func.rpx(10);
    background-color: #6889FA;
    border-radius: 50%;
    color: white;
    font-size: func.rpx(12);
    line-height: func.rpx(18);
    text-align: center;
  }

  .receive {
    background-color: #FAB83A;
  }

  .price {
    display: flex;
    width: 100%;
    height: func.rpx(52);
    align-items: center;
    justify-content: space-between;
    padding: func.rpx(10) func.rpx(12);
    background-color: white;
    color: #CCCCCC;
    font-size: func.rpx(14);

    > div {
      display: flex;
      align-items: center;
    }
  }

  .send {
    //margin-left: func.rpx(8);
    color: #FAB83A;
  }

  .title {
    color: #333333;
    font-size: func.rpx(18);
    margin-right: func.rpx(8);
  }

  .fee {
    margin-right: func.rpx(5);
    font-size: func.rpx(15);
    width: func.rpx(80);
    text-align: right;
  }

  // 弹窗
  .pop {
    color: #333333;
    font-size: func.rpx(14);

    .pop-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: func.rpx(15);
      border-bottom: 1px solid #E6E6E6;
      font-size: func.rpx(16);
    }

    .pop-content {
      padding: func.rpx(25);
      line-height: func.rpx(18);

      .assess {
        padding-bottom: func.rpx(15);
        border-bottom: 1px solid #E6E6E6;
        margin-bottom: func.rpx(15);
      }
    }
  }

  .pure {
    margin: func.rpx(10) 0;

    .tip {
      border-bottom: 1px solid #CCCCCC;
    }

    button {
      width: func.rpx(45);
      height: func.rpx(20);
      border: func.rpx(2) solid #3C87FA;
      border-radius: 4px;
      color: #3C87FA;
      text-align: center;

      &:disabled {
        border-color: #CCCCCC;
        color: #CCCCCC;
      }
    }

    .num {
      margin: 0 func.rpx(20);
      color: #333333;
      font-size: func.rpx(18);
    }
  }

  .agreement {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: func.rpx(10) func.rpx(8);

    .agree-right {
      width: func.rpx(320);
      font-size: func.rpx(10);
      line-height: func.rpx(16);

      > a {
        margin: 0 10px 20px;
        color: #3C87FA;
      }
    }
  }

  .buy-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: func.rpx(8);
    background-color: white;

    .xiadan {
      padding: func.rpx(7) func.rpx(30);
    }

    .foot {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: func.rpx(10);
      font-size: func.rpx(14);

      .font {
        display: inline-block;
        margin: 0 func.rpx(5);
        font-size: func.rpx(16);
      }

      .send {
        color: #FAB83A;
      }
    }
  }
}
</style>
