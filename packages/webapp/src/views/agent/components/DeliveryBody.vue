<template>
  <div class="delivery-body">
    <!-- 第一块，定位-->
    <div class="address">
      <div
        class="position"
        @click="$router.push('/city-picker')"
      >
        <van-icon
          name="location"
          size="18"
        />
        <span>北京市</span>
      </div>
      <div class="knight">
        <img
          src="@/assets/delivery/knight.png"
          alt="knight"
        >
        <span>填写发货地址后展示附近的运力情况</span>
      </div>
    </div>

    <!--第二块，发货寄货地址-->
    <div class="send-add">
      <van-cell-group inset>
        <van-cell to="/address/search?target=delivery">
          <div class="send-to">
            <div class="send-out">
              <img
                src="@/assets/delivery/sender.png"
                alt="sender"
              >
              <div v-if="!delivery">
                <div class="send-title">
                  从哪里发货？
                </div>
                <div class="send-position">
                  定位中，点击直接填写
                </div>
              </div>
              <div v-else>
                <div class="send-title">
                  {{ delivery.address }}
                </div>
                <div class="send-position">
                  {{ delivery.houseNumber }}
                </div>
                <div>
                  {{ delivery.contact }} {{ delivery.phone }}
                </div>
              </div>
            </div>
            <div
              class="use"
              @click.stop="toAddressFavorites('delivery')"
            >
              常用
            </div>
          </div>
        </van-cell>

        <div
          class="middle"
          @click="toggleAddress"
        >
          <div class="placeholder" />
          <img
            src="@/assets/delivery/toggle.png"
            alt="toggle"
          >
        </div>

        <van-cell to="/address/search?target=shipping">
          <div class="receive">
            <div class="receive-to">
              <img
                src="@/assets/delivery/receiver.png"
                alt="receiver"
              >
              <div v-if="!shipping">
                <div class="send-title">
                  要寄到哪里？
                </div>
                <div class="send-position">
                  定位中，点击直接填写
                </div>
              </div>
              <div v-else>
                <div class="send-title">
                  {{ shipping.address }}
                </div>
                <div class="send-position">
                  {{ shipping.houseNumber }}
                </div>
                <div>
                  {{ shipping.contact }} {{ shipping.phone }}
                </div>
              </div>
            </div>
            <div
              class="use"
              @click.stop="toAddressFavorites('shipping')"
            >
              常用
            </div>
          </div>
        </van-cell>
      </van-cell-group>

      <span class="lower">低至0.1元起</span>
    </div>

    <!--第三块-->
    <div class="service">
      <van-cell
        title="优惠券"
        is-link
        to="/coupon"
      >
        <div
          v-if="currentCoupon"
          class="coupon-tag"
        >
          <van-tag color="#f2826a">
            已经优惠{{ currentCoupon.discount }}元
          </van-tag>
        </div>
        <div v-else>
          选择可用优惠券
        </div>
      </van-cell>
      <van-cell
        to="/insurance"
        title="物品保价"
        is-link
        value="贵重货物建议使用保价服务"
        value-class="text"
      >
        <span v-if="insurance">保费{{ insurance }}元</span>
        <span v-else>贵重货物建议使用保价服务</span>
      </van-cell>
      <div class="item">
        <div class="item-title">
          加小费
        </div>
        <div class="item-container">
          <van-stepper
            v-model="tip"
            :min="0"
            input-width="40px"
            button-size="32px"
            @change="handleChangeTip"
          />
        </div>
      </div>
    </div>

    <!-- 第四块 备注 -->
    <van-cell-group
      inset
      border
    >
      <van-cell
        to="/remark"
        title="备注"
        value="点击添加备注内容"
        is-link
        size="large"
      >
        {{ message }}
      </van-cell>
    </van-cell-group>

    <!--第五块，收货码-->
    <van-cell-group
      inset
      border
    >
      <van-cell
        center
        title-class="switch"
        value-class="right"
        label="骑士送达时，您需要提供签收码，确保安全签收"
      >
        <template #title>
          <span class="custom-title mr-0.5">
            收货码
          </span>
          <van-icon name="question-o" />
        </template>
        <template #value>
          <van-switch
            v-model="codeChecked"
            size="21px"
          />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import {watch} from 'vue'
import {useRouter} from 'vue-router'

import {useStore} from '@/store/hook'

const store = useStore()
const router = useRouter()

let tip = $ref(store.state.order.tip)
let codeChecked = $ref(true)
let delivery = $computed(() => store.state.address.delivery)
let shipping = $computed(() => store.state.address.shipping)
let message = $computed(() => store.state.order.remark)
let insurance = $computed(() => store.state.order.insurance)
let currentCoupon = $computed(() => store.state.coupon.current)

function handleChangeTip(v) {
  store.commit('order/setTip', v)
}

function toAddressFavorites(addressType) {
  router.push({
    path: '/address/favorites',
    query: {
      target: addressType
    }
  })
}

function toggleAddress() {
  store.commit('address/toggleAddress')
}

watch(() => codeChecked, () => {
  console.log(codeChecked)
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.delivery-body {
  padding: 16px;

  :deep {
    // 单元格组
    .van-cell-group--inset {
      margin: 15px 0;
      border-radius: 10px;
    }

    .van-cell::after {
      display: none;
    }

    // 单元格图标
    .van-cell__right-icon {
      color: rgb(109, 112, 119);
      font-size: func.rpx(13);
    }

    // 单元格右侧
    .van-cell__value {
      min-width: 60%;

      > span {
        color: #BCC1CC;
      }
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

    // 城市
    .position {
      display: flex;
      align-items: center;
      color: #0D1E40;
      font-size: func.rpx(15);

      // 左侧文字
      > span {
        display: inline-block;
        padding-right: func.rpx(10);
        border-right: 2px solid #BCC1CC;
      }
    }

    // 骑士
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
  .send-add {
    position: relative;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 5px #EEEEEE;

    .send-to {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: func.rpx(12);

      .send-out {
        display: flex;
        align-items: center;
        padding-top: func.rpx(30);
      }

      .use {
        color: #5C6880;
        font-size: func.rpx(12);
        margin-top: func.rpx(40);
        border-left: 0.5px solid #E9E9EB;
        padding-left: func.rpx(6);
      }

    }

    .send-title {
      font-size: 16px;
    }

    .send-position {
      color: #BCC1CC;
      font-size: func.rpx(14);
    }

    .middle {
      display: flex;
      align-items: center;
      justify-content: right;

      > .placeholder {
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

    .receive {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      align-items: center;
      padding-bottom: func.rpx(20);

      .receive-to {
        display: flex;
        align-items: center;
        font-size: func.rpx(12);
      }

      .use {
        color: #5C6880;
        font-size: func.rpx(12);
        border-left: 0.5px solid #E9E9EB;
        padding-left: func.rpx(6);
      }
    }

    .send-out img,
    .receive img {
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
