<template>
    <div>
      <div>
        <movie-index-header/>
      </div>
      <div class="content-main">
        <div>
          <label>电影名称:{{movieDetail.movieName}}</label>
          <div class="viewNum">下载次数：{{movieDetail.movieNumDownload}}</div>
        </div>
        <comment/>
      </div>
      <div>
        <common-footer/>
      </div>
    </div>
</template>

<script>
  import * as API from '../api'
  export default {
    name: 'movieDetail',
    data () {
      return {
        movieDetail: {}
      }
    },
    created () {
      let id = this.$route.query.id
      let params = {movie_id: id}
      API.getMovieDetial(params).then(res => {
        this.movieDetail = res.data
      })
    }
  }
</script>

<style scoped>

</style>
