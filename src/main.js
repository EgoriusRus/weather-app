import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import store from '@/store/'
Vue.config.productionTip = false

new Vue({
  store,
  axios,
  render: h => h(App),

}).$mount('#app')
