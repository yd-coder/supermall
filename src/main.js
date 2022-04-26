import Vue from 'vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'

// Vant ui轮播图插件
Vue.use(Swipe);
Vue.use(SwipeItem);
// Vant ui懒加载插件
Vue.use(Lazyload,{
  loading: require('@/assets/img/common/lazyload.gif')
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
