import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/city',
    name: 'city',
    component: () => import('./views/city.vue')
  },
  {
    path: '/explain',
    name: 'explain',
    component: () => import('./views/explain.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('./views/feedback.vue')
  },
  {
    path: '/helpbuy',
    name: 'helpbuy',
    component: () => import('./views/helpbuy.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('./views/pay.vue')
  },
  {
    path: '/recharge',
    name: 'recharge',
    component: () => import('./views/recharge.vue')
  },
  {
    path: '/remarks',
    name: 'remarks',
    component: () => import('./views/remarks.vue')
  }
]

export default routes
