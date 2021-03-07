<template>
  <div class="GoodsCard">
    <div class="goodsCardWrap">
      <a href="javascript:;" @click="toGoodsDetails(goodsInfo)"> </a>
      <img :src="goodsInfo.productImageBig" alt="" height="200" />
      <div class="title">{{ goodsInfo.productName }}</div>
      <div class="subTitle">{{ goodsInfo.subTitle }}</div>
      <div class="shop">
        <div class="price">{{ goodsInfo.salePrice | parsePrice }}</div>
        <div class="btns">
          <el-button size="mini" @click="toGoodsDetails(goodsInfo)"
            >查看详情</el-button
          >
          <el-button type="primary" size="mini" @click="addCart"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsCard",
  props: ["goodsInfo"],
  methods: {
    // 跳转到详情页 并且附带商品id
    toGoodsDetails(item) {
      const id = item.productId;
      this.$router.push(`/goodsDetails?productId=${id}`);
    },
    // 加入购物车
    addCart() {
      this.$emit(
        "addCart",
        this.goodsInfo.productId,
        this.goodsInfo.salePrice,
        this.goodsInfo.productName,
        this.goodsInfo.productImageBig
        // productNum
      );
    },
  },
};
</script>

<style scoped lang="less">
.GoodsCard {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  text-align: center;
  transition: 0.5s;
  &:hover {
    margin-top: -0.2rem;
    .goodsCardWrap {
      > a {
        box-shadow: 1px 1px 20px #ccc;
      }
    }
    .goodsCardWrap .shop .btns {
      display: block;
      background-color: #fff;
    }
  }
  .goodsCardWrap {
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      z-index: 1;
    }
    .title {
      font-size: 1.6rem;
      color: black;
      margin: 1rem 0;
    }
    .subTitle {
      font-size: 1.2rem;
      color: #ccc;
    }
    .shop {
      position: relative;
      margin-top: 2rem;
      .price {
        line-height: 2.8rem;
      }
      .btns {
        position: absolute;
        z-index: 100;
        display: none;
        width: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
      }
      .price {
        font-size: 1.6rem;
        color: red;
        font-weight: 700;
      }
    }
  }
}
</style>
