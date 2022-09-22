import type {Module, MutationTree} from 'vuex'

import type {OrderState, RootState} from '@/store/interface'

const state: OrderState = {
  tip: 0,
  codeChecked: true,
  insurance: 0, // 保价
  remark: '请输入留言信息' // 备注
}

const mutations: MutationTree<OrderState> = {
  setInsurance(state, payload) {
    state.insurance = payload
  },
  setRemark(state, payload) {
    state.remark = payload
  },
  setCodeChecked(state, payload) {
    state.codeChecked = payload
  },
  setTip(state, payload) {
    state.tip = payload
  }
}

const module: Module<OrderState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default module
