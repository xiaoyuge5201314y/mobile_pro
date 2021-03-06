import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制顶部导航栏的定位
    navFixed: false,
    // 是否登录
    login: false,
    // 用户信息
    userInfo: null,
    // 加入购物车商品
    cardList: [],
    // 是否显示购物车信息
    showCart: false,
    // 购物车信息
    carInfo: {

    }

  },
  mutations: {
    CHANGE_NAV_FIXED(state, bool) {
      state.navFixed = bool;
    },
    SHOW_CART(state, bool) {
      state.showCart = bool;
    },
    LOGIN(state, bool) {
      state.login = bool;
    },
  },
  actions: {
    changeNavFixed(command, bool) {
      command.commit('CHANGE_NAV_FIXED', bool)
    },
    showCart(command, bool) {
      command.commit('SHOW_CART', bool)
    },
    login(command, bool) {
      command.commit('LOGIN', bool)
    }
  },
  modules: {}
})
