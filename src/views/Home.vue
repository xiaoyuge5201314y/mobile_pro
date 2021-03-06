<template>
  <div ref="a" class="Home">
    <my-nav></my-nav>
    <search></search>
    <home-nav></home-nav>
    <!-- 主版块 -->
    <main class="w clear-fix">
      <!-- 侧边导航 -->
      <aside class="asideNav">
        <a class="title"><i class="el-icon-s-grid"></i> 全部商品分类</a>
        <ul>
          <li v-for="(item, index) in subNavList" :key="index">
            <a href="javascript:;">{{ item.name }}</a>
            <div class="subnav"></div>
          </li>
        </ul>
      </aside>
      <!-- 轮播图区域 -->
      <div class="banner">
        <el-carousel :interval="113000" height="470px" class="el-banner">
          <el-carousel-item
            v-for="(item, index) in bannerData.panelContents"
            :key="index"
          >
            <img v-if="item.picUrl" :src="item.picUrl" alt="" />
            <img v-if="item.picUrl2" :src="item.picUrl2" alt="" />
            <img v-if="item.picUrl3" :src="item.picUrl3" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </main>
    <!-- 重磅推荐 -->
    <section class="recommend w">
      <div class="recommendBox">
        <div class="item" v-for="(item, i) in recommendList" :key="i">
          {{ item.name }}
        </div>
      </div>
    </section>
    <!-- 购物版块 -->
    <section class="shop" v-for="(ele, i) in secData" :key="i">
      <my-sec :title="ele.name" :dataList="ele">
        <div class="item" v-for="(item, i) in ele.panelContents" :key="i">
          <a
            @click="toGoodsDetails(item)"
            href="javscript:;"
            v-if="item.type !== 0"
          >
            <img :src="item.productImageBig" alt="" />
          </a>
          <goods-card v-if="item.type === 0" :goodsInfo="item"> </goods-card>
        </div>
      </my-sec>
    </section>
  </div>
</template>

<script>
import Search from "@/components/common/Search.vue";
import GoodsCard from "@/components/common/GoodsCard.vue";
import MySec from "@/components/common/MySec.vue";
import HomeNav from "@/components/home/HomeNav.vue";
import banner from "../../db/banner.json";
import MyNav from "@/components/common/MyNav.vue";
export default {
  name: "Home",
  data() {
    return {
      bannerData: {},
      subNavList: [
        { name: "中铁臻选" },
        { name: "中铁臻选" },
        { name: "中铁臻选" },
        { name: "中铁臻选" },
      ],
      recommendList: [
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
        { name: "中梁美食" },
      ],
      secData: {},
    };
  },
  components: {
    Search,
    HomeNav,
    MySec,
    GoodsCard,
    MyNav,
  },
  methods: {
    toGoodsDetails(item) {
      const id = item.productId;
      this.$router.push(`/goodsDetails?productId=${id}`);
    },
  },
  created() {
    // 暂时假数据
    this.bannerData = banner.result.find((ele) => ele.type === 0);
    this.secData = banner.result.filter((ele) => ele.type === 3);
  },
};
</script>

<style scoped lang="less">
main {
  position: relative;
  .asideNav {
    position: absolute;
    left: 0;
    top: -3.6rem;
    width: 20rem;
    height: 51.6rem;
    background-color: #656262;
    z-index: 1111;
    .title {
      display: block;
      padding: 0 2rem;
      height: 3.6rem;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 3.6rem;
      background-color: #e60000;
    }
    ul {
      position: relative;
      padding-top: 0.3rem;
      li {
        &:hover {
          background: #fff;
          a {
            color: #656262;
          }
          .subnav {
            display: block;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          }
        }
        padding: 0 2rem;
        height: 3rem;
        line-height: 3rem;
        color: #fff;
        font-size: 1.4rem;
        a {
          display: block;
          width: 100%;
          color: #fff;
          line-height: 3rem;
        }
        .subnav {
          display: none;
          position: absolute;
          left: 20rem;
          top: 0;
          width: 79rem;
          height: 48rem;
          z-index: 111;
          background: #fff;
        }
      }
    }
  }
  .banner {
    position: relative;
    padding: 1rem  0 1rem 21rem;
    img {
      position: absolute;
      left: 0;
      top: 0;
      height: 47rem;
      width: 100%;
    }
  }
}
.recommend {
  margin-top: 5rem;
  .recommendBox {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 20%;
      height: 20rem;
      border: 1px solid #fff;
      background-color: red;
    }
  }
}
.shop {
  .item {
    &:first-child {
      width: 50%;
    }
    width: 25%;
    height: 43rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      > img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
