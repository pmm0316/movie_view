<template>
    <div class="container">
      <div class="center-wrapper">
        <slot/>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'CenterContainer'
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    height: calc(100vh);
    justify-content: center;
    align-items: center;
    .center-wrapper {
      width: 350px;
      height: 400px;
    }
  }
</style>
