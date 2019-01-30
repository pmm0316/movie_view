<template>
    <footer class="footer">
      <p>footer</p>
    </footer>
</template>

<script>
  export default {
    name: 'CommonFooter'
  }
</script>

<style scoped lang="less">
  .footer {
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #000;
    p {
      font-size: 10px;
      color: #fff;
      text-align: center;
    }
  }
</style>
