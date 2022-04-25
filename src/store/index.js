import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 导出创建的store对象
export default new Vuex.Store({
  state: {
    cartList:[]
  },
  getters: {
    cartLength(state){
      return state.cartList.length
    },
    cartList(state){
      return state.cartList
    }
  },
  // mutations唯一的目的就是修改state中的状态
  mutations: {
    // 方便调试和跟踪  真正拿到数据
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      payload.checked = false
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload){
      // 如果vuex想让外界知道操作，必须用promise
      return new Promise((resolve,reject) =>{
        // payload新添加的商品
        // state.cartList.push(payload)
        // 查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        // 判断oldProduct
        if(oldProduct){
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量+1')
        } else{
        payload.count = 1
        context.commit('addToCart',payload)
        resolve('添加购物车成功')
        }
      })
    }
  },
  modules: {
  }
})
