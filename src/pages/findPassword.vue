<template>
  <center-container>
    <Form ref="formValidate1"
          v-show="true"
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
          v-show="true"
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
  </center-container>
</template>

<script>
  export default {
    name: 'findPassword',
    data () {
      return {
        formData1: {
          username: '',
          userMail: '',
          userPhone: ''
        },
        formData2: {
          newPassword: ''
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
          newPassword: [
            { required: true, message: 'The newPassword be empty', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      findPassword () {

      }
    }
  }
</script>

<style scoped>

</style>
