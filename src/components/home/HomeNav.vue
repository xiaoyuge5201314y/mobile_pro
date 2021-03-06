<template>
  <div class="HomeNav">
    <ul class="navList w clear-fix">
      <li><a first href="javascript:;">首页</a></li>
      <li><a href="javascript:;">话费</a></li>
      <li><a href="javascript:;">严选</a></li>
      <li><a href="javascript:;">海淘</a></li>
      <li><a href="javascript:;">加油</a></li>
      <li><a href="javascript:;">卡汇</a></li>
      <li><a href="javascript:;">生活超市</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
};
</script>

<style scoped lang="less">
.HomeNav {
  height: 3.6rem;
  background-color: #fff;
  border-bottom:1px solid #eee;
  
  .navList {
    padding-left: 21rem;
    li {
      position: relative;
      padding: 0 2rem;
      float: left;
      a {
        color: black;
        font-size: 1.6rem;
        line-height: 3.6rem;
        &[first] {
          color: red;
        }
        &:hover {
          text-decoration: underline;
        }
        &:not([first])::after {
          position: absolute;
          content: "";
          display: block;
          height: 1.5rem;
          width: 0.1rem;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          background-color: #ccc;
        }
      }
    }
  }
}
</style>
