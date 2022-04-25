<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <scroll class="content" ref="scroll"
      :pull-up-load="false"
      :probe-type="3">   
      <shop-cart-list></shop-cart-list>
    </scroll>
      
    <!-- 底部汇总 -->
    <shop-cart-bottom-bar class="bottombar"></shop-cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import Scroll from '../../components/common/scroll/Scroll';

import ShopCartList from '@/components/content/shopCartList/ShopCartList'
import ShopCartBottomBar from '@/components/content/shopCartBottomBar/ShopCartBottomBar'

import { mapGetters } from 'vuex'

  export default {
    name: "ShopCart",
    components: {
      NavBar,
      ShopCartList,
      Scroll,
      ShopCartBottomBar
    },
    activated () {
      this.$refs.scroll.scroll.refresh()
      
    },
    computed: {
      // cartLength(){
      //   return this.$store.getters.cartLength
      // }
      // 简便方法：此方式可以直接获取/映射到store里面的getters计算属性的方法
      ...mapGetters([
        'cartLength',
        'cartList'
      ])
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
    position: relative;
    background-color: #fff;
    overflow: hidden;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 9;
  }
  .content{
  position: absolute;
  height: calc(100vh - 120px);
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  }
 .bottombar {
   position: absolute;
   left: 0;
   right: 0;
   bottom: 44px;
 }
</style>
