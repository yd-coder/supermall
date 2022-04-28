<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white" class="home-swiper">
      <van-swipe-item v-for="item in banner" :key="item.index">
        <img v-lazy="item.image" alt=""/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props:{
    banner:Array
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
.home-swiper {
  height: 180px;
}
img{
  height: 100%;
  width: 100%;
}
 
</style>