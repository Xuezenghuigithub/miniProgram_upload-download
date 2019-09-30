import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$axios= axios

// 引入vuetify
import Vuetify from 'vuetify'
//使用vuetify
Vue.use(Vuetify)
Vue.use(ElementUi)
Vue.prototype.$axios= axios
Vue.config.productionTip = false

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
export default new Vuetify({ })
new Vue({
  render: h => h(App),
  vuetify: new Vuetify(),
}).$mount('#app')
