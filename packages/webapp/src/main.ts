import '@/styles/tailwind.css'
import 'vant/lib/index.css'
import '@rabbit-run/common/styles/global.scss'
import '@/styles/themes.scss'

import {createApp} from 'vue'
import Vant from 'vant'

import store from '@/store'
import {key} from '@/store/hook'
import router from '@/router'
import App from '@/App.vue'

import './permission'

const app = createApp(App)

// vant 按需引入
app.use(Vant)

app.use(router)
app.use(store, key)

app.mount('#root')
