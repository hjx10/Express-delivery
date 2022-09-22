<template>
  <div class="body">
    <div class="header">
      <van-nav-bar
        title-class="beizhu"
        left-arrow
        @click-left="$router.back()"
      >
        <template #title>
          <h1>
            运费明细
          </h1>
        </template>
        <template #left>
          <div class="left">
            <van-icon name="arrow-left"/>
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <div class="pay">
        <span>需要支付金额</span>
        <span>￥<span class="price">16.0</span></span>
      </div>
      <div class="freight">
        <div>
          <span>订单距离</span>
          <span>4.3公里</span>
        </div>
        <div>
          <span>基础运费</span>
          <span>16.0元</span>
        </div>
      </div>
    </div>
    <div class="road">
      <span>运费根据以下路线计算</span>
      <span>
        <a href="#" class="rule">运费计价规则</a>
        <van-icon name="arrow"/>
      </span>
    </div>
    <div class="map">
      <div ref="container" class="map-container"/>
      <span class="distance">距离：4.29公里</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map = $shallowRef<any>(null)
let container = $ref(null)

function initMap() {
  let arr = [
    [116.310604, 39.884675],
    [116.294392, 39.909529]
  ]
  AMapLoader.load({
    key: '87e771a1a7ae5a8ef6fd17909dd45aeb',
    version: '2.0',
    plugins: ['AMap.ToolBar', 'AMap.Driving']
  })
    .then((AMap) => {
      map = new AMap.Map(container, {
        center: [116.310604, 39.884675],
        zoom: 11
      })
      for (let i = 0; i < arr.length; i++) {
        const marker = new AMap.Marker({
          position: arr[i], // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          map: map,
          content:
            `
            <div class="custom-content-marker">
             <img style="width:20px" src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png">
            </div>`,
          offset: new AMap.Pixel(-15, -20)
        })
        // 将创建的点标记添加到已有的地图实例：
        map.add([marker])
      }
    })
    .catch((e) => {
      console.log('map error ', e)
    })
}

onMounted(() => {
  initMap()
})

onUnmounted(() => {
  map.destroy()
})
</script>

<style lang="scss" scoped>
@use "@rabbit-run/common/styles/func.scss";

.body {
  width: 100vw;
  min-height: 100vh;
  background-color: white;

  .header {
    border-bottom: 1px solid #E9E9EB;

    h1 {
      color: #333333;
      font-size: func.rpx(18);
      font-weight: bold;
    }

    .left {
      color: #333333;
      font-size: func.rpx(18);
      font-weight: bold;
    }

    .van-icon::before {
      display: inline-block;
      color: #333333;
      font-size: func.rpx(18);
      font-weight: bold;
    }
  }

  .content {
    padding: func.rpx(12) func.rpx(16);

    .pay {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: func.rpx(25) 0 func.rpx(10) 0;
      color: #22252a;
      font-size: func.rpx(20);
      font-weight: bold;

      .price {
        font-size: func.rpx(22);
      }
    }

    .freight {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;

      > div {
        color: #6d7077;
        font-size: func.rpx(14);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: func.rpx(15) 0;
      }
    }

  }

  .road {
    margin-top: func.rpx(30);
    margin-bottom: func.rpx(10);
    display: flex;
    justify-content: space-between;;
    align-items: center;
    color: #333;
    padding: func.rpx(16);

    .rule {
      color: #3c87fa;
    }
  }

  .map {
    padding: 0 func.rpx(16);
    position: relative;

    .map-container {
      height: func.rpx(200);
      margin: 0 auto;
    }

    .distance{
      position: absolute;
      top:0;
      left:17px;
      padding: func.rpx(5);
      background-color: #48a1fad9;
      color: white;
      font-size: func.rpx(13);
      border-radius: 100px;
    }
  }

}
</style>
