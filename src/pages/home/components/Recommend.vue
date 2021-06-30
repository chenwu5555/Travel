<template>
<div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <router-link tag="li" :to="'/details/'+ item.id"
            class="item border-bottom"
            v-for="item in list"
            :key="item.id"
        >
                <img class="item-img"  :src="item.imgUrl" alt="">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>

        </router-link >
    </ul>
</div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        list:Array
    },
    // data (){
    //     return {
    //     recommendList:[{
    //     "id": "0001",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/p0/1505/57/579b6c97900745db.water.jpg_200x200_f09770c8.jpg",
    //     "title": "橘子洲",
    //     "desc": "橘子洲，浮卧于湖南长沙市区湘江之中，绵延十里，以盛产美橘而得名。"
    //   }, {
    //     "id": "0002",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/p0/201303/04/1ad9f7e93228c5f0c8d65eac.jpg_250x250_d4b28f97.jpg",
    //     "title": "爱晚亭",
    //     "desc": "爱晚亭的名声在外印证一句亘古不变的哲理：文字的千古流传远胜于物质的客观存在"
    //   }, {
    //     "id": "0003",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/p0/1408/18/af4e8d5427a982540ec265b0daab2971.jpg_250x250_2b221aa9.jpg",
    //     "title": "长沙摩天轮",
    //     "desc": "湖南省长沙市天心区芙蓉中路近贺龙体育广场"
    //   }, {
    //     "id": "0004",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/p0/201301/14/c6b64cc6ec60b39e93835fbb.jpg_250x250_2058b408.jpg",
    //     "title": "杜甫江阁",
    //     "desc": "湖南省长沙市湘江中路二段108号"
    //   }, {
    //     "id": "0005",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/p0/1412/36/0b5ddfc9e04db2b870a84986fa7444a0.water.jpg_250x250_8e923e7f.jpg",
    //     "title": "长沙世界之窗",
    //     "desc": "湖南省长沙市开福区三一大道485号(靠近湖南广电)"
    //   }],
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
// 引入省略文字
@import "../../../assets/styles/mixin.styl"
// 标题
.recommend-title
    margin-top:.2rem
    padding-left .2rem
    background:#ccc
    line-height:.8rem
    box-sizing:border-box
.item{
    overflow hidden
    display flex 
    height 1.9rem
}
// 图片
    .item-img{
        width 1.7rem
        height 1.7rem
        padding .1rem
    }
// 右侧内容
    .item-info{
       flex 1
//   技巧解决溢出问题
       min-width:0
       padding .1rem
    }
// 景区标题
        .item-title{
            line-height 0.54rem
            font-size .32rem
            ellipsis()
        }
// 景区内容
        .item-desc{
            line-height .4rem
            color #ccc
            ellipsis()
        }
// 查看详情
        .item-button{
            margin-top .1rem
            background:#ff9300
            padding 0.1rem
            border-radius:.06rem
        }
          
</style>