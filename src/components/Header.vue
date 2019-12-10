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

<style scoped>
h2 {
  margin: 0;
    font-weight: bold;
}

.header-wrapper {
  height: 60px;
  box-shadow: violet;
}

.logo {
  height: 100%;
  display: flex;
  align-items: flex-end;

  justify-content: center;
}

.header-logo-pic {
  height: 100%;
  margin-right: 10px;
}
</style>