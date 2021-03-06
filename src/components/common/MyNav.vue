<template>
  <div class="MyNav" :class="navFixed ? 'fixed' : ''">
    <div class="navWrap w clear-fix">
      <!-- 左侧导航栏 -->
      <div class="navList left">
        <ul>
          <li><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">全部</a></li>
        </ul>
      </div>
      <!-- 右侧功能栏 -->
      <div class="userBox right clear-fix">
        <!-- 个人信息 -->
        <div class="user left">
          <a href="javascript:;">
            <span class="el-icon-user-solid"></span>
          </a>
          <div class="userInfo"></div>
        </div>
        <!-- 购物车 -->
        <div class="car left" @mouseenter="carEnter" @mouseleave="carLeave">
          <a href="javascript:;">
            <div class="el-icon-shopping-cart-2"></div>
            <el-badge :value="1" class="item"> </el-badge
          ></a>
          <!-- 购物车信息 -->
          <div class="carInfo" v-show="showCar">
            <div class="box-card" :body-style="{ padding: 0 }">
              <div class="item clear-fix">
                <div class="pic left">
                  <img
                    src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png"
                    alt=""
                  />
                </div>
                <div class="desc left">
                  <div class="goodsName">Smartisan 明信片</div>
                  <div class="goodsPrice">
                    <div class="price">{{ 9.9 | parsePrice }}</div>
                    <div class="count">x9</div>
                  </div>
                  <button class="close">x</button>
                </div>
              </div>
              <div class="result">
                <p class="count">共{{ 15 }}件商品</p>
                <p class="sumPrice">
                  合计: <span>{{ 347 | parsePrice }}</span>
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
import { mapState } from "vuex";
export default {
  name: "MyNav",
  data() {
    return {
      // 展示购物车内容
      showCar: false,
    };
  },
  computed: {
    ...mapState(["navFixed"]),
  },
  methods: {
    carEnter() {
      this.showCar = true;
    },
    carLeave() {
      this.showCar = false;
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
          a:hover {
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
          z-index: 111;
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
                  font-size: 1.8rem;
                }
                .goodsPrice {
                  font-size: 1.6rem;
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
              background-color: #fff;
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
