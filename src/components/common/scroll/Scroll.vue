<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
      <div class="pullup-tips" v-if="pullUpLoad">
          <div v-if="!pullUpLoad" class="before-trigger">
            <span class="pullup-txt">下拉刷新更多</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">正在努力加载中...</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad: {
        type:Boolean,
        default:false
      }
  },

  data() {
    return {
      scroll: null,
    };
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      mouseWheel: true,    // 开启鼠标滚轮
      disableTouch: false, // 启用手指触摸
      observeDOM: true,
      observeImage:true,
      pullUpLoad: this.pullUpLoad,
      // pullDownRefresh: true,
      click: true,
      probeType:this.probeType, // 监听滚动的类型
    })

    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },

  methods: {
    
  },
}
</script>

<style scoped>
.pullup-tips{
    padding: 20px;
    text-align: center;
    color: #999;
}
</style>