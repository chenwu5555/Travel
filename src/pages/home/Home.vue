<template>
    <div>
        <!-- 头部组件 -->
       <home-header></home-header>
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

// 引入vuex的方法
import { mapState } from "vuex";
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
            // city:"",
            swiperList:[],
            iconsList:[],
            recommendList:[],
            weekendList:[],
            // 定义一个缓存上一个城市的变量
            lastCity:""
        }
    },
    computed:{
        // 扩展运算符
        // 把vuex里面的数据映射到组件的computed计算属性里面去
        ...mapState(["city"])
    }
    ,
    methods:{
        getHomeInfo(){
            // 发送 axsoi 请求数据
            console.log(this.city,"随便");
            this.$axios.get(`/api/index.json?city=${this.city}`)
               .then(this.getHomeInfoSucc)
        },
        // ajax获取到的数据
        getHomeInfoSucc(res){
            // 拿到ajax获取到的数据内容
            res = res.data
            if(res.ret&&res.data){
                const data = res.data
                // 城市名称数据
                // this.city = data.city
                console.log(this.city);
                console.log("yiasnofaofo");
                console.log(data);
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
        // 保存上一次城市的名称
        console.log(this.city);
        this.lastCity = this.city
        this.getHomeInfo()
    },
    // 新增的生命周期函数 需要在使用keep-alive缓存的组件时激活使用
    activated(){
        // 判断当前定位所在的城市，是否与之前操作的城市一致，如果不一致，则返回重新请求页面
        if (this.lastCity !== this.city) {
            // 继续保存城市名称
            this.lastCity = this.city
            console.log(this.city);
            this.getHomeInfo()
        }
    }
}
</script>

<style>
.home{
    font-size: 30px;
}

</style>