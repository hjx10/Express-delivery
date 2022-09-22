<template>
  <div ref="container" class="map-container" />
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

let map = $shallowRef<any>(null)
let container = $ref(null)

function initMap() {
  AMapLoader.load({
    key: '87e771a1a7ae5a8ef6fd17909dd45aeb',
    version: '2.0',
    plugins: ['AMap.ToolBar', 'AMap.Driving']
  })
    .then((AMap) => {
      map = new AMap.Map(container, {
        center: [116.397428, 39.90923],
        zoom: 13
      })

      let trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      })

      let marker = new AMap.Marker({
        position: [116.39, 39.9]
      })

      let polyline = new AMap.Polyline({
        path: [
          [116.368904, 39.913423],
          [116.382122, 39.901176],
          [116.387271, 39.912501],
          [116.398258, 39.9046]
        ],
        strokeColor: '#3366FF',
        strokeWeight: 5,
        strokeStyle: 'solid'
      })

      let infoWindow = new AMap.InfoWindow({
        isCustom: true,
        content: '<div>信息窗体</div>',
        offset: new AMap.Pixel(16, -45)
      })

      marker.on('click', function (e) {
        infoWindow.open(map, e.target.getPosition())
      })

      let toolbar = new AMap.ToolBar()
      map.addControl(toolbar)

      map.add(trafficLayer)
      map.add(marker)
      map.add(polyline)
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
.map-container {
  width: 100vw;
  height: 100vh;
}
</style>
