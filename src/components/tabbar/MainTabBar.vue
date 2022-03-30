<template>
  <div id="maintabbar">
    <tab-bar>
     <tabbaritem path="/home" activeColor="red">
       <img slot="slot-img" src="../../assets/img/tabbar/home.png">
       <img slot="slot-img-active" src="../../assets/img/tabbar/home-active.png">
       <div slot="slot-text">首页</div>
     </tabbaritem>
     <tabbaritem path="/category" activeColor="red">
       <img slot="slot-img" src="../../assets/img/tabbar/category.png">
       <img slot="slot-img-active" src="../../assets/img/tabbar/category-active.png">
       <div slot="slot-text">分类</div>
     </tabbaritem>
     <tabbaritem path="/shopcart" activeColor="red">
       <img slot="slot-img" src="../../assets/img/tabbar/shopcart.png">
       <img slot="slot-img-active" src="../../assets/img/tabbar/shopcart-active.png">
       <div slot="slot-text">购物车</div>
     </tabbaritem>
     <tabbaritem path="/profile" activeColor="red">
       <img slot="slot-img" src="../../assets/img/tabbar/profile.png">
       <img slot="slot-img-active" src="../../assets/img/tabbar/profile-active.png">
       <div slot="slot-text">我的</div>
     </tabbaritem>
   </tab-bar>
  </div>
</template>

<script>
import TabBar from './TabBar.vue';
import Tabbaritem from './TabBarItem.vue';
export default {
  components: { TabBar ,Tabbaritem},
  name: 'Maintabbar',

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

<style lang="scss" scoped>

</style>