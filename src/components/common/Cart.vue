<template>
  <div class="Cart">
    <el-card class="box-card" v-show="showCar" :body-style="{ padding: 0 }">
      <div class="item clear-fix">
        <div class="pic">
          <img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt="" />
        </div>
        <div class="goodsInfo">
          <p class="goodsName">坚果 3 绒布国旗保护套</p>
          <p class="goodsPrice">
            <span class="price">{{ 79 | parsePrice }}</span>
            <span class="count"> x<i>2</i></span>
          </p>
        </div>
      </div>
      <div class="priceBox">
        <div class="sum">
          <p class="count">共<i class="">6</i>件商品</p>
          <p class="price">
            合计: <span class="">{{ 1 | parsePrice }}</span>
          </p>
        </div>
        <div class="btn">
          <el-button type="primary">去购物车</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["showCart"],
};
</script>

<style scoped lang="less">
.Car {
  position: absolute;
  top: 6.2rem;
  right: -1rem;
  width: 36rem;
  z-index: 1111111111;
  .item {
    padding: 2rem;
    .pic {
      float: left;
      border: 1px solid #ccc;
      width: 8rem;
      height: 8rem;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .goodsInfo {
      margin-left: 3rem;
      margin-top: 1rem;
      float: left;
      line-height: 3rem;
      p.goodsName {
        color: blue;
      }
      p.goodsPrice {
        color: red;
        font-size: 1.4rem;
        .count {
          color: #ccc;
        }
      }
    }
  }
  .priceBox {
    height: 8rem;
    border-top: 1px solid #eee;
    line-height: 3rem;
    padding-left: 2rem;
    .sum {
      float: left;
      color: #ccc;
      font-size: 1.4rem;
    }
    .price {
      color: red;
      font-size: 1.6rem;
    }
    .btn {
      float: right;
      margin-right: 2rem;
      margin-top: 2rem;
    }
  }
}
</style>
