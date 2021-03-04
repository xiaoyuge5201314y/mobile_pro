<template>
  <div ref="a" class="Home">
    <m-header></m-header>
    <search></search>
  </div>
</template>

<script>
import MHeader from "@/components/common/MHeader.vue";
import Search from "@/components/common/Search.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    MHeader,
    Search,
  },
};
</script>

<style scoped lang="less">
</style>
