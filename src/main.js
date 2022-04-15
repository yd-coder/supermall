import Vue from 'vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
