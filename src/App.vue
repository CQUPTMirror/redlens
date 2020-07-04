<template>
  <div id="app">
    <header id="header">
      <Header></Header>
    </header>
    <div class="main-wrapper">
      <MirrorList></MirrorList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MirrorList from "./components/MirrorList.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    MirrorList,
    Footer
  }
};
</script>

<style lang="stylus">
// @media (prefers-color-scheme: light)
@import 'assets/theme/normal.styl';
body
  background-color #f4f6f9
#app
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  background-color: $main-bg;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

body, h2, a
  color: $main-font;

#header
  width: 100%;
  padding: 36px 96px 24px 96px;

.main-wrapper
  padding: 24px 96px;

@media screen and (max-width: 1200px)
  .main-wrapper
    padding: 24px 24px;

  #header
    padding: 36px 24px 24px 24px;

@media (max-width: 768px)
  #header
    padding: 36px 24px 0px 24px;

@media (prefers-color-scheme: dark)
  body, h2, a
    color: $main-font-dark;

  #app
    background-color: $main-bg-dark;
</style>
