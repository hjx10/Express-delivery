import type {Module, MutationTree, ActionTree} from 'vuex'
import {HTTP_TYPES} from '@rabbit-run/common'

import {getToken, removeToken, setToken} from '@/utils/auth'
import {login, getUser} from '@/api/auth'
import type {RootState, UserState} from '../interface'
import {AxiosResponse} from 'axios'

const state: UserState = {
  token: getToken(),
  user: null
}

const mutations: MutationTree<UserState> = {
  setToken(state, payload) {
    state.token = payload
    setToken(payload)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUser(state, payload: HTTP_TYPES.UserMessage) {
    state.user = payload
  }
}

const actions: ActionTree<RootState, UserState> = {
  login(store, payload) {
    return login(payload).then(({data}) => {
      store.commit('setToken', data.data.token)
      return data
    })
  },
  getUser(store) {
    return getUser().then(({data}: AxiosResponse<HTTP_TYPES.HttpUserMessage>) => {
      store.commit('setUser', data.data)
      return data
    })
  }
}

const module: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module
