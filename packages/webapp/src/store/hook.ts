import {Store, useStore as basicUseStore} from 'vuex'
import {InjectionKey} from 'vue'

import type {AllState} from './interface'

export const key: InjectionKey<Store<AllState>> = Symbol()

export function useStore<T = AllState>() {
  return basicUseStore<T>(key)
}
