<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="red" class="detailSwiper">
      <van-swipe-item v-for="item in banner" :key="item.index">
        <img :src="item" alt=""/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'DetailSwiper',
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
img{
   width: 100%;
}
.detailSwiper {
  height: 350px;
  overflow: hidden;
}
</style>