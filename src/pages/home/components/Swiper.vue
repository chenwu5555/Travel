<template>
  <div class="wrapper">
      <swiper 
        :options="swiperOptions" 
        v-if="showSwiper"
      >
      <swiper-slide 
        v-for="item of list" 
        :key="item.id" 
      >
        <img  class="swiper-img" :src="item.imgUrl" alt="图片不见了">
      </swiper-slide>
      <!-- <swiper-slide>
        <img  class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg" alt="图片不见了">
      </swiper-slide>
      <swiper-slide>
        <img  class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg" alt="图片不见了">
      </swiper-slide>
      <swiper-slide>
        <img  class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/3cdc880b14b7fc6f9c59e6f0f89b857d.jpg_750x200_f5a7ad47.jpg" alt="图片不见了">
      </swiper-slide>
      <swiper-slide>
        <img  class="swiper-img" src="https://imgs.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg" alt="图片不见了">
      </swiper-slide> -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    list:Array
  },
  data() {
    return {
      swiperOptions: {
        // 分页功能
       pagination:{
          el:'.swiper-pagination',
        },
        // 
         loop:true,
      },
      // swiperList:[
      //   {
      //     id:"0001",
      //     imgUrl:"https://imgs.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg",
      //   },
      //   {
      //     id:"0002",
      //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg"
      //   },
      //           {
      //     id:"0003",
      //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/9f73976e40c4ef845cabe0efc0269ebb.jpg_750x200_aab92b7a.jpg",
      //   },        {
      //     id:"0004",
      //     imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/3cdc880b14b7fc6f9c59e6f0f89b857d.jpg_750x200_f5a7ad47.jpg",
      //   },        {
      //     id:"0005",
      //     imgUrl:"https://imgs.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg",
      //   }
      // ]
    };
  },
  // 计算属性 设置空数组的时候，会显示第一张图
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
};
</script>

<style scoped lang="stylus">
  // 小圆点颜色样式改变  >>> 样式穿透
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff 
  // 圆点大小
.wrapper >>> .swiper-pagination-bullet-active
    width : 6px
    height :6px
// 图片盒子
.wrapper
  overflow :hidden
  width:100%
  height:0
  // 宽度是100%，高度相当于它的宽度，撑开了31.25%。
  padding-bottom:26.6%
  background:#eee

  .swiper-img
    width :100%

    
</style>