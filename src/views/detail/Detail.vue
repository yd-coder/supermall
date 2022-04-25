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
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :banner="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {Toast} from 'vant'

import {debounce} from '@/common/debounce.js'

import NavBar from '@/components/common/navbar/NavBar';
import DetailSwiper from '@/components/common/swiper/DetailSwiper'
import Scroll from '@/components/common/scroll/Scroll'

import DetailBaseInfo from '@/components/content/detailBaseInfo/DetailBaseInfo';
import DetailShopInfo from '@/components/content/detailShopInfo/DetailShopInfo';
import DetailGoodsInfo from '@/components/content/detailGoodsInfo/DetailGoodsInfo';
import DetailParamInfo from '@/components/content/detailParamInfo/DetailParamInfo';
import DetailCommentInfo from '@/components/content/detailCommentInfo/DetailCommentInfo';
import GoodsList from '@/components/content/goods/GoodsList';
import DetailBottomBar from '@/components/content/detailBottomBar/DetailBottomBar';
import BackTop from '@/components/content/backTop/BackTop';

import {getDetail,Goods,Shop,GoodsParam, getRecommend} from '@/network/detail'

export default {
  name: 'Detail',
  components:{NavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo, DetailParamInfo, DetailCommentInfo, GoodsList, DetailBottomBar, BackTop},
  data() {
    return {
      iid: null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex:0,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopY:[],
      getThemeTopY:null,
      isShowBackTop:false
    };
  },

  created() {
   
  },

  activated(){
    this.iid = this.$route.params.iid  // 防止该路由页面在keep-alive里不销毁页面只创建一次只，放created()的话只能拿到一次id
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services) // 创建商品信息对象
      this.shop = new Shop(data.shopInfo) // 创建店铺信息对象
      this.detailInfo = data.detailInfo //商品详情信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule) // 商品参数信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend().then(res=>{
      this.recommends = res.data.list
    })
    this.getThemeTopY = debounce(()=>{
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.param.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      },800)
  },

  methods: {
    //详情页tab栏点击
    titleClick(index){
      this.currentIndex = index
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopY[index],200)
    },
    //详情页返回点击
    backClick(){
      this.$router.back()
    },
    //返回顶部点击
    backTopClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    //详情页防抖图片加载传入子组件offset
    detailImageLoad(){
     this.getThemeTopY()
    },
    //详情页滚动事件
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
      const positionY = -position.y
      let length = this.themeTopY.length;
				for(let i = 0; i < length; i++){
					if((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) || (i === length - 1 && positionY >= this.themeTopY[i])){
						this.currentIndex = i;
					}
				}
    },
    // 购物车点击
    addToCart(){
      const product = {}
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;
            // 将商品加入购物车
            // this.$store.commit('addCart',product)
            // dispatch做个调用到vuex中  任务分发
            this.$store.dispatch('addCart',product).then(res =>{
                // this.show = true;
                // this.message = res;

                // setTimeout(() => {
                //     this.show = false;
                //     this.message = ''
                // },2000)
                // this.$toast.show(res,2000)
                // this.$toast(res);
                Toast.success(res);
            })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
}
.detail-nav {
  position: relative;
  z-index: 10;
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
  height: calc(100vh - 110px);
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>