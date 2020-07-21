import Vue from 'vue'
import Tooltop from 'ant-design-vue/lib/tooltip'
import Icon from 'ant-design-vue/lib/icon'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

import './assets/linuxicon/iconfont.css'

export const EventBus = new Vue()

Vue.prototype.$axios = axios;
Vue.component(Tooltop.name, Tooltop);
Vue.component(Icon.name, Icon)
Vue.use(VueClipboard)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
