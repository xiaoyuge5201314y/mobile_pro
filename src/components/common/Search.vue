<template>
  <div class="Search">
    <div class="w">
      <div class="logo"></div>
      <div class="searchWrap">
        <el-input class="input"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped lang="less">
.Search {
  width: 100%;
  height: 9rem;
  background-color: #fff;
  .w {
    position: relative;
    height: 100%;
    .logo {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20rem;
      height: 100%;
      background-image: url("~@/assets/image/logo.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .searchWrap {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .input{
          margin-right: 1rem;
          width:39rem;
      }
    }
  }
}
</style>
