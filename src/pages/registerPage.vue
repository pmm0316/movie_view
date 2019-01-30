<template>
  <div class="container">
    <Form ref="formValidate"
          :model="registerInfo"
          class="register-wrapper"
          :rules="ruleValidate"
          :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="registerInfo.username" placeholder="Enter your username"/>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="registerInfo.password" placeholder="Enter your password"/>
      </FormItem>
      <FormItem label="重复密码" prop="repassword">
        <Input v-model="registerInfo.repassword" placeholder="Enter your repassword"/>
      </FormItem>
      <FormItem label="邮箱" prop="userMail">
        <Input v-model="registerInfo.userMail" placeholder="Enter your mail"/>
      </FormItem>
      <FormItem label="手机" prop="userPhone">
        <Input v-model="registerInfo.userPhone" placeholder="Enter your phone"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleRegister('formValidate')">注册</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import * as API from '../api'
  export default {
    name: 'registerPage',
    data () {
      return {
        registerInfo: {
          username: '',
          password: '',
          repassword: '',
          userMail: '',
          userPhone: ''
        },
        ruleValidate: {
          username: [
            { required: true, message: 'The username cannot be empty', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'The password be empty', trigger: 'blur' }
          ],
          repassword: [
            { required: true, message: 'The repassword cannot be empty', trigger: 'blur' }
          ],
          userMail: [
            { required: true, message: 'The userMail cannot be empty', trigger: 'blur' }
          ],
          userPhone: [
            { required: true, message: 'The userPhone cannot be empty', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleRegister (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let params = Object.assign({}, this.registerInfo)
            API.register(params).then(res => {
              if (res && res.status === 0) {
                console.log(res)
                this.$router.push({name: 'LoginPage'})
                this.$Message.success(res.message)
              } else {
                this.$Message.error(res.message)
              }
            })
          } else {
            this.$Message.error('Fail!')
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    height: calc(100vh);
    justify-content: center;
    align-items: center;
    .register-wrapper {
      width: 350px;
      height: 400px;
    }
  }
</style>
