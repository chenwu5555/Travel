import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入fastclick 解决移动端click事件300毫秒延时问题
import fastClick from "fastclick"
// 引用轮播图插件 VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 引入store文件 里面是vuex插件
import store from './store'

// 引入清除默认样式的css文件  reset.css
import "./assets/styles/reset.css"
// 解决1像素边框的问题
import "./assets/styles/border.css"
// 引入iconfont-css图标样式
import "./assets/styles/iconfont.css"
// import style
import "swiper/css/swiper.css"
// 原型链上引入axios 
import axios from"axios"

Vue.config.productionTip = false

// 挂载在vue实例化对象上
Vue.prototype.$axios = axios

// 移动端点击延迟处理
fastClick.attach(document.body)

//注册vue-awesome-swiper插件 使用轮播图swiper插件
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由就是根据网址的不同，返回不同的内容给客户
