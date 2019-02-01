<template>
  <Carousel v-model="picValue" loop>
    <CarouselItem v-for="item of list" :key="item._id">
      <div class="demo-carousel">
        <img :src="item.recommendSrc" :alt="item.recommendTitle"/>
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name: 'IndexHeaderPic',
    props: {
      list: {
        type: Array
      }
    },
    data () {
      return {
        picValue: 0
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-carousel {
    // background-color: #42b983;
    background-color: #fff;
    img {
      height: 300px;
    }
  }
</style>
