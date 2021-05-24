<template>
<div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
        <li 
            class="item"
            v-for="item in list"
            :key="item.id"
        >
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="图片不见了">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name:"HomeWeekend",
    props:{
        list:Array
    },
    // data(){
    //     return{
    //         weekendList: [{
    //     "id": "0001",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/source/1505/fb/302620ed8350f8.jpg_r_640x214_25a07cb4.jpg",
    //     "title": "长沙必打卡",
    //     "desc": "到了长沙，一定要到这些地方走走"
    //   }, {
    //     "id": "0002",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/source/1711/2b/d4ebbd8337f1ac.jpg_r_640x214_2d4332c1.jpg",
    //     "title": "湖南泡汤圣地",
    //     "desc": "山谷幽深，泉水潺潺，宜人的自然风光，怡人的田园景色，动人的神话传说，是一处难得的世外桃园"
    //   }, {
    //     "id": "0003",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/source/1811/88/8d3b492ebf0b16.jpg_r_640x214_7b3a281d.jpg",
    //     "title": "邂逅凤凰城",
    //     "desc": "凤凰古城一个古老而神秘的地方，风景秀丽，历史悠久，人杰地灵，名贤辈出，名胜古迹众多"
    //   }, {
    //     "id": "0004",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/source/1811/b4/71c01c98139cf.jpg_r_640x214_30bac495.jpg",
    //     "title": "亲身体验人间仙境",
    //     "desc": "天桥天地，绝壁高崖之间的高台，台下深不见底的山涧，天风朗朗，云气翻腾，仙境之感扑面而来"
    //   }, {
    //     "id": "0005",
    //     "imgUrl": "https://imgs.qunarzz.com/sight/source/1505/89/b2beff9f28b0db.jpg_r_640x214_94143396.jpg",
    //     "title": "玩味童年",
    //     "desc": "幸福之家，快乐成长"
    //   }]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
// weekend标题
.weekend-title{
    padding-left:.2rem
    line-height: .8rem;
    background:#ccc
    box-sizing:border-box
}
// 图片盒子
.item-img-wrapper{
   overflow:hidden
   height:0
   padding-bottom:36%
}
// 图片
   .item-img{
       width:100%
   }
// 文字介绍
   .item-title{
       line height 0.54rem
       font-size:.32rem
   }
   .item-desc{
       line-height .4rem
       color:#ccc
   }
</style>