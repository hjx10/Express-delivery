import type {Module, MutationTree} from 'vuex'

import type {CouponState, RootState} from '@/store/interface'

const state: CouponState = {
  current: null
}

const mutations: MutationTree<CouponState> = {
  setCurrent(state, payload) {
    state.current = payload
  }
}

const module: Module<CouponState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default module
