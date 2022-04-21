<template>
  <div id="detail">
    <nav-bar class="detail-nav">
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div> 
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index === currentIndex}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
    <scroll class="content">
      <detail-swiper :banner="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import DetailSwiper from '@/components/common/swiper/DetailSwiper'
import Scroll from '@/components/common/scroll/Scroll'

import DetailBaseInfo from '@/components/content/detailBaseInfo/DetailBaseInfo';
import DetailShopInfo from '@/components/content/detailShopInfo/DetailShopInfo';

import {getDetail,Goods,Shop,GoodsParam} from '@/network/detail'

export default {
  name: 'Detail',
  components:{NavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,Scroll},
  data() {
    return {
      iid: null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex:0,
      topImages:[],
      goods:{},
      shop:{}
    };
  },

  created() {
   
  },

  activated(){
    this.iid = this.$route.params.iid  // 防止该路由页面在keep-alive里不销毁页面只创建一次只，放created()的话只能拿到一次id
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services) // 创建商品信息对象
      this.shop = new Shop(data.shopInfo) // 创建店铺信息对象
    })
  },

  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 12px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>