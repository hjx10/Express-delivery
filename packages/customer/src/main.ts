import '@/styles/tailwind.css'
import '@rabbit-run/common/styles/global.scss'
import '@/styles/global.scss'

import {createApp} from 'vue'

import App from '@/App.vue'

const app = createApp(App)

app.mount('#root')
