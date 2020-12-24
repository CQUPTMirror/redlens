<template>
  <div class="bar-wrapper">
    <a class="btn" @click="listUpdate(1)">镜像源列表</a>
    <a class="btn" @click="listUpdate(2)">反向代理列表</a>
    <a class="btn" href="docs/">使用帮助</a>
  </div>
</template>

<script>
export default {
  name: "Bar",
  methods: {
    listUpdate(choice) { 
      this.$bus.trigger("list-update-msg", choice)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/theme/normal.styl';
.bar-wrapper 
  .btn 
    font-size 16px
    margin 0 5px
  a
    text-decoration none
    cursor pointer
    &:hover
      transition all .2s
      color $accent

</style>