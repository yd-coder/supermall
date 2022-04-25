<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="showImage" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },

  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
};
</script>

<style scoped>
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodsItem img {
  width: 100%;
  border-radius: 5px;
}
.goodsInfo {
  font-size: 15px;
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 1px;
  width: 15px;
  height: 15px;
  background: url("@/assets/img/home/goods/collect.svg") 0 0/14px 14px;
}
</style>