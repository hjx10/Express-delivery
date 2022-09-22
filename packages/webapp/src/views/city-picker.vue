<template>
  <div class="bgc">
    <div class="city_choice pt-2">
      城市选择
    </div>
    <ul class="city_ul">
      <li
        v-for="item in city_list"
        :key="item"
        @click="handleClickCity(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {areaList} from '@vant/area-data'
import {useRoute, useRouter} from 'vue-router'

const router = useRouter()
const route = useRoute()

let city_list: Array<string> = Object.values(areaList['city_list']).sort((a, b) => a.localeCompare(b))

function handleClickCity(record: string) {
  console.log(record)

  router.push({path: '/agent/purchase', query: {city: record}})
}
</script>

<style lang="scss" scoped>
.bgc {
  background-color: white;

  .city_choice {
    font-size: 20px;
    font-weight: bold;
  }

  .city_ul {
    list-style: none;
    padding: 5px 10px;

    li {
      font-size: 13px;
      padding: 20px 0;
      border-bottom: 1px solid #EEEEEE;
    }
  }
}
</style>
