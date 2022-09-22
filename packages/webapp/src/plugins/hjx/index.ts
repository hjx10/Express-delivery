import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'hjx-message',
    path: '/hjx/message',
    component: () => import('./views/message.vue')
  },
  {
    name: 'hjx-insurance',
    path: '/hjx/insurance',
    component: () => import('./views/insurance.vue')
  },
  {
    name: 'hjx-agreement',
    path: '/hjx/agreement',
    component: () => import('./views/agreement.vue')
  },
  {
    name: 'hjx-buyorder',
    path: '/hjx/buyorder',
    component: () => import('./views/buyorder.vue')
  },
  {
    name: 'hjx-test',
    path: '/hjx/test',
    component: () => import('./views/test.vue')
  }
]

export default routes
