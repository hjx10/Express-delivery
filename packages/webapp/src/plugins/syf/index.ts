import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/syf/discoupon',
    name: 'discoupon',
    component: () => import('../syf/views/discoupon.vue')
  },
  {
    path: '/syf/coupon',
    name: 'coupon',
    component: () => import('../syf/views/coupon.vue')
  },
  {
    path: '/syf/couponlist',
    name: 'couponlist',
    component: () => import('../syf/views/couponlist.vue')
  },
  {
    path: '/syf/excoupon',
    name: 'excoupon',
    component: () => import('../syf/views/excoupon.vue')
  },
  {
    path: '/syf/usemethod',
    name: 'usemethod',
    component: () => import('../syf/views/usemethod.vue')
  },
  {
    path: '/syf/DiscountCoupon',
    name: 'discountCoupon',
    component: () => import('../syf/components/DiscountCoupon.vue')
  }
]

export default routes
