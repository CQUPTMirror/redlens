import Vue from 'vue'
import Tooltop from 'ant-design-vue/lib/tooltip'
import Card from 'ant-design-vue/lib/card'
import Row from 'ant-design-vue/lib/row'
import Col from 'ant-design-vue/lib/col'
import Icon from 'ant-design-vue/lib/icon'
// import Modal from 'ant-design-vue/lib/modal'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

import './assets/linuxicon/iconfont.css'

Vue.prototype.$axios = axios;
Vue.component(Card.name, Card);
// Vue.component(Modal.name, Modal);
Vue.component(Tooltop.name, Tooltop);
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Icon.name, Icon)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
