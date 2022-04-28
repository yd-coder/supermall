import Vue from 'vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Sku } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'

// Vant ui轮播图插件
Vue.use(Swipe);
Vue.use(SwipeItem);
// Vant ui懒加载插件
Vue.use(Lazyload,{
  loading: require('@/assets/img/common/lazyload.gif')
});
// Vant ui商品加购和购买的规格选择弹窗
Vue.use(Sku);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
