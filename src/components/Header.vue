<template>
  <div class="header-wrapper">
    <div class="logo">
      <img class="header-logo-pic" alt="Vue logo" src="../assets/oss-logo.svg" />
      <div class="header-logo-text">
        <h2>重庆邮电大学开源镜像站</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="stylus" scoped>
.header-wrapper {
  box-shadow: violet;

  .logo {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media (max-width: 375px) {
      flex-wrap: wrap;
    }

    .header-logo-pic {
      height: 60px;
      margin-right: 10px;

      @media (max-width: 375px) {
        margin-right: 0;
      }
    }

    h2 {
      margin: 10px 0 0 0;
      font-weight: bold;
    }
  }
}
</style>