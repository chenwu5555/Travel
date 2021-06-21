<template>
  <!-- ref有两种作用：1：可以帮助我们获取到dom元素    2：用到组件上 -->
  <!-- 使用better-scroll插件，需要放分散的div包裹起来，因为该插件只作用于wrap下面的子div有效 -->
  <div class="list" ref="wrapper">
    <div>
      <!-- 城市信息 -->
      <div class="area">
        <!-- 当前城市 -->
        <div class="title border-topbottom">当前城市</div>
        <div class="buttom-list">
          <div class="buttom-wrap">
            <div class="buttom">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <!-- 热门城市 -->
        <div class="title border-topbottom">热门城市</div>
        <div class="buttom-list">
          <div 
              class="buttom-wrap" 
              v-for="item of hotCities"
              :key="item.id"
          >
            <div 
                class="buttom"
                @click="handlecity(item.name)"
            >   {{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 城市列表 -->
      <!-- 第一次循环得到首字母 -->
      <div class="area"
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <!-- 第二次循环出城市列表 -->
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="inneritem of item"
            :key="inneritem.id"
             @click="handlecity(inneritem.name)"
          >
            {{ inneritem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入better-scroll移动端滚动插件
import BScroll from "better-scroll";
// 用vuex的方法
import { mapState,mapMutations } from "vuex";

export default {
  name: "CityList",
  props: {
    hotCities: Array,
    cities: Object,
    letter:String,
  },

  computed:{
    // 扩展运算符
    // 把vuex里面的数据映射到组件的computed计算属性里面去
    ...mapState({
      currentCity:"city"
    })
  },

  // 创建前可以用$nextTick()函数来延迟触发效果
  // created(){
  //   this.$nextTick(()=>{
  //     this.scroll = new BScroll(this.$refs.wrapper)
  //   })
  // }

  // 挂载前可以用mounted()  来触发效果
  mounted() {
     setTimeout(() => {
       this.scroll = new BScroll(".list")
     }, 100);
  },

  // vuex状态管理插件方法
  methods:{
    handlecity (city) {
      // this.$store.commit("changeCity",city)
      // 点击切换城市之后，路由跳转到项目首页Header
       this.$router.push("/")

       this.changeCity(city)
    },
    ...mapMutations(["changeCity"])
  },

  // 监听letter的变化
  watch: {
    letter () {
      if(this.letter){
        // 获取到一个被点击的字母变量
        const element = this.$refs[this.letter][0]
        // 得到的是一个数组，所以必须要是[0]，因为$refs要用到的必须是一个dom元素或者dom选择器
        // console.log(element)
        // BScroll滚动插件中的方法
        this.scroll.scrollToElement(element)
      }
      // console.log(this.letter)
    }
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
    line-height: 0.6rem;
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