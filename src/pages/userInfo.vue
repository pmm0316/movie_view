<template>
    <div>
      <div>
        <movie-index-header/>
      </div>
      <div>
        <user-message/>
      </div>
      <div>
        <div>用户名:用户</div>
        <div>用户邮箱：邮箱</div>
        <div>用户电话：电话</div>
        <div>用户状态：用户状态(封停与否)</div>
        <div><Button @click="updatePassword">修改密码</Button></div>
      </div>
      <div>

      </div>
      <div>
        <common-footer/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'userInfo',
    methods: {
      updatePassword () {
      }
    }
  }
</script>

<style scoped>

</style>
