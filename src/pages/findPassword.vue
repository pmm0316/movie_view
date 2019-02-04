<template>
  <!--<center-container>
    <Form ref="formValidate1"
          v-show="!showRePassword"
          :model="formData1"
          :rules="ruleValidate1"
          :label-width="100">
      <FormItem label="输入用户名" prop="username">
        <Input v-model="formData1.username" placeholder="Enter your password"/>
      </FormItem>
      <FormItem label="输入邮箱" prop="userMail">
        <Input v-model="formData1.userMail" placeholder="Enter your password"/>
      </FormItem>
      <FormItem label="输入手机" prop="userPhone">
        <Input v-model="formData1.userPhone" placeholder="Enter your password"/>
      </FormItem>
      <FormItem>
        <Button @click="findPassword('formValidate1')">找回密码</Button>
      </FormItem>
    </Form>
    <Form ref="formValidate2"
          v-show="showRePassword"
          :model="formData2"
          class="login-wrapper"
          :rules="ruleValidate2"
          :label-width="100">
      <FormItem label="输入新密码" prop="newPassword">
        <Input v-model="formData2.newPassword" placeholder="Enter your password"/>
      </FormItem>
      <FormItem>
        <Button @click="findPassword('formValidate2')">修改密码</Button>
      </FormItem>
    </Form>
  </center-container>-->
  <center-container
    title-color="#333"
    form-position="left"
    title="找回密码">
    <template slot="bg-img">
      <div class="img-wrapper">
        <img src="../assets/images/findPassword.jpg" alt="1">
      </div>
    </template>
    <template slot="form">
      <Form ref="formValidate1"
            v-show="!showRePassword"
            :model="formData1"
            :rules="ruleValidate1"
            :label-width="100">
        <FormItem label="输入用户名" prop="username">
          <Input v-model="formData1.username" placeholder="Enter your password"/>
        </FormItem>
        <FormItem label="输入邮箱" prop="userMail">
          <Input v-model="formData1.userMail" placeholder="Enter your password"/>
        </FormItem>
        <FormItem label="输入手机" prop="userPhone">
          <Input v-model="formData1.userPhone" placeholder="Enter your password"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="checkUser('formValidate1')" long>校验用户</Button>
        </FormItem>
      </Form>
      <Form ref="formValidate2"
            v-show="showRePassword"
            :model="formData2"
            class="login-wrapper"
            :rules="ruleValidate2"
            :label-width="100">
        <FormItem label="输入新密码" prop="repassword">
          <Input v-model="formData2.repassword" placeholder="Enter your password"/>
        </FormItem>
        <FormItem>
          <Button type="success" @click="updatePassword('formValidate2')" long>修改密码</Button>
        </FormItem>
      </Form>
    </template>
  </center-container>
</template>

<script>
  import * as API from '../api'
  export default {
    name: 'findPassword',
    data () {
      return {
        showRePassword: false,
        formData1: {
          username: '',
          userMail: '',
          userPhone: ''
        },
        formData2: {
          repassword: ''
        },
        ruleValidate1: {
          username: [
            { required: true, message: 'The username cannot be empty', trigger: 'blur' }
          ],
          userMail: [
            { required: true, message: 'The userMail be empty', trigger: 'blur' }
          ],
          userPhone: [
            { required: true, message: 'The userPhone be empty', trigger: 'blur' }
          ]
        },
        ruleValidate2: {
          repassword: [
            { required: true, message: 'The newPassword be empty', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      checkUser (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let params = Object.assign({}, this.formData1)
            API.findPasswrod(params).then(res => {
              if (res.status === 0) {
                this.showRePassword = true
              }
            })
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      // 修改密码
      updatePassword (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let params = Object.assign({}, this.formData1, this.formData2)
            API.findPasswrod(params).then(res => {
              if (res.status === 0) {
                this.$Message.success(res.message)
                this.$router.replace({name: 'LoginPage'})
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
  .ivu-form-item > :first-child {
    color: #333;
    font-weight: bold;
  }
</style>
