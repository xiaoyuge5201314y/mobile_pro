import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// VANT
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// rem工具
import 'postcss-pxtorem'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
