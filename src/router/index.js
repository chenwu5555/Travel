import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入首页组件
import Home from "@/pages/home/Home.vue"
// 引入城市信息页面组件
import City from "@/pages/city/City.vue"
// 引入详情信息页面
import Details from "@/pages/details/Details.vue" 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/city",
    name:"City",
    component:City,
  },
  {
    path:"/details/:id",
    name:"Details",
    component:Details,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
