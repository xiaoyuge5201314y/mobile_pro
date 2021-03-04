<template>
  <div class="MHeader">
    <header class="header w">
      <div class="left">我的商城</div>
      <ul class="right nav">
        <li><a href="javascript:;">用户名</a></li>
        <li><a href="javascript:;">登录</a></li>
        <li><a href="javascript:;">我的购物车</a></li>
        <li>
          <div
            class="title"
            @mouseenter="() => (orderShow = true)"
            @mouseleave="() => (orderShow = false)"
          >
            我的订单<i
              :class="'el-icon-caret-' + (orderShow ? 'top' : 'bottom')"
            ></i>
          </div>
          <div class="option" v-show="orderShow">
            <a href="javascript:;">待处理订单</a>
            <a href="javascript:;">全部订单</a>
            <a href="javascript:;">收货地址</a>
          </div>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "MHeader",
  data() {
    return {
      orderShow: false,
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
@color: #eee;
.MHeader {
  height: 3rem;
  background-color: @color;
  line-height: 3rem;
  position: relative;
  .nav {
    > li {
      float: left;
      color: #999;
      font-size: 12px;
      &:hover {
        .title {
          background-color: #fff;
          border: 1px solid #ccc;
          border-bottom: 1px solid #fff;
        }
        .option {
          background-color: #fff;
          border: 1px solid #ccc;
          border-top: 1px solid #fff;
        }
      }
      a:hover {
        color: red;
        text-decoration: underline;
      }
      > a {
        display: block;
        padding: 0 1rem;
        color: #999;
        border: 1px solid @color;
      }
      .title {
        padding: 0 1rem;
        border: 1px solid @color;
      }
      .option {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        padding: 0 1rem;
      }
    }
  }
}
</style>
