<template>
  <div>
    <div class="banner" @click="handelShow">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        alt="详情图片介绍"
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60a;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary 
      :imgs="imgs"
      v-show="imgShow"
      @close="close"
    ></common-gallary>
  </div>
</template>

<script>
// 引用公用组件Gallary
import CommonGallary from "../../../common/gallary/Gallary.vue"
export default {
    name:"DetailsBanner",
    data () {
        return {
            imgs:[
             " http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
            ],
            imgShow:false
        }
    },
    components:{
        CommonGallary
    },
    methods:{
      // 图片显示
      handelShow(){
        this.imgShow=!this.imgShow
      },
      // 接收Gallary组件自定义事件传过来的
      close(){
        this.imgShow = !this.imgShow
      }
    }
}
</script>

<style lang="stylus">
.banner {
  position: relative;
  // 防抖动
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0, 0.8), #000);

    .banner-title {
      flex: 1;
      padding: 0 0.2rem;
      font-size: 0.32rem;
    }

    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>