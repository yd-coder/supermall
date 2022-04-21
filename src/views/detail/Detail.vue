<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div> 
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index === currentIndex}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
    <detail-swiper :banner="topImages"></detail-swiper>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import DetailSwiper from '@/components/common/swiper/DetailSwiper'
import {getDetail} from '@/network/detail'
export default {
  name: 'Detail',
  components:{NavBar,DetailSwiper},
  data() {
    return {
      iid: null,
      titles: ['商品','参数','评论','推荐'],
      currentIndex:0,
      topImages:[]
    };
  },

  created() {
   
  },

  activated(){
    this.iid = this.$route.params.iid  // 防止该路由页面在keep-alive里不销毁页面只创建一次只，放created()的话只能拿到一次id
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
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
</style>