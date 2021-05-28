<template>
    <div>
        <!-- 头部组件 -->
       <home-header :city="city"></home-header>
       <!-- 轮播图组件 -->
       <home-swiper :list="swiperList"></home-swiper>
       <!-- 图标轮播组件 -->
       <home-icons :list="iconsList"></home-icons>
       <!-- 热销组件 -->
       <home-recommend :list="recommendList"></home-recommend>
       <!-- 周末去哪儿组件 -->
       <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
// 引入头部组件
import HomeHeader from "./components/Header.vue"
// 引入轮播图组件
import HomeSwiper from "./components/Swiper.vue"
// 引入图标轮播组件
import HomeIcons from "./components/Icons.vue"
// 引入热销组件
import HomeRecommend from "./components/Recommend.vue"
// 引入周末去哪儿组件
import HomeWeekend from "./components/Weekend.vue"
export default {
    neme:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    },
    data (){
        return {
            city:"",
            swiperList:[],
            iconsList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            // 发送 axsoi 请求数据
            this.$axios.get('/api/index.json')
               .then(this.getHomeInfoSucc)
        },
        // ajax获取到的数据
        getHomeInfoSucc(res){
            // 拿到ajax获取到的数据内容
            res = res.data
            if(res.ret&&res.data){
                const data = res.data
                // 城市名称数据
                this.city = data.city
                // 轮播图图片的数据
                this.swiperList = data.swiperList,
                // 小图标的数据
                this.iconsList = data.iconsList,
                // 热销组件的数据
                this.recommendList= data.recommendList,
                // 周末去哪儿组件的数据
                this.weekendList = data.weekendList
            }
            console.log(res)
        }
    },
    // 生命周期mounted 挂载完成之前的钩子
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style>
.home{
    font-size: 30px;
}

</style>