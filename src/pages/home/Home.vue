<template>
    <div>
       <home-header :city="city"></home-header>
       <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconsList"></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "./components/Header.vue"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcons from "./components/Icons.vue"
import HomeRecommend from "./components/Recommend.vue"
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
            this.$axios.get('/api/index.json')
               .then(this.getHomeInfoSucc)
        },
        // ajax获取到的数据
        getHomeInfoSucc(res){
            // 拿到ajax获取到的数据内容
            res = res.data
            if(res.ret&&res.data){
                const data = res.data
                this.city = data.city
                this.swiperList = data.swiperList,
                this.iconsList = data.iconsList,
                this.recommendList= data.recommendList,
                this.weekendList = data.weekendList
            }
            console.log(res)
        }
    },
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