<template>
    <div class="container">
      <div>
        <movie-index-header/>
      </div>
      <div class="userMessage">
        <user-message/>
      </div>
      <div class="contentPic">
        <index-header-pic :list="recommendsList"/>
      </div>
      <div class="contentMain">
        <div>
          <div class="item content-left">
            <ul class="cont-ul">
              <movies-list/>
            </ul>
          </div>
          <div class="item content-right">
            <ul class="cont-ul">
              <news-list/>
            </ul>
          </div>
        </div>
        <common-footer/>
      </div>
    </div>
</template>

<script>
  import * as API from '../api'
  import UserMessage from '../components/UserMessage'
  import IndexHeaderPic from '../components/IndexHeaderPic'
  import MoviesList from '../components/MoviesList'
  import NewsList from '../components/NewsList'

  export default {
    name: 'index',
    components: {
      UserMessage,
      IndexHeaderPic,
      MoviesList,
      NewsList
    },
    data () {
      return {
        recommendsList: []
      }
    },
    created () {
      API.getRecommend().then(res => {
        this.recommendsList = res.data
      })
    }
  }
</script>

<style scoped lang="less">
  .container {
    padding: 0;
    margin: 0 auto;
    .contentPic {
      width: 900px;
      margin: 0 auto;
    }
    .contentMain {
      height: 50px;
      .item {
        margin-top: 5px;
        border-top: 1px solid #000;
        .cont-ul {
          padding-top: 0.5rem;
        }
      }
      .content-left {
        width: 60%;
        float: left;
      }
      .content-right {
        width: 38%;
        float: right;
      }
    }
  }
</style>
