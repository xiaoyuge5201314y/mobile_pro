<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
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
};
</script>
<style >
body {
  background-color: #f5f5f5;
}
</style>
