import type {ActionTree, Module, MutationTree} from 'vuex'
import type {AxiosResponse} from 'axios'
import type {HTTP_TYPES} from '@rabbit-run/common'

import type {AddressState, RootState} from '@/store/interface'
import {addAddress} from '@/api/address'

const state: AddressState = {
  delivery: null,
  shipping: null,
  position: null
}

const mutations: MutationTree<AddressState> = {
  setDelivery(state, payload) {
    state.delivery = payload
  },
  setShipping(state, payload) {
    state.shipping = payload
  },
  setPosition(state, payload) {
    state.position = payload
  },
  toggleAddress(state) {
    let tmp = state.delivery
    state.delivery = state.shipping
    state.shipping = tmp
  }
}

const actions: ActionTree<RootState, AddressState> = {
  addAddress(context, {type, addressInfo}) {
    return addAddress(addressInfo).then(({data}: AxiosResponse<HTTP_TYPES.HttpMessage>) => {
      if (type === 'shipping') {
        context.commit('setShipping', {id: data.data.id, ...addressInfo})
      } else {
        context.commit('setDelivery', {id: data.data.id, ...addressInfo})
      }
      return data
    })
  }
}

const module: Module<AddressState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module
