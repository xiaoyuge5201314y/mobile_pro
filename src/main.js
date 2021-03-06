import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import '@/assets/style/base.css'
import '@/assets/style/normalize.css'

// 导入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.filter('parsePrice', (value) => {
  return `￥ ${value.toFixed(2)}`;
});

import util from '../util/index'
Vue.prototype.$util = util;

// 导入axios
import axios from './api/http'
// 将axios挂载到全局
Vue.prototype.$http = axios;

router.beforeEach((to, from, next) => {
  if(to.path==="/login"){
    return next();
  }
  //用户未登录 需要跳转登录页面
  if (to.matched.some(record => record.meta.auth)) {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      return next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }

});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
