<template>
  <Carousel v-model="picValue" loop>
    <CarouselItem>
      <div class="demo-carousel">1</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">2</div>
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name: 'IndexHeaderPic',
    data () {
      return {
        picValue: 0
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-carousel {
    height: 300px;
    background-color: #42b983;
  }
</style>
