<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="loadMore" >
      <swiper :banner="banner"></swiper>
      <recommend :recommend="recommend"></recommend>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" @tabClick="tabClick" class="tab-control"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import Swiper from '@/components/common/swiper/Swiper';
import Recommend from '@/components/common/recommend/Recommend';
import FeatureView from '@/components/common/featureView/FeatureView';
import Scroll from '@/components/common/scroll/Scroll';

import TabControl from '@/components/content/tabControl/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import BackTop from '@/components/content/backTop/BackTop';

import {getHomeMultidata,getHomeGoods} from '@/network/home';
export default {
  name: 'Home',
  components: {NavBar, Swiper, Recommend, FeatureView, TabControl, GoodsList, Scroll, BackTop},  
  data() {
    return {
      banner:[],
      recommend:[],
      goods: {
        'pop' : {page: 0,list: []},
        'new' : {page: 0,list: []},
        'sell': {page: 0,list: []},
      },
      currentType: 'pop',
      isShowBackTop:false,
      saveY:0
    };
  },

  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },

  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    },

  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,100)
  },

  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },

  methods: {
    /**
     *  网络请求相关方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
         this.banner = res.data.banner.list
         this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
      })
    },

    /**
     *  事件监听相关方法
     */
    tabClick(index){
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore(){
      this.$refs.scroll.isPullUpLoad = true
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
      this.$refs.scroll.isPullUpLoad = false
    }
  }
};
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-control{
  /* position: sticky;
  top: 44px; */
  background-color: #fff;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>