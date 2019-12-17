<template>

  <div v-html="md"></div>
</template>

<script>
export default {
  name: "MirrorHelp",
  data() {
    return { md: String };
  },
  mounted() {
    // this.$axios
    //   .get("http://mirrors.cqupt.edu.cn/static/howto/centos-mirror-howto.md")
    //   .then(resp => {
    //     this.md = resp.data;
    //   });
  }
};
</script>

<style>
</style>