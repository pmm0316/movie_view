<template>
    <header class="header">
      <router-link to="/">
        <div class="header_menu">主页</div>
      </router-link>
      <router-link to="/movieList">
        <div class="header_menu">电影</div>
      </router-link>
    </header>
</template>

<script>
  export default {
    name: 'MovieIndexHeader'
  }
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    height: 60px;
    color: #000;
    background-color: #a5a5a5;
    border-bottom: 2px solid #000;
    .header_menu {
      padding-left: 60px;
      float: left;
      padding-top: 20px;
      color: #fff;
    }
  }
</style>
