<template>
<div class="icons" >
    <!-- 每一个图标 -->
    <swiper :options="swiperOptions">
        <!-- slides -->
        <!-- 第一层循环页码 -->
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <!-- 第二层循环图片 -->
            <div 
                class="icon" 
                v-for="item of page" 
                :key="item.id"
            >
                <!-- 图片 -->
                <div class="icon-img">
                    <img class="icon-imgcontent" :src="item.imgUrl" alt="图片不见了">
                </div>
                <!-- 说明文字 -->
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
    </swiper>
</div>

</template>

<script>

export default ({
    name:"HomeIcons",
    props:{
        list:Array
    },
    data(){
        return {
            swiperOptions:{
                // 禁止自动轮播滚动
                autoplay:false
            }
        }
    },
    // data() {
    //     return {
    //         // 图片数据列表
    //         iconsList:[
    //             {
    //                 id:"001",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
    //                 desc:"景点门票"
    //             },
    //             {
    //                 id:"002",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
    //                 desc:"一日游"
    //             },
    //             {
    //                 id:"003",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
    //                 desc:"长沙必游张家界橘子洲"
    //             },
    //             {
    //                 id:"004",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
    //                 desc:"亲子游"
    //             },
    //             {
    //                 id:"005",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
    //                 desc:"游乐场"
    //             },
    //             {
    //                 id:"006",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
    //                 desc:"动植物园"
    //             },
    //             {
    //                 id:"007",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
    //                 desc:"自然风光"
    //             },
    //             {
    //                 id:"008",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
    //                 desc:"湘西凤凰"
    //             },
    //             {
    //                 id:"009",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
    //                 desc:"橘子洲"
    //             },
    //              {
    //                 id:"010",
    //                 imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
    //                 desc:"泡温泉"
    //             },


    //         ]
    //     }
    // },
    // 计算属性
    computed:{
        pages (){
            // 先定义一个分页数组
            const pages = []
            this.list.forEach((item,index)=>{
                // 计算得出页码（利用向下取整）
                const page = Math.floor(index/8)
                // 判断二维数组里面的小数组是否为空，没有则让小数组为空
                if(!pages[page]){
                    pages[page] = []
                }
                // 将iconList里面的每一项push到page小数组里面去
                pages[page].push(item)
            })
            return  pages;//将数组返回出去
        }
    } 
})


</script>

<style scoped lang="stylus">
@import "../../../assets/styles/varibles.styl"
@import "../../../assets/styles/mixin.styl"
.icons
    overflow hidden
    height:0px
    padding-bottom:50%
    // background:red
    .icon 
        position relative
        overflow:hidden
        float left
        width:25%
        height:0
        padding-bottom:25%
        // background:blue
    .icon-img
        position absolute
        top:0
        left 0
        bottom .44rem
        right 0
        padding:.1rem
        // background:green
        box-sizing:border-box
        .icon-imgcontent
            display block
            margin:0 auto
            height:100%
    .icon-desc
        position absolute       
        left 0
        bottom 0
        right 0
        height .44rem
        line-height .44rem
        text-align center
        color:$darkTextColor
        ellipsis()
</style>
