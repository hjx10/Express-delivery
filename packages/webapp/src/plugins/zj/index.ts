import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/zj/text',
    name: 'zj-text',
    component: () => import('./views/text.vue')
  },
  {
    path: '/zj/customerchat',
    name: 'zj-customerchat',
    component: () => import('./views/customerchat.vue'),
    props: true
  },
  {
    name: 'zj-editaddress',
    path: '/zj/editaddress',
    component: () => import('./views/editaddress.vue')
  },
  {
    name: 'zj-accrge',
    path: '/zj/accrge',
    component: () => import('./views/accrge.vue')
  },
  {
    name: 'zj-addaddress',
    path: '/zj/addaddress',
    component: () => import('./views/addaddress.vue')
  },
  {
    name: 'zj-cuscenter',
    path: '/zj/cuscenter',
    component: () => import('./views/cuscenter.vue')
  },
  {
    name: 'zj-writeaddress',
    path: '/zj/writeaddress',
    component: () => import('./views/writeaddress.vue')
  }
]

export default routes
