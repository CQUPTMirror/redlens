<template>
  <div class="bar-wrapper">
    <a class="btn" href="/">镜像源列表</a>
    <!-- <span class="btn">反向代理列表</span> -->
    <a class="btn" href="docs/">使用帮助</a>
  </div>
</template>

<script>
export default {
  name: "Bar"
};
</script>

<style lang="stylus" scoped>
.bar-wrapper .btn {
  font-size: 16px;
  margin: 0 5px;
}
</style>