<template>
       <!-- handelGallaryClick 点击隐藏图片 -->
    <div class="container" @click="handelGallaryClick">
        <div class="wrapper">
            <!-- 分页 -->
            <swiper :options="swiperOptions">
                <!-- 循环图片 -->
                <swiper-slide 
                  v-for="(item,index) in imgs"
                  :key="index"
                >
                    <img  class="gallary-img" :src="item" alt="图片不见了">
                </swiper-slide>
                <!-- <swiper-slide >
                    <img  class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" alt="图片不见了">
                </swiper-slide> -->
                <!-- 页码 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props:{
      imgs:{
         type:Array,
        // 默认返回数组
         default () {
             return []
         }
      }
  },
   data () {
       return {
           swiperOptions:{
            //    分页器
                pagination:{
                    el:'.swiper-pagination',
                    type: 'fraction',
                    // 版本不一样，用的swiper 5版本的 详情看api
                    formatFractionCurrent:(index)=>{
                        return index
                    },
                },  
                // observer 当swiper的样式发生了变化时，隐藏或者是显示时，或者修改swiper的子元素时，自动初始化swiper，默认为false，不开启
                    observeParents:true,
                    observer:true,
                    loop:true,
           },
        }
       },
    methods:{
        // handelGallaryClick 点击隐藏图片
        handelGallaryClick(){
            // 子传给父  传给Banner.vue
            this.$emit("close")
        }
    }
};
</script>
// scoped 该属性是的组件上的样式不会相互污染，如果一个项目中使用的style标签中全部加上了scoped，就相当于实现了css样式的模块化
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}
.container 
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper 
    width 100%
    height 0
    padding-bottom 100%
    .gallary-img
      width 100%
      height 7.5rem
   .swiper-pagination
     z-index :100
     bottom -0.6rem
     color #fff
</style>