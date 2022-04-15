<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <swiper :banner="banner"></swiper>
    <recommend :recommend="recommend"></recommend>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import Swiper from '@/components/common/swiper/Swiper.vue';
import Recommend from '@/components/common/recommend/recommend.vue'
import {getHomeMultidata} from '@/network/home';
export default {
  name: 'Home',
  components: { NavBar,Swiper,Recommend },  
  data() {
    return {
      banner:[],
      recommend:[]
    };
  },

  created(){
    getHomeMultidata().then(res=>{
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },

  methods: {
    
  },
};
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>