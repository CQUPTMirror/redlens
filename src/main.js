import Vue from 'vue'
import Tooltop from 'ant-design-vue/lib/tooltip'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

// import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

export const EventBus = new Vue()

Vue.prototype.$axios = axios;
Vue.component(Tooltop.name, Tooltop);
Vue.use(VueClipboard)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
