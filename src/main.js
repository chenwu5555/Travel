import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from "fastclick"
import store from './store'
import "./assets/styles/reset.css"
import "./assets/styles/border.css"

Vue.config.productionTip = false

// 移动端点击延迟处理
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由就是根据网址的不同，返回不同的内容给客户
