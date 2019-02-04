<template>
    <div>
      <div>
        <movie-index-header/>
      </div>
      <div>
        <user-message/>
      </div>
      <div>
        <div>用户名:{{user.username}}</div>
        <div>用户邮箱：{{user.userMail}}</div>
        <div>用户电话：{{user.userPhone}}</div>
        <div>用户状态：{{user.userStop}}</div>
        <div><Button @click="updatePassword">修改密码</Button></div>
      </div>
      <div v-show="updatePasswordShow">
        <Form ref="formValidate"
              :model="formData"
              :rules="ruleValidate"
              :label-width="100">
          <FormItem label="输入旧密码" prop="password">
            <Input v-model="formData.password" placeholder="Enter your password"/>
          </FormItem>
          <FormItem label="输入新密码" prop="repassword">
            <Input v-model="formData.repassword" placeholder="Enter your repassword"/>
          </FormItem>
          <FormItem label="确认新密码" prop="repassword2">
            <Input v-model="formData.repassword2" placeholder="Enter your repassword"/>
          </FormItem>
          <FormItem>
            <Button type="success" @click="handleSubmit('formValidate')">确认修改</Button>
          </FormItem>
        </Form>
      </div>
      <div>
        <router-link to="/sendEmail">发送站内信</router-link>
      </div>
      <div>
        <common-footer/>
      </div>
    </div>
</template>

<script>
  import * as API from '../api'
  export default {
    name: 'userInfo',
    data () {
      const validateRepassword2 = (rule, value, callback) => {
        if (value !== this.formData.repassword) {
          callback(new Error('The two passwords you entered did not match.'))
        }
        callback()
      }
      return {
        user: {},
        updatePasswordShow: false,
        formData: {
          password: '',
          repassword: '',
          repassword2: ''
        },
        ruleValidate: {
          password: [
            { required: true, message: 'The username cannot be empty', trigger: 'blur' }
          ],
          repassword: [
            { required: true, message: 'The password be empty', trigger: 'blur' }
          ],
          repassword2: [
            { validator: validateRepassword2, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      updatePassword () {
        this.updatePasswordShow = !this.updatePasswordShow
      },
      getUser () {
        let userId = this.$route.query.id
        API.getUserById({user_id: userId}).then(res => {
          if (res.status === 0) {
            this.user = res.data
          } else {
            console.log('用户详情出错')
          }
        })
      }
    },
    created () {
      this.getUser()
    }
  }
</script>

<style scoped>

</style>
