<template>
  <div class="order-card" v-for="i in data">
    <div class="card-top">
      <div class="card-top-left">
        <div><img src="" alt="" /></div>
        <h1>小兔快跑</h1>
        <div class="card-top-text">收货码：{{i.code}}</div>
      </div>
      <div class="card-top-right"> {{status[i.status]}}</div>
    </div>
    <div class="card-center">
      <!-- 寄出地址行 -->
      <div class="card-center-top">
        <!-- 寄 -->
        <div class="card-center-top-left">
          <span class="ji">寄</span>
        </div>
        <!-- 寄地址 -->
        <div class="card-center-top-center van-ellipsis">
          {{i.to_address.address}}
        </div>
        <!-- 寄电话 -->
        <div class="card-center-top-phone">{{i.to_address.phone}}</div>
      </div>
      <!-- 收件地址行  左右结构-->
      <div class="card-center-bottom">
        <!-- 左：收 -->
        <div class="card-center-bottom-left">
          <span class="shou"> 收 </span>
        </div>
        <!-- 右 -->
        <div class="card-center-bottom-right">
          <!-- 右上 -->
          <div class="card-center-bottom-right-top"> {{i.from_address.address}}</div>
          <!-- 右下 -->
          <div class="card-center-bottom-right-bottom">
            <span>{{i.from_address.contact}}</span>
            <span class="span-text">{{i.from_address.phone}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部时间 -->
    <div class="card-bottom">
      <span>2022-08-05 00：50</span>
      <button>重新下单</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props:['data'],
  setup(props) {
    let status = ['','待支付','待接单','待取货','配送中','已完成','已取消']
    return {
      status,
    }
  }
})
</script>

<style scoped lang="scss">
.order-card {
  padding: 15px;
  background-color: white;

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;

    .card-top-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      font-size: 17px;

      h1 {
        margin: 0 5px;
        font-weight: bold;
      }

      .card-top-text {
        color: #F56152;
      }
    }
  }

  .card-center {
    border-bottom: 1px solid #EEEEEE;

    .card-center-top {
      display: flex;
      align-items: center;
      font-size: 17px;

      .card-center-top-left {
        color: #2F6EF8;
        width: 40px;
        height: 40px;

        .ji {
          margin-top: 7px;
          display: block;
          height: 25px;
          width: 25px;
          border: 1px solid #2F6EF8;
          border-radius: 50%;
          font-size: 19px;
          text-align: center;
          line-height: 25px;
        }
      }

      .card-center-top-center {
        flex: 1;
      }

      .card-center-top-phone {
        width: 105px;
        color: #2F6EF8;
      }
    }

    .card-center-bottom {
      display: flex;
      font-size: 17px;

      .card-center-bottom-left {
        width: 40px;

        .shou {
          margin-top: 7px;
          display: block;
          height: 25px;
          width: 25px;
          border: 1px solid #F7AB2D;
          color: #F7AB2D;
          border-radius: 50%;
          font-size: 19px;
          text-align: center;
          line-height: 25px;
        }
      }

      .card-center-bottom-right {
        flex: 1;
        /* height: 80px; */
        .card-center-bottom-right-top {
          height: 40px;
          line-height: 40px;
        }

        .card-center-bottom-right-bottom {
          height: 40px;
          line-height: 40px;
          display: flex;
          justify-content: space-between;

          .span-text {
            color: #2F6EF8;
          }
        }
      }
    }
  }

  .card-bottom {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    span {
      color: #C1C1C1;
    }

    button {
      padding: 10px;
      border: 1px solid #2F6EF8;
      color: #2F6EF8;
    }
  }
}
</style>
