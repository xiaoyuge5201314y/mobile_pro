<template>
  <div class="GoodsDetails">
    <my-nav></my-nav>
    <main class="main w">
      <div class="picShow">
        <div class="picChange">
          <a
            :class="clickIndex === i ? 'click' : ''"
            href="javascript:;"
            v-for="(item, i) in goodsDetails.productImageSmall"
            :key="i"
            @click="imgChange(i, item)"
            ><img :src="item" alt=""
          /></a>
        </div>
        <div class="pic">
          <img :src="bigImg" ref="bigImg" alt="" />
        </div>
      </div>
      <div class="goodsInfo">
        <div class="desc clear-fix">
          <div class="title">{{ goodsDetails.productName }}</div>
          <div class="subTitle">{{ goodsDetails.subTitle }}</div>
          <div class="price">
            {{ Number(goodsDetails.salePrice) | parsePrice }}
          </div>
        </div>
        <div class="count">
          <span style="margin-right: 2rem">数量</span>
          <el-input-number
            v-model="goodsNum"
            :min="0"
            size="mini"
            :step="1"
          ></el-input-number>
        </div>
        <div class="btns">
          <el-button
            size="large"
            type="primary"
            @click="
              addCart(
                goodsDetails.productId,
                goodsDetails.salePrice,
                goodsDetails.productName,
                goodsDetails.productImageBig,
                goodsNum
              )
            "
            >加入购物车</el-button
          >
          <el-button size="large" @click="buy">现在购买</el-button>
        </div>
      </div>
    </main>

    <my-sec title="产品信息">
      <div v-html="goodsDetails.detail" ref="details"></div>
    </my-sec>
  </div>
</template>

<script>
import MySec from "@/components/common/MySec.vue";
import MyNav from "@/components/common/MyNav.vue";
import cart from "@/mixin/cart.js";
export default {
  name: "GoodsDetails",
  mixins: [cart],
  data() {
    return {
      // 商品信息
      goodsDetails: {},
      // 商品购买数量
      goodsNum: 1,
      // 小图索引
      clickIndex: 0,
      // 大图
      bigImg: "",
    };
  },
  components: {
    MySec,
    MyNav,
  },
  methods: {
    // 或群商品详情
    async getGoodsDetails() {
      const productId = this.$route.query.productId;
      const res = await this.$http.getRequest(
        "/getGoodsDetails?productId=" + productId
      );
      if (res.data.code === 200) {
        this.goodsDetails = res.data.data;
        // 控制图片大小 需要使用nextTic 要不然监听不到dom的改变
        this.bigImg = this.goodsDetails.productImageBig;
        this.$nextTick(() => {
          const $img = this.$refs.details.firstElementChild;
          $img.style = "width:100%;display:block";
        });
      }
    },
    // 点击切换图片
    imgChange(i, picUrl) {
      this.clickIndex = i;
      this.$refs.bigImg.src = picUrl;
    },
   
    // 不买啦
    buy() {},
  },
  created() {
    // 获取商品详情信息
    this.getGoodsDetails();
  },
};
</script>

<style scoped lang="less">
.GoodsDetails {
  .main {
    margin-top: 2rem;
    height: 55rem;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    padding-left: 6rem;
    display: flex;
    align-items: center;
    .picShow {
      position: relative;
      .picChange {
        float: left;
        a {
          &.click {
            box-shadow: 0 0 0 3px #ccc inset;
          }
          margin-top: 2rem;
          display: block;
          padding: 1rem;
          width: 7.8rem;
          height: 7.8rem;
          border: 1px solid #eee;
          border-radius: 5px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .pic {
        margin-left: 10rem;
        width: 42rem;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .goodsInfo {
      margin: 6rem 0 0 3rem;
      align-self: flex-start;
      width: 40rem;
      .desc {
        border-bottom: 2px solid #eee;
        .title {
          font-size: 2.4rem;
          color: #000;
        }
        .subTitle {
          padding: 2rem 0;
          display: inline-block;
          font-size: 1.4rem;
          color: #ccc;
        }
        .price {
          padding: 2rem 0;
          float: right;
          color: red;
          font-size: 2rem;
          font-weight: 700;
        }
      }
      .count {
        padding: 4rem 0 2rem;
        border-bottom: 2px solid #eee;
      }
      .btns {
        margin-top: 4rem;
      }
    }
  }
}
</style>
