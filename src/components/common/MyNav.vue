<template>
  <div class="MyNav" :class="navFixed ? 'fixed' : ''">
    <div class="">
      <a href="javascript:;" @click="fn" data-link="/home" class="link">首页</a>
      <a href="javascript:;" @click="fn" data-link="/home" class="link">全部</a>
      <a href="javascript:;" @click="fn" data-link="/home" class="link"
        >捐赠名单</a
      >
      <a href="javascript:;" @click="fn" data-link="/home" class="link"
        >小程序</a
      >
      <a href="javascript:;" @click="fn" data-link="/home" class="link"
        >GitHub</a
      >
      <!-- 用户信息 -->
      <a href="javascript:;" @click="fn" data-link="/home" class="link user">
        <el-avatar
          size="small"
          class="userIcon"
          icon="el-icon-user-solid"
        ></el-avatar>
      </a>
      <!-- 购物车 -->
      <a
        @mouseenter="enterHandle"
        href="javascript:;"
        data-link="/home"
        class="link car"
        @mouseleave="leaveHandle"
      >
        <el-badge :value="12" class="item">
          <span class="badge el-icon-shopping-cart-2"> </span>
        </el-badge>
      </a>
    </div>
  </div>
</template>

<script>
// import Car from "./Car.vue";
import { mapState } from "vuex";
export default {
  name: "MyNav",
  data() {
    return {
      // 展示购物车内容
      showCar: false,
    };
  },
  // components: {
  //   Car,
  // },
  computed: {
    ...mapState(["navFixed"]),
  },
  methods: {
    fn() {},
    enterHandle() {
      this.showCar = true;
    },
    leaveHandle(ev) {
      console.log(ev.target)
      if (ev.target.nodeName === "A") {
        if (ev.clientY <= 120) {
          this.showCar = false;
        }
      } else {
        this.showCar = false;
      }
    },
  },
  created() {},
};
</script>

<style scoped lang="less">
.MyNav {
  height: 6rem;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  &.fixed {
    width: 100%;
    z-index: 111111111111111111111111100;
    position: fixed;
    top: 0;
  }
  > div {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    .link {
      padding: 0 2rem;
      height: 100%;
      line-height: 6rem;
      font-size: 1.6rem;
      &:hover {
        color: blue;
      }
      &.user {
        position: absolute;
        right: 7rem;
        top: 0;
        .userIcon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &.car {
        position: absolute;
        right: 0;
        top: 0;
        .badge {
          display: block;
          margin-top: -1.2rem;
          font-size: 2.4rem;
          margin-right: 1rem;
        }
        .item {
          margin-right: -2rem;
          margin-top: 1.6rem;
        }
      }
    }
  }
}
</style>
