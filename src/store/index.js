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
    cartList: [],
    // 是否显示购物车信息
    showCart: false,

  },
  mutations: {
    // 修改导航栏定位
    CHANGE_NAV_FIXED(state, bool) {
      state.navFixed = bool;
    },
    // 显示购物车
    SHOW_CART(state, bool) {
      state.showCart = bool;
    },
    // 登录状态
    LOGIN(state, bool) {
      state.login = bool;
    },
    // 添加商品到购物车
    CART_LIST(state, {
      productId,
      salePrice,
      productName,
      productImg,
      productNum = 1
    }) {
      // 商品数据
      let goods = {
        productId,
        salePrice,
        productName,
        productImg
      };
      const isGoods = state.cartList.find(ele => ele.productId === productId);
      // 如果不存在就添加到购物车中
      console.log(isGoods)
      if (state.cartList.length == 0 || !isGoods) {
        goods.productNum = productNum
        state.cartList.push(goods);
        // 如果存在 就修改商品
      } else {
        // 获取商品和商品索引
        state.cartList.forEach((ele, i) => {
          if (ele.productId === productId && ele.productNum >= 0) {
            ele.productNum += productNum;

          }
        })
      }
      // 最后将购物车数据存储到storage
      localStorage.setItem('buyCart', JSON.stringify(state.cartList));
    }
  },
  actions: {
    // 修改导航栏定位
    changeNavFixed(command, bool) {
      command.commit('CHANGE_NAV_FIXED', bool)
    },
    // 显示购物车
    showCart(command, bool) {
      command.commit('SHOW_CART', bool)
    },
    // 登录状态
    login(command, bool) {
      command.commit('LOGIN', bool)
    },
    // 添加购物车
    cartList(command, {
      productId,
      salePrice,
      productName,
      productImg,
      productNum
    }) {
      command.commit('CART_LIST', {
        productId,
        salePrice,
        productName,
        productImg,
        productNum
      })
    },
  },
  modules: {}
})
