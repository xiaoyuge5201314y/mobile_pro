<template>
  <div class="MySec w">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GoodsCard from "@/components/common/GoodsCard.vue";
export default {
  name: "MySec",
  props: [ "title"],
  components: {
    GoodsCard,
  },
};
</script>

<style scoped lang="less">
.MySec {
  margin-top: 5rem;
  border: 1px solid #d8d8d8;
  border-radius: 0.5rem;
  background-color: #f3f3f3;
  .title {
    height: 6rem;
    width: 100%;
    text-indent: 2rem;
    border-bottom: 1px solid #d8d8d8;
    h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 6rem;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  
  }
}
</style>
