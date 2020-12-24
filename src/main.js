import { createApp } from 'vue'
import App from './App.vue'
// import Tooltop from 'ant-design-vue/lib/tooltip'
// import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

import './assets/icon/iconfont.js'
import $bus from './utils/event.js'

const app = createApp(App).use(VueClipboard)

app.config.globalProperties.$bus = $bus
app.config.globalProperties.$axios = axios

app.mount('#app')