<template>
  <div class="container">
    <slot name="bg-img"/>
    <div class="form-wrapper" :class="formPosition">
      <div class="title" :style="{color: titleColor}">{{title}}</div>
      <slot name="form"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CenterContainer',
    props: {
      title: {
        default: ''
      },
      formPosition: {
        default: 'center',
        type: String
      },
      titleColor: {
        default: '#fff',
        type: String
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">
  .container {
    .img-wrapper {
      position: absolute;
      overflow: hidden;
      z-index: 0;
      left: 0;
      top: 0;
      height: calc(100vh);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .form-wrapper {
      position: absolute;
      width: 350px;
      height: 400px;
      color: #fff;
      top: 55%;
      transform: translate(-50%, -50%);
      text-align: center;
      .title {
        width: 200px;
        margin: 10px auto;
        font-size: 25px;
        padding-left: 55px;
      }
    }
    .center {
      left: 50%;
    }
    .left {
      left: 25%;
    }
    .right {
      left: 80%;
    }
  }
</style>
