<template>
  <div class="backTop">
    <img src="@/assets/img/backTop/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Backtop',

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
.backTop {
  position: fixed;
  bottom: 55px;
  right: 8px;
  z-index: 9;
}
.backTop img {
  width: 45px;
  height: 45px;
}
</style>