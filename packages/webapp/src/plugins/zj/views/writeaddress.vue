<template>
  <div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      :add-button-text="新增地址"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit" />
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const chosenAddressId = ref('1')

    // 发送请求获取接口数据
    onMounted(() => {
      const url = ''
      axios.get(url).then((res) => {
        console.log(res)
      })
    })

    const list = [
      {
        id: '1',
        name: '混乱kk王',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true
      },
      {
        id: '2',
        name: '柠檬不萌',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号'
      }
    ]
    const disabledList = [
      {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号'
      }
    ]
    const $router = useRouter()
    const methods = {
      //详情 编程式跳转
      getDate() {
        $router.push('/zj/addaddress')
      },
      goEdit(index) {
        $router.push(`/zj/editaddress?index=${index}`)
      }
    }
    const onAdd = () => {
      methods.getDate()
    }
    const onEdit = (item, index) => {
      methods.goEdit(index)
    }

    return {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
      ...methods
    }
  }
}
</script>
