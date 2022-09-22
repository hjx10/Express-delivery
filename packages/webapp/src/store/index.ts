import {createLogger, createStore} from 'vuex'

import type {AllState} from './interface'
import userModule from './modules/user'
import orderModule from './modules/order'
import addressModule from './modules/address'
import couponModule from './modules/coupon'

const isProduction = process.env.NODE_ENV === 'production'

const store = createStore<AllState>({
  modules: {
    user: userModule,
    address: addressModule,
    order: orderModule,
    coupon: couponModule
  },
  plugins: isProduction ? [] : [createLogger({})],
  strict: true,
  devtools: !isProduction
})

export default store
