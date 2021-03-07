<template>
  <div class="MyNav" :class="navFixed ? 'fixed' : ''">
    <div class="navWrap w clear-fix">
      <!-- 左侧导航栏 -->
      <div class="navList left">
        <ul>
          <li><router-link class="link" to="/home">首页</router-link></li>
          <li><router-link class="link" to="">全部</router-link></li>
          <li><router-link class="link" to="">全部</router-link></li>
          <li><router-link class="link" to="">全部</router-link></li>
        </ul>
      </div>
      <!-- 右侧功能栏 -->
      <div class="userBox right clear-fix">
        <!-- 个人信息 -->
        <div class="user left" @mouseenter="enterUser" @mouseleave="leaveUser">
          <a
            href="javascript:;"
            @click="() => (!login ? $router.push('/login') : '')"
          >
            <span class="el-icon-user-solid"></span>
          </a>
          <div class="userInfo" v-show="showUser">
            <div class="avatar"></div>
            <ul>
              <li><router-link class="link" to="">我的订单</router-link></li>
              <li><router-link class="link" to="">账号资料</router-link></li>
              <li><router-link class="link" to="">收货地址</router-link></li>
              <li><router-link class="link" to="">售后服务</router-link></li>
              <li><router-link class="link" to="">我的优惠</router-link></li>
              <li>
                <a class="link" href="javscript:;" @click="logout">退出</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 购物车 -->
        <div class="car left" @mouseenter="cartEnter" @mouseleave="cartLeave">
          <a href="javascript:;">
            <div class="el-icon-shopping-cart-2"></div>
            <el-badge :value="cartList.length" class="item"> </el-badge
          ></a>
          <!-- 购物车信息 -->
          <div class="carInfo" v-show="showCart">
            <div class="box-card" :body-style="{ padding: 0 }">
              <div
                class="item clear-fix"
                v-for="(item, i) in cartList"
                :key="i"
              >
                <div class="pic left">
                  <img :src="item.productImageBig" alt="" />
                </div>
                <div class="desc left">
                  <div class="goodsName">{{ item.productName }}</div>
                  <div class="goodsPrice">
                    <div class="price">
                      {{ Number(item.salePrice) | parsePrice }}
                    </div>
                    <div class="count">x{{ item.productNum }}</div>
                  </div>
                  <button class="close" @click="deleteCart(item.productId)">
                    x
                  </button>
                </div>
              </div>
              <div class="result">
                <p class="count">共{{ cartList.length }}件商品</p>
                <p class="sumPrice">
                  合计:
                  <span>{{ sumPrice() | parsePrice }}</span>
                </p>
                <el-button type="primary" class="btn">去购物车</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "MyNav",
  data() {
    return {
      showUser: false,
    };
  },
  computed: {
    ...mapState(["navFixed", "showCart", "login", "cartList"]),
  },
  watch: {},
  methods: {
    ...mapActions(["initCartList", "deleteCartList"]),
    ...mapMutations(["SHOW_CART", "LOGIN", "CLEAR_CART_LIST"]),
    cartEnter() {
      // this.$store.dispatch("showCart", true);
      this.SHOW_CART(true);
    },
    cartLeave() {
      // this.$store.dispatch("showCart", false);
      this.SHOW_CART(false);
    },
    enterUser() {
      if (localStorage.getItem("userInfo")) {
        this.showUser = true;
      }
    },
    leaveUser() {
      if (localStorage.getItem("userInfo")) {
        this.showUser = false;
      }
    },
    sumPrice() {
      let price = 0;
      this.cartList.forEach((item) => {
        price += item.productNum * item.salePrice;
      });
      return price;
    },
    // exit
    logout() {
      // 将用户菜单隐藏
      this.showUser = false;
      // 清除vuex 和 storage数据
      localStorage.removeItem("userInfo");
      localStorage.removeItem("buyCart");
      this.CLEAR_CART_LIST();
      this.LOGIN(false);
    },
    // 删除商品
    async deleteCart(productId) {
      console.log(productId);
      // 已登录
      if (localStorage.getItem("userInfo")) {
        const uid = JSON.parse(localStorage.getItem("userInfo")).id;
        // 请求
        this.$http.postRequest("./deleteCart", { productId, count: 1, uid });
        // 刷新缓存数据和vuex
        const res = await this.$http.getRequest("/getCart?uid=" + uid);
        if (res.data.code === 200) {
          const cartList = res.data.data;
          localStorage.setItem("buyCart", JSON.stringify(cartList));
          // 初始化vuex购物车
          this.initCartList();
        }
      } else {
        this.deleteCartList(productId);
      }
    },
  },
  created() {},
};
</script>

<style scoped lang="less">
.MyNav {
  height: 6rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  &.fixed {
    width: 100%;
    position: fixed;
    z-index: 999999;
  }
  .navWrap {
    height: 100%;
    .navList {
      ul {
        height: 100%;
        li {
          margin-left: 2rem;
          font-size: 1.4rem;
          height: 100%;
          float: left;
          line-height: 6rem;
          .link:hover {
            color: blue;
          }
        }
      }
    }
    .userBox {
      height: 100%;

      .user {
        position: relative;
        height: 100%;
        font-size: 2.4rem;
        line-height: 6rem;
        .userInfo {
          position: absolute;
          right: -9rem;
          width: 20rem;
          border-radius: 0.5rem;
          box-shadow: 2px 2px 20px #bbb;
          background-color: #fff;
          z-index: 3;
          .avatar {
            height: 10rem;
          }
          ul {
            li {
              border-top: 1px solid #eee;
              height: 4rem;
              font-size: 1.6rem;
              text-align: center;
              line-height: 4rem;
              color: black;
            }
          }
        }
      }
      .car {
        position: relative;
        margin-left: 3rem;
        margin-right: 1rem;
        > a {
          font-size: 2.4rem;
          line-height: 6rem;
        }
        .carInfo {
          position: absolute;
          left: -30rem;
          z-index: 9999999;
          background-color: #fff;
          .box-card {
            width: 36rem;
            box-shadow: 1px 1px 20px #ccc;
            .item {
              position: relative;
              height: 12rem;
              border-bottom: 1px solid #eee;
              &:hover .desc .close {
                display: block;
              }
              .pic {
                margin: 2rem;
                padding: 1rem;
                width: 8rem;
                height: 8rem;
                border: 1px solid #ccc;
                border-radius: 5px;
                img {
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              .desc {
                margin-top: 2rem;
                .goodsName {
                  margin: 1rem 0;
                  color: blue;
                  font-size: 1.4rem;
                }
                .goodsPrice {
                  font-size: 1.2rem;
                  color: red;
                  .price {
                    display: inline-block;
                  }
                  .count {
                    margin-left: 1rem;
                    display: inline-block;
                    color: #ccc;
                  }
                }

                .close {
                  display: none;
                  position: absolute;
                  right: 2rem;
                  top: 50%;
                  transform: translateY(-50%);
                  border: 1px solid #ddd;
                  border-radius: 50%;
                  outline: none;
                  width: 2rem;
                  height: 2rem;
                  font-size: 1.4rem;
                  cursor: pointer;
                }
              }
            }

            .result {
              position: relative;
              height: 8rem;
              padding: 2rem;
              .count {
                font-size: 1.2rem;
                color: #999;
              }
              .sumPrice {
                margin-top: 1rem;
                font-size: 1.6rem;
                span {
                  font-weight: 700;
                  color: red;
                }
              }
              .btn {
                position: absolute;
                transform: translateY(-50%);
                top: 50%;
                right: 2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
