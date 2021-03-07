import {
  mapActions,
  mapMutations,
  mapState
} from "vuex";
export default {
  methods: {
    ...mapMutations(["INIT_CART_LIST"]),
    ...mapActions(["addCartList"]),
    // 加入购物车
    async addCart(productId, salePrice, productName, productImg, productNum = 1) {
      console.log(arguments)
      // 已登录 提交给后端
      if (localStorage.getItem("userInfo")) {
        const uid = JSON.parse(localStorage.getItem("userInfo")).id;
        this.$http.postRequest("/addCart", {
          productId,
          uid,
          salePrice,
          productNum,
        });
        this.initCart();
        //未登录 提交到vuex
      } else {
        this.addCartList({
          productId,
          salePrice,
          productName,
          productImg,
          productNum,
        });
      }
    },
    // 获取购物车
    async initCart() {
      if (!localStorage.getItem("userInfo")) {
        return;
      }
      const uid = JSON.parse(localStorage.getItem("userInfo")).id;
      const res = await this.$http.getRequest("/getCart?uid=" + uid);
      if (res.data.code === 200) {
        const cartList = res.data.data;
        localStorage.setItem("buyCart", JSON.stringify(cartList));
      }
      // 初始化vuex购物车
      this.INIT_CART_LIST();
    },
  },
  created() {
    // 初始化购物车
    this.initCart();
  }
}
