<template>
    <div class="container">
      <div>
        <movie-index-header/>
      </div>
      <div>
        <user-message/>
      </div>
      <!--用户的相关信息-->
      <label>收件箱</label>
      <div>
        <email-list/>
      </div>
      <label>发件箱</label>
      <div>
        <email-list/>
      </div>
      <send-talk-box/>
      <common-footer/>
    </div>
</template>

<script>
  import EmailList from "../components/EmailList"
  import SendTalkBox from "../components/SendTalkBox"
  export default {
    name: 'sendEmail',
    components: {SendTalkBox, EmailList}
  }
</script>

<style scoped>

</style>
