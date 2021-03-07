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
    // 网页初始化从本地中获取购物车数据
    INIT_CART_LIST(state) {
      const initCart = JSON.parse(localStorage.getItem('buyCart'))
      if (initCart) {
        state.cartList = initCart;
      }
    },
    // 添加商品到购物车
    ADD_CART_LIST(state, {
      productId,
      salePrice,
      productName,
      productImg,
      productNum = productNum ? productNum : 1
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
    },
    // 删除商品
    DELETE_CART_LIST(state, productId) {
      state.cartList.forEach((ele, i) => {
        if (ele.productId === productId) {
          if (ele.productNum > 0) {
            ele.productNum--;
          } else {
            state.cartList.splice(i, 1);
          }
        }
      })
    },
    // 清空购物车
    CLEAR_CART_LIST(state) {
      state.cartList = []
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
    addCartList(command, {
      productId,
      salePrice,
      productName,
      productImg,
      productNum
    }) {
      command.commit('ADD_CART_LIST', {
        productId,
        salePrice,
        productName,
        productImg,
        productNum
      })
    },
    // 初始化购物车
    initCartList(command) {
      command.commit('INIT_CART_LIST')
    },
    // 删除购物车数据
    deleteCartList(command, productId) {
      command.commit('DELETE_CART_LIST', productId)
    }
  },
  modules: {}
})
