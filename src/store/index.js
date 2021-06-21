// 创建store.js文件
import Vue from 'vue'
import Vuex from 'vuex'

// 引入state文件里面的数据
import state from "./state.js"

// 引入mutations里面的内容
import mutations from "./mutations.js"

Vue.use(Vuex)



export default new Vuex.Store({
  // state里面一般存放的是全局共用的一些数据
  state:state,
  // actions里面存放一下写异步的方法
  // actions: {
  //   // ctx 只是一个参数，是上下文的意思
  //   // city 传过来的数据
  //   changeCity (ctx, city) {
  //     ctx.commit("changeCity",city)
  //   }
  // },

  // 同步的一些数据的改变
  mutations:mutations

})
