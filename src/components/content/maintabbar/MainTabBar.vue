<template>
  <div id="maintabbar">
    <tab-bar>
     <tab-bar-item path="/home" activeColor="red">
       <img slot="slot-img" src="~@/assets/img/tabbar/home.png">
       <img slot="slot-img-active" src="~@/assets/img/tabbar/home-active.png">
       <div slot="slot-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/category" activeColor="red">
       <img slot="slot-img" src="~@/assets/img/tabbar/category.png">
       <img slot="slot-img-active" src="~@/assets/img/tabbar/category-active.png">
       <div slot="slot-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/shopcart" activeColor="red">
       <img slot="slot-img" src="~@/assets/img/tabbar/shopcart.png">
       <img slot="slot-img-active" src="~@/assets/img/tabbar/shopcart-active.png">
       <div slot="slot-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile" activeColor="red">
       <img slot="slot-img" src="~@/assets/img/tabbar/profile.png">
       <img slot="slot-img-active" src="~@/assets/img/tabbar/profile-active.png">
       <div slot="slot-text">我的</div>
     </tab-bar-item>
   </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue';
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue';
export default {
  components: { TabBar ,TabBarItem},
  name: 'MainTabBar',

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

</style>