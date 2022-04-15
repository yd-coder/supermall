<template>
  <div>
     <el-carousel trigger="click" height="180px">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item.image" alt=""/>
      </el-carousel-item>
    </el-carousel>
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

<style>
img{
  height: 100%;
  width: 100%;
}
 
</style>