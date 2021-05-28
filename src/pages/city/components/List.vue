<template>
<!-- ref有两种作用：1：可以帮助我们获取到dom元素    2：用到组件上 -->
  <div class="list" ref="wrapper">
    <div class="wrapper" >
      <!-- 地区创建 -->
      <div class="area">
        <!-- 标题 -->
        <div class="title border-topbottom">您的位置</div>
        <div class="buttom-list">
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttom-list">
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
          <div class="buttom-wrap">
            <div class="buttom">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll移动端滚动插件
import BScroll from "better-scroll"
export default {
  name: "CityList",

// 创建前可以用$nextTick()函数来延迟触发效果
  // created(){
  //   this.$nextTick(()=>{
  //     this.scroll = new BScroll(this.$refs.wrapper)
  //   })
  // }

  // 挂载前可以用mounted()  来触发效果
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper)
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

// 自定义添加标题横线样式
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

// 添加上横线样式
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

// 加上定位，来固定住页面
.list {
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  left: 0;

  .title {
    line-height: 0.44rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-style: 0.26rem;
  }

  .buttom-list {
    // 利用flex布局，横向换行
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .buttom-wrap {
      flot: left;
      width: 33.33%;

      .buttom {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        bordr-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>