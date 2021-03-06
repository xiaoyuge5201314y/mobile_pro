<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
    <!-- <my-nav></my-nav> -->
  </div>
</template>
<script>
// import MyNav from "@/components/common/MyNav.vue";
export default {
  created() {
    addEventListener(
      "scroll",
      (ev) => {
        if (pageYOffset >= 120) {
          this.$store.dispatch("changeNavFixed", true);
        } else {
          this.$store.dispatch("changeNavFixed", false);
        }
      },
      false
    );
  },
  // components: { MyNav },
};
</script>
<style >
body {
  background-color: #f5f5f5;
}
</style>
