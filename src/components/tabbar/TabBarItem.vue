<template>
  <div id="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="slot-img"></slot></div>
    <div v-else><slot name="slot-img-active"></slot></div>
    <div :style="activeStyle"><slot name="slot-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',

  data() {
    return {

    }
  },

  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },

  props:{
    path:String ,
    activeColor: {
      type:String,
      default:'red'
    }
  },
  
  methods: {
    itemClick(){
      if (this.$route.path !== this.path){ 
        this.$router.replace(this.path)    //解决重复点击报错
        }
    }
  },
};
</script>

<style scoped>

#tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
#tabbar-item img{
  width: 23px;
  height: 23px;
  margin-top: 5px;
  vertical-align: middle;
}
</style>