import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/index.vue'
import Login from '@/views/login.vue'
import AgentDelivery from '@/views/agent/delivery.vue'
import CityPicker from '@/views/city-picker.vue'
import AgentPurchase from '@/views/agent/purchase.vue'
import AgentPurchaseOrder from '@/views/agent/purchase-order.vue'
import AddressEdit from '@/views/address/edit.vue'
import AddressSearch from '@/views/address/search.vue'
import AddressFavorites from '@/views/address/favorites.vue'
import Coupon from '@/views/coupon/index.vue'
import UseMethod from '@/views/coupon/usemethod.vue'
import ExCoupon from '@/views/coupon/excoupon.vue'
import CouponList from '@/views/coupon/couponlist.vue'
import HsCoupon from '@/views/coupon/hscoupon.vue'
import HbCoupon from '@/views/coupon/hbcoupon.vue'
import Insurance from '@/views/insurance.vue'
import Remark from '@/views/remark.vue'
import Orders from '@/views/orders.vue'
import My from '@/views/my/index.vue'
import Cuscente from '@/views/my/cuscenter.vue'
import Setting from '@/views/my/setting.vue'
import Map from '@/views/map.vue'
import Accrge from '@/views/my/accrge.vue'
import Code404 from '@/views/_errors/code-404.vue'
import Code500 from '@/views/_errors/code-500.vue'
import Customerchat from '@/views/customerchat.vue'
import Search from '@/views/orders_search.vue'
import Problem from '@/views/my/problem.vue'
import Feedback from '@/views/my/feedback.vue'
import Prohibit from '@/views/my/prohibit.vue'
import Bdinvite from '@/views/my/bdinvite.vue'
import Protocol from '@/views/protocol/index.vue'
import PriceDetail from '@/views/map-ok.vue'
import Agreement from '@/views/protocol/agreement.vue'
import Registry from '@/views/protocol/registry.vue'
import Privacy from '@/views/protocol/privacy.vue'
import ShortPrivacy from '@/views/protocol/shortPrivacy.vue'
import Authorizatio from '@/views/protocol/authorizatio.vue'
import Sensitive from '@/views/protocol/sensitive.vue'
import Recharge from '@/views/protocol/recharge.vue'
import CancelLation from '@/views/protocol/cancellation.vue'
import QueryExpress from '@/views/my/query-express.vue'
import License from '@/views/my/license.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
      meta:{
        transition:true
      }
    },
    {
      name: 'AgentDelivery',
      path: '/agent/delivery',
      component: AgentDelivery,
      meta:{
        transition:true
      }
    },
    {
      name: 'AgentPurchase',
      path: '/agent/purchase',
      component: AgentPurchase,
      meta:{
        transition:true
      }
    },
    {
      name: 'AgentPurchaseOrder',
      path: '/agent/purchase/order',
      component: AgentPurchaseOrder
    },
    {
      name: 'CityPicker',
      path: '/city-picker',
      component: CityPicker
    },
    {
      name: 'AddressEdit',
      path: '/address/edit',
      component: AddressEdit
    },
    {
      name: 'AddressSearch',
      path: '/address/search',
      component: AddressSearch
    },
    {
      name: 'AddressFavorites',
      path: '/address/favorites',
      component: AddressFavorites
    },
    {
      name: 'Coupon',
      path: '/coupon',
      component: Coupon
    },
    {
      name: 'UseMethod',
      path: '/coupon/usemethod',
      component: UseMethod
    },
    {
      name: 'Excoupon',
      path: '/coupon/excoupon',
      component: ExCoupon
    },
    {
      name: 'CouponList',
      path: '/coupon/couponlist',
      component: CouponList
    },
    {
      name: 'HsCoupon',
      path: '/coupon/hscoupon',
      component: HsCoupon
    },
    {
      name: 'HbCoupon',
      path: '/coupon/hbcoupon',
      component: HbCoupon
    },
    {
      name: 'Insurance',
      path: '/insurance',
      component: Insurance
    },
    {
      name: 'Remark',
      path: '/remark',
      component: Remark
    },
    {
      name: 'Orders',
      path: '/orders',
      component: Orders
    },
    {
      name: 'Search',
      path: '/orders_search',
      component: Search
    },
    {
      name: 'My',
      path: '/my',
      component: My,
      meta:{
        transition:true
      }
    },
    {
      name: 'Problem',
      path: '/my/problem',
      component: Problem
    },
    {
      name: 'Feedback',
      path: '/my/feedback',
      component: Feedback
    },
    {
      name: 'Prohibit',
      path: '/my/prohibit',
      component: Prohibit
    },
    {
      name: 'Setting',
      path: '/my/setting',
      component: Setting
    },
    {
      name: 'Cuscente',
      path: '/my/cuscente',
      component: Cuscente
    },
    {
      name: 'Accrge',
      path: '/my/accrge',
      component: Accrge
    },
    {
      name: 'License',
      path: '/my/license',
      component: License
    },
    {
      name: 'Bdinvite',
      path: '/my/bdinvite',
      component: Bdinvite
    },
    {
      name: 'QueryExpress',
      path: '/my/queryExpress',
      component: QueryExpress
    },
    {
      name: 'Protocol',
      path: '/protocol',
      component: Protocol
    },
    {
      name: 'Registry',
      path: '/protocol/registry',
      component: Registry
    },
    {
      name: 'Privacy',
      path: '/protocol/privacy',
      component: Registry
    },
    {
      name: 'ShortPrivacy',
      path: '/protocol/shortprivacy',
      component: ShortPrivacy
    },
    {
      name: 'Authorizatio',
      path: '/protocol/authorizatio',
      component: Authorizatio
    },
    {
      name: 'Sensitive',
      path: '/protocol/sensitive',
      component: Sensitive
    },
    {
      name: 'Agreement',
      path: '/protocol/agreement',
      component: Agreement
    },
    {
      name: 'Recharge',
      path: '/protocol/recharge',
      component: Recharge
    },
    {
      name: 'CancelLation',
      path: '/protocol/cancellation',
      component: CancelLation
    },
    {
      name: 'Map',
      path: '/map',
      component: Map
    },
    {
      name: 'PriceDetail',
      path: '/priceDetail',
      component: PriceDetail
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Code500',
      path: '/500',
      component: Code500
    },
    {
      name: 'Code404',
      path: '/404',
      component: Code404
    },
    {
      name: 'Code404',
      path: '/:pathMatch(.*)',
      component: Code404
    },
    {
      name: 'Customerchat',
      path: '/customerchat',
      component: Customerchat
    }
  ]
})

export default router
