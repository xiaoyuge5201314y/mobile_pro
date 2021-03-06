<template>
  <div class="GoodsDetails">
    <my-nav></my-nav>
    <main class="main w">
      <div class="picShow">
        <div class="picChange">
          <a :class="clickIndex === 1 ? 'click' : ''" href="javascript:;"
            ><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt=""
          /></a>
          <a :class="clickIndex === 2 ? 'click' : ''" href="javascript:;"
            ><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt=""
          /></a>
          <a :class="clickIndex === 3 ? 'click' : ''" href="javascript:;"
            ><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt=""
          /></a>
          <a :class="clickIndex === 4 ? 'click' : ''" href="javascript:;"
            ><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt=""
          /></a>
          <a :class="clickIndex === 5 ? 'click' : ''" href="javascript:;"
            ><img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt=""
          /></a>
        </div>
        <div class="pic">
          <img src="https://ooo.0o0.ooo/2018/07/13/5b48ac7766d98.png" alt="" />
        </div>
      </div>
      <div class="goodsInfo">
        <div class="desc clear-fix">
          <div class="title">支付测试商品 IPhone X 全面屏 全面绽放</div>
          <div class="subTitle">此仅为支付测试商品 拍下不会发货</div>
          <div class="price">{{ 1 | parsePrice }}</div>
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
          <el-button size="large" type="primary">加入购物车</el-button>
          <el-button size="large">现在购买</el-button>
        </div>
      </div>
    </main>

    <my-sec title="产品信息"></my-sec>
  </div>
</template>

<script>
import MySec from "@/components/common/MySec.vue";
import MyNav from "@/components/common/MyNav.vue";
export default {
  name: "GoodsDetails",
  data() {
    return {
      // 商品购买数量
      goodsNum: 1,
      clickIndex: 1,
    };
  },
  methods: {},
  components: {
    MySec,
    MyNav,
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
