<template>
  <div class="footer-wrapper">
    <div class="footer-main">
      <p>
        <span>本开源镜像源由</span>
        <a class="xxbnb" href="http://xxb.cqupt.edu.cn">重庆邮电大学信息与网络管理中心</a>
        <span>提供支持，由</span>
        <a href="https://hongyan.cqupt.edu.cn/aboutus">红岩网校工作站运维安全部/CQUPT-LUG</a>
        <span>维护。</span>
        <img class="logo" src="../assets/lug-logo.svg" alt="CQUPT-LUG" />
      </p>

      <span>联系我们：</span>
      <a href="https://github.com/CQUPTMirror/">
        <a-icon class="icon-i" type="github" width="100" />
        <span>Github</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<style lang="stylus" scoped>
.footer-wrapper {
  padding: 2em 96px;
  text-align: left;

  .footer-main {
    a {
      text-decoration: none;
      color: unset;

      .icon-i {
        vertical-align: bottom;
        font-size: 24px;
        margin-right 4px
      }
    }

    .xxbnb {
      font-weight: bold;
    }

    .logo {
      height: 48px;
      float: right;
      margin-left: 12px;
    }
  }

  @media screen and (max-width: 1200px) {
    & {
      padding: 2em 24px;
    }
  }
}
</style>