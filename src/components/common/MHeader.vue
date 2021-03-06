<template>
  <div class="MHeader">
    <header class="header w">
      <div class="left" style="font-size:1.6rem">我的商城</div>
      <ul class="right nav">
        <li><a href="javascript:;">用户名</a></li>
        <li><a href="javascript:;">登录</a></li>  
        <li><a href="javascript:;">我的购物车</a></li>
        <li
          @mouseenter="() => (orderShow = true)"
          @mouseleave="() => (orderShow = false)"
        >
          <div class="title">
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
@color: #f7f7f7;
.MHeader {
  height: 6rem;
  background-color: @color;
  line-height: 6rem;
  border-bottom: 1px solid #eee;
  position: relative;
  .nav {
    > li {
      position: relative;
      float: left;
      color: #999;
      font-size: 16px;
      &:hover {
        .title {
          background-color: @color;
          border: 1px solid #ccc;
          border-bottom: 1px solid #fff;
        }
        .option {
          background-color: @color;
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
        position: absolute;
        left: 0;
        top: 6rem;
        display: flex;
        padding: 0 1rem;
        flex-direction: column;
        border: 1px solid #fff;
        z-index: 1;
      }
    }
  }
}
</style>
