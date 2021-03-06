import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 控制顶部导航栏的定位
    navFixed: false,

  },
  mutations: {
    CHANGE_NAV_FIXED(state, bool) {
      state.navFixed = bool;
    }
  },
  actions: {
    changeNavFixed(command, bool) {
      command.commit('CHANGE_NAV_FIXED', bool)
    }
  },
  modules: {}
})
