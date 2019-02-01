`<template>
    <div>
      <label>评论</label>
      <hr/>
      <div>
        <li>
          xxx 评论xxx
        </li>
      </div>
      <div>
        <input type="textarea"/>
      </div>
      <div>
        <Button type="success" @click="sendComment">评论</Button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: ['items'],
    methods: {
      sendComment () {}
    }
  }
</script>

<style scoped>

</style>
