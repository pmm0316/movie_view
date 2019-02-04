<template>
    <div class="header">
      <div v-if="!isLogin">
        <router-link to="/loginPage">
          <div class="header_menu">登录</div>
        </router-link>
      </div>
      <div v-else class="header_menu logout">
        <router-link :to="{path: '/userInfo', query: {id: userId}}">
          <div class="text">已登录：{{username}}</div>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'UserMessage',
    data () {
      return {
        isLogin: false,
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
      let token = this.$cookie.get('token')
      if (token) {
        this.isLogin = true
        this.userId = localStorage.getItem('user_id')
        this.username = localStorage.getItem('username')
      } else {
        console.log('登录失败')
      }
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
      .text {
        margin-right: 15px;
        line-height: 15px;
      }
    }
  }
</style>
