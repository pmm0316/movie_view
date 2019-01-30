<template>
    <div class="movieList">
      <div>
        <router-link to="dianyingluyou" class="goods-list-link">
          电影名称
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'MoviesList'
  }
</script>

<style scoped lang="less">
  .movieList {
    padding: 5px;
    border-bottom: 1px dashed #ababab;
  }
</style>
