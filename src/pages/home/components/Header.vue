<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe604;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe616;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe612;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// vuex的方法
import { mapState} from "vuex"

export default {
  neme: "HomeHeader",
  // props: {
  //   city: String,
  // },
 computed:{
  //  扩展运算符
  // 把vuex的数据映射到组件的computed计算属性里面去
    ...mapState(["city"])
 }
};
</script>

<style  lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding 0,.1rem
    float: right;
    text-align: center;
    color:#fff

    .arrow-icon {
      margin-left: -0.15rem;
      font-size: 0.4rem;
    }
  }
}
</style>