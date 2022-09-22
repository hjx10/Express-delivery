<template>
  <div class="flex-1 w-[100vw] h-[100vh] bg-white">
    <div class="buy-head">
      <van-swipe :autoplay="2000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" class="imgs" />
        </van-swipe-item>
      </van-swipe>
      <router-link to="/city-picker">
        <div class="city">
          <span class="van-ellipsis">{{ cityName }}</span>
          <img src="@/assets/buy/arrow-down.png" alt="arrow-down" />
        </div>
      </router-link>

      <router-link to="/agent/purchase/order">
        <div class="request">
          <van-cell title="请输入想买的商品，数量、等具体要求" size="large" label="如：一杯星巴克大杯拿铁" is-link />
          <div class="req-bottom">
            <img src="@/assets/buy/warn.png" />
            <span>平台不支持厨房类药品</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="buy-body">
      <h2>达达速购</h2>
      <div class="buy">
        <router-link v-for="store in stores" :key="store.id" :to="`/agent/purchase/order?id=${store.id}`">
          <div class="item">
            <div>
              <img :src="store.image" alt="" />
              <span>{{ store.name }}</span>
            </div>
          </div>
        </router-link>
      </div>
      <h2>精选大牌</h2>
      <div class="buy">
        <router-link v-for="(brand, index) in brands" :key="brand.id" :to="`/agent/purchase/order?id=${brand.id}`">
          <div class="item">
            <div class="no-1">
              <img :src="brand.image" alt="" />
              <span>{{ brand.name }}</span>
              <span v-if="index === 0" class="renqi">人气菜单</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="buy-foot">
      <div class="foot">
        <router-link to="#">
          <van-icon name="info" />
          <span>了解帮我买</span>
        </router-link>
        <span class="text" />
        <router-link to="#">
          <van-icon name="service" />
          <span>联系客服</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'

const images = [require('@/assets/buy/banner1.png'), require('@/assets/buy/banner2.png')]
let stores = [
  {
    id: 1,
    name: '便利店',
    image: require('@/assets/buy/shop2.png')
  },
  {
    id: 2,
    name: '取快递',
    image: require('@/assets/buy/express.png')
  },
  {
    id: 3,
    name: '代买菜',
    image: require('@/assets/buy/bmc.png')
  }
]
let brands = [
  {
    id: 4,
    name: '星巴克',
    image: require('@/assets/buy/starbucks.png')
  },
  {
    id: 5,
    name: '喜茶',
    image: require('@/assets/buy/heytea.png')
  },
  {
    id: 6,
    name: 'LELECHA乐乐茶',
    image: require('@/assets/buy/lelecha.png')
  },
  {
    id: 7,
    name: '一点点',
    image: require('@/assets/buy/1diandian.png')
  }
]

let route = useRoute()
let cityName = $ref<string>((route.query.city as string) || '北京市')
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.flex-1 {
  overflow: auto;
}

.buy-head {
  position: relative;
  height: func.rpx(300);

  .imgs {
    width: 100%;
    height: func.rpx(195);
  }

  :deep {
    .van-swipe__indicators {
      left: 90%;
    }

    i {
      width: func.rpx(10);
      height: func.rpx(10);
    }
  }

  .city {
    position: absolute;
    top: func.rpx(20);
    right: 0;
    display: flex;
    width: func.rpx(80);
    height: func.rpx(36);
    align-items: center;
    justify-content: space-between;
    padding: func.rpx(9) func.rpx(12);
    background-color: white;
    border-radius: func.rpx(18) 0 0 func.rpx(18);
    font-size: func.rpx(12);

    > img {
      width: func.rpx(13);
    }
  }

  .request {
    position: absolute;
    bottom: 0;
    left: func.rpx(15);
    display: flex;
    overflow: hidden;
    width: func.rpx(360);
    height: func.rpx(115);
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    background-color: white;
    border-radius: func.rpx(10);
    box-shadow: 0 0 8px #AAAAAA;

    :deep {
      .van-cell__title {
        height: func.rpx(69);
        font-size: func.rpx(14);

        > span {
          display: block;
          margin-bottom: func.rpx(8);
        }
      }

      .van-cell__label {
        margin-bottom: func.rpx(3);
        font-size: func.rpx(12);
      }
    }

    .req-bottom {
      display: flex;
      align-items: center;
      padding: func.rpx(15);
      background: linear-gradient(270deg, rgb(255 150 0 / 0%), rgb(255 150 0 / 10%));
      color: #FF9600;
      font-size: func.rpx(14);

      > img {
        width: func.rpx(16);
        margin-right: func.rpx(8);
      }
    }
  }
}

.buy-body {
  padding: func.rpx(16);

  h2 {
    margin: func.rpx(16) 0;
    color: #333333;
    font-size: func.rpx(22);
    font-weight: bold;
  }

  .buy {
    display: flex;

    // justify-content: space-evenly;
    flex-wrap: wrap;

    .item {
      display: flex;
      width: func.rpx(119);
      height: func.rpx(106);
      flex-direction: column;
      align-items: center;
      padding-top: func.rpx(15);
      margin-bottom: func.rpx(10);
      font-size: func.rpx(14);
      text-align: center;

      img {
        width: func.rpx(60);
        margin: 0 auto func.rpx(15);
      }
    }

    .no-1 {
      position: relative;

      .renqi {
        position: absolute;
        top: func.rpx(-10);
        right: func.rpx(-30);
        display: block;
        width: func.rpx(60);
        height: func.rpx(20);
        padding: func.rpx(3);
        border: 1px solid white;
        background-color: #FF5A41;
        border-radius: func.rpx(10);
        color: white;
        font-size: func.rpx(12);
      }
    }
  }
}

.buy-foot {
  display: flex;
  width: 100vw;
  align-items: center;
  margin-top: func.rpx(27);
  margin-bottom: func.rpx(20);

  .foot {
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: #333333;

    :deep {
      .van-badge__wrapper {
        margin-right: func.rpx(5);
      }
    }

    .text {
      display: inline-block;
      width: func.rpx(1);
      height: func.rpx(14);
      margin: 0 func.rpx(10);
      background-color: #333333;
      line-height: func.rpx(16);
    }
  }
}
</style>
