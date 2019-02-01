<template>
    <div class="movieList">
      <div>
        <router-link :to="{path: '/movieDetail', query: {id: id}}" class="goods-list-link">
          {{movieName}}, {{movieTime}}
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'MoviesList',
    props: ['id', 'movieName', 'movieTime']
  }
</script>

<style scoped lang="less">
  .movieList {
    padding: 5px;
    border-bottom: 1px dashed #ababab;
  }
</style>
