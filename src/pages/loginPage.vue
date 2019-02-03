<template>
  <center-container
    title="登录系统">
    <template slot="bg-img">
      <div class="img-wrapper">
        <img src="../assets/images/login.jpg" alt="1">
      </div>
    </template>
    <template slot="form">
      <Form ref="formValidate"
            :model="loginInfo"
            :rules="ruleValidate"
            :label-width="80">
        <FormItem label="用户名" prop="username">
          <Input v-model="loginInfo.username" placeholder="Enter your username"/>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="loginInfo.password" placeholder="Enter your password"/>
        </FormItem>
        <FormItem>
          <Button type="success" @click="handleSubmit('formValidate')" long>登录</Button>
        </FormItem>
        <FormItem>
          <router-link to="/registerPage">
            <Button type="primary" style="width: 49%;">注册</Button>
          </router-link>
          <router-link to="/findPassword">
            <Button style="width: 49%;">忘记密码</Button>
          </router-link>
        </FormItem>
      </Form>
    </template>
  </center-container>
</template>

<script>
  import * as API from '../api'
  import {mapMutations} from 'vuex'
  export default {
    name: 'loginPage',
    data () {
      return {
        loginInfo: {
          username: '',
          password: ''
        },
        ruleValidate: {
          username: [
            { required: true, message: 'The username cannot be empty', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'The password be empty', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let params = Object.assign({}, this.loginInfo)
            API.login(params).then(res => {
              if (res && res.status === 0) {
                let data = res.data
                this.$cookie.set('token', data.token, { expires: `${data.expire || 120}s` })
                this.setUser(data)
                localStorage.setItem('user_id', data.user._id)
                localStorage.setItem('username', data.user.username)
                this.$router.replace({ name: 'home' })
                this.$Message.success(res.message)
              } else {
                this.$Message.error(res.message)
              }
            })
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      ...mapMutations({
        setUser: 'setUser'
      })
    }
  }
</script>
<style lang="less" scoped>
  .ivu-form-item > :first-child {
    color: #fff;
  }
</style>
