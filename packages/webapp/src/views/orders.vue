<template>
  <div>
    <van-tabs
      class="box"
      v-model:active="active"
      title-active-color="#3c87fa"
      swipe-threshold="7"
      line-width="(1/7)px"
      type="line"
      line-height="1px">
      <van-tab title="全部">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
      <van-tab title="待支付">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
      <van-tab title="待接单">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
      <van-tab title="待取货">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
      <van-tab title="配送中">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
      <van-tab title="已完成">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
      <van-tab title="已取消">
        <router-link to="/orders_search" class="top_box">
          <div class="input_top">
            <van-icon name="search" />
            <span>输入收货人姓名和手机号</span>
          </div>
        </router-link>
        <order-card :data="orderlist"></order-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch, watchEffect} from 'vue'
import {Toast} from 'vant'
import OrderCard from '@/components/OrderCard.vue'
import {getOrder} from '@/api/order'

export default defineComponent({
  components: {OrderCard},
  setup() {
    let value = ref('')
    //键盘回车触发此处的操作
    let onSearch = (val) => Toast(val)
    // 搜索之后的需要进行的操作替换Toast('搜索')
    let onCancel = () => Toast('搜索')
    let active = ref(0)
    let orderlist = ref<any>([])

    watchEffect(() => {
      getOrder(active.value).then(({data}) => {
        orderlist.value = data.data.orders
        console.log("orders",orderlist.value)
      })
    })

    return {
      orderlist,
      active,
      value,
      onSearch,
      onCancel
    }
  }
})
</script>

<style scoped lang="scss">
.top_box {
  display: block;
  width: 100%;
  height: 56px;
  padding: 8px 10px;
  background-color: white;

  > .input_top {
    height: 40px;
    border-radius: 40px;
    border: 1px solid #eeeeee;
    text-align: center;
    line-height: 40px;
    font-size: 13px;
    color: #eeeeee;
  }
}

:deep(.van-tabs__line) {
  border-color: #3c87fa;
  background-color: #3c87fa;
  width: 55px;
}
</style>
