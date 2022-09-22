<template>
  <div class="delivery-footer">
    <div class="footer-tabs">
      <van-cell
        is-link
        class="footer-tabs-item"
        icon="point-gift"
      >
        <template #title>
          <input
            v-model="item"
            type="text"
            placeholder="请选择物品信息"
            class="van-ellipsis"
            readonly
            @click="itemshow=true"
          >
          <van-popup
            v-model:show="itemshow"
            round
            position="bottom"
          >
            <div class="items">
              <van-nav-bar>
                <template #title>
                  <h1 class="text-[#333] text-[18px] font-bold">
                    物品信息
                  </h1>
                </template>
                <template #left>
                  <van-icon
                    name="cross"
                    size="24"
                    color="#333"
                    class="font-bold"
                    @click="itemshow=false"
                  />
                </template>
              </van-nav-bar>
              <div class="item-list">
                <h3 class="item-title">
                  物品类型
                </h3>
                <div class="list">
                  <span
                    v-for="(type,i) in types"
                    :key="i"
                    class="type"
                    :class="{active:nowtype===i}"
                    @click="nowtype=i"
                  >
                    {{ type }}
                  </span>
                </div>
                <h3 class="item-title">
                  价格
                </h3>
                <div class="list">
                  <span
                    v-for="(price,i) in prices"
                    :key="i"
                    class="type"
                    :class="{active:nowprice===i}"
                    @click="nowprice=i"
                  >
                    {{ price }}
                  </span>
                </div>
                <h3 class="item-title">
                  重量
                </h3>
                <div> 小于1KG不加价:请填写实际重量，超重可能导致无法配送</div>
                <div class="weight">
                  <div class="weight-title">
                    {{ value }}KG
                  </div>
                  <div class="slider">
                    <span>1kg</span>
                    <van-slider
                      v-model="value"
                      :min="0"
                      :max="25"
                    />
                    <span>25kg</span>
                  </div>
                </div>
                <div class="item-button">
                  <van-button
                    type="primary"
                    block
                    @click="Additems"
                  >
                    确认
                  </van-button>
                </div>
              </div>
            </div>
          </van-popup>
        </template>
      </van-cell>
      <van-cell
        is-link
        class="footer-tabs-item"
        icon="clock"
        @click="show=true"
      >
        <template #title>
          <input
            v-model="time"
            type="text"
            readonly
            placeholder="立即配送"
            class="van-ellipsis"
          >
        </template>
      </van-cell>
      <van-popup
        v-model:show="show"
        position="bottom"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="datehour"
          title="立即配送"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm"
          @cancel="show=false"
        />
      </van-popup>
    </div>

    <div class="commit">
      <div class="text">
        <span v-if="!delivery||!shipping||!item||!time">信息填写完成自动生成运费</span>
        <span v-else>
          <span class="pricedetail">￥ 16.0</span>
          <router-link to="/priceDetail">价格明细</router-link>
        </span>
      </div>
      <van-button
        :disabled="!delivery||!shipping||!item||!time"
        type="primary"
        size="normal"
        round
        @click="handlePlaceOnOrder"
      >
        立即下单
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import {Toast} from 'vant'

import {useStore} from '@/store/hook'
import {placeOnOrder} from '@/api/order'

const store = useStore()

let initCurrentDate = new Date()
let show = $ref(false)
let currentDate = $ref(initCurrentDate)
let time = $ref('')
let itemshow = $ref(false)
let item = $ref('')
let delivery = $computed(() => store.state.address.delivery)
let shipping = $computed(() => store.state.address.shipping)
let minDate = initCurrentDate
let maxDate = moment(initCurrentDate).add(7, 'days').toDate()

function onConfirm(date) {
  show = false
  time = moment(date).format('yyyy-MM-DD HH时')
}

// 物品类型
let nowtype = $ref(0)
let nowprice = $ref(0)
let value = $ref(1)
let types = ['食品饮料', '鲜花', '蛋糕', '文件', '水果生鲜', '证照证件', '数码家电', '服饰帽子', '医药', '其他']
let prices = ['50元以下', '50~100', '100~500元', '500~1000元', '1000~5000元', '5000~10000元']

function Additems() {
  itemshow = false
  item = `${types[nowtype]}/${prices[nowprice]}/${value}KG`
}

function handlePlaceOnOrder() {
  placeOnOrder({
    from_address_id: store.state.address.delivery!.id,
    to_address_id: store.state.address.shipping!.id,
    kind: types[nowtype],
    name: '帮我送',
    coupon_id: store.state.coupon.current?.id || -1,
    price: prices[nowprice],
    tip: store.state.order.tip,
    weight: value,
    remark: store.state.order.remark,
    expect_timestamp: moment(currentDate).format('YYYY-MM-DD HH:mm')
  }).then(({data}) => {
    Toast('下单成功')
  })
}
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.delivery-footer {
  background-color: #FFFFFF;
  padding: func.rpx(12) func.rpx(16);
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 func.rpx(10) #E6E6E6;

  .footer-tabs {
    display: flex;
    justify-content: space-between;

    .footer-tabs-item {
      color: #5C6880;
      font-size: func.rpx(13);
      width: auto;

      &:first-child {
        padding-left: 28px;
      }

      &:last-child {
        padding-right: 28px;
      }

      :deep(.van-icon) {
        font-size: func.rpx(12);
      }

      :deep(.van-ellipsis) {
        flex: none;
        max-width: func.rpx(72);
      }
    }

    // 物品信息弹窗
    .items {
      padding: func.rpx(17);

      .item-list {

        .item-title {
          font-size: func.rpx(14);
          font-weight: bold;
          color: #22252A;
          margin: func.rpx(15) 0;
        }

        .list {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .type {
            color: #5C6880;
            width: func.rpx(110);
            height: func.rpx(30);
            line-height: func.rpx(30);
            text-align: center;
            border: 1px solid #DDE2EB;
            border-radius: func.rpx(5);
            margin-bottom: func.rpx(15);

            &.active {
              background-color: #E5F3FF;
              color: #008CFF;
              border-color: #008CFF;
            }
          }
        }

        .weight {

          .weight-title {
            padding: func.rpx(16);
            color: #0D1E40;
            width: 100%;
            text-align: center;
            font-size: func.rpx(16);
          }

          .slider {
            display: flex;
            justify-content: space-between;
            align-items: center;

            > span {
              padding: 0 func.rpx(15);
            }
          }
        }

        .item-button {
          border-radius: 100px;
          overflow: hidden;
          margin-top: func.rpx(30);
        }

      }

    }

  }

  :deep(.van-button__text) {
    display: block;
  }

  .commit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: func.rpx(5);
    background-color: #0D1E40;
    color: #FFFFFF;
    border-radius: 999px;

    .text {
      padding-left: 25px;
      font-size: 12px;
    }

    .text + .van-button {
      width: func.rpx(120);
      height: 50px;
      font-size: func.rpx(16);
    }

    :deep(.van-button--disabled) {
      background-color: #BCC1CC;
      border-color: #BCC1CC;
    }

    .pricedetail{
      margin-right: func.rpx(12);
      font-size: func.rpx(20);
      font-weight: bold;
    }
  }

}
</style>
