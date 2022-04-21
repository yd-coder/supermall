<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props:{
    recommend:Array
  },
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
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 20px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
} 
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>