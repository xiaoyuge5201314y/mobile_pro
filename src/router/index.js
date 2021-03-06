import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/Home.vue')
}, {
  path: '/goodsDetails',
  name: 'GoodsDetails',
  component: () => import('@/views/GoodsDetails.vue')
}]

const router = new VueRouter({
  routes
})

export default router
