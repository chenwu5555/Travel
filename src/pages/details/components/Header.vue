<template>
    <div>
        <!-- 点击返回的按钮 -->
        <router-link 
          tag="div"
          to="/"
          class="header-abs" 
          v-show = "showAbs"
        >
            <div class="iconfont header-abs-icon">&#xe604;</div>
        </router-link>
        <div 
          class="header-fixed"
          v-show= "!showAbs"
          :style="opacityStyle"
        >
            <router-link to="/">
    <!-- class="iconfont" 引用了全局样式箭头图标 -->
                <div class="iconfont header-fixed-back">&#xe604;</div>
            </router-link>
              景点详情
        </div>
        <div class="box"></div>
    </div>
</template>

<script>
export default {
    name:"DetailsHeader",
    data () {
      return {
        showAbs:true,
        // 设置一个动态的style opacity的值
        opacityStyle:{
          opacity:0
        }
      }
    },
    methods:{
        // handelScroll() 获取到滚动条距离document顶部的距离高度
        handelScroll () {
            const top = document.documentElement.scrollTop
            if(top>60 ){
              // opacity的值永远在0-1之间
              let opacity = top/140
              // opacity的最大值1
              opacity = opacity > 1? 1:true
              this.opacityStyle ={
                opacity
              }
              this.showAbs = false
            }else{
              this.showAbs = true
            }
        }
    },
    // 在使用keep-alive标签中有效，每次进入都会执行钩子中的函数,加载缓存
    activated (){
        window.addEventListener("scroll",this.handelScroll)
    }
    
}
</script>
 
// stylus css预处理器  scoped 组件之间不相互污染
<style lang="stylus" scoped>
.header-abs
  position absolute
  top 0
  left 0.2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  background rgba(0,0,0,0.8)
  text-align center
  .header-abs-icon
    color #fff
    font-size .6rem
.header-fixed
  position fixed
  top 0
  left 0
  display flex
  flex 1
  justify-content:center
  width 100%
  height .8rem
  line-height .8rem
  background blue
  text-align center
  font-size .32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.8rem
    color #fff
    font-size .5rem
.box
  height 50rem
</style>