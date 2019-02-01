<template>
    <div class="header">
      <router-link to="/loginPage" v-if="!userId">
        <div class="header_menu">登录</div>
      </router-link>
      <div v-else class="header_menu logout">
        <span class="name">{{username}}</span>
        <router-link to="/loginPage">
          <div @click="logout">退出</div>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'UserMessage',
    data () {
      return {
        userId: null,
        username: null
      }
    },
    methods: {
      logout () {
        localStorage.setItem('user_id', '')
        localStorage.setItem('username', '')
        this.$cookie.set('token', '')
      }
    },
    created () {
      this.userId = localStorage.getItem('user_id')
      this.username = localStorage.getItem('username')
    }
  }
</script>

<style scoped lang="less">
  .header {
    width: 103%;
    height: 30px;
    left: 0;
    top: 0;
    color: #fff;
    background-color: #c3bd5c;
    .header_menu {
      padding-right: 60px;
      padding-top: 10px;
      float: right;
      color: #fff;
      font-size: 8px;
    }
    .logout {
      display: flex;
      .name {
        margin-right: 15px;
        line-height: 15px;
      }
    }
  }
</style>
