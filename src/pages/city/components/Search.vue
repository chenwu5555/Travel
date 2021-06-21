<template>
  <div class="wrapper">
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="请输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <!-- input 输入框下拉区块 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-buttom"
          v-for="item in list"
          :key="item.id"
          @click="handlecity(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-buttom" v-show="nokeyword">
          请输入选择的城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入移动端滚动插件 better-scroll
import BScroll from "better-scroll";
// 引入vuex中的方法
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  // 计算属性  看list列表里面有没有数据，没有则会出现提示
  computed: {
    nokeyword() {
      return !this.list.length;
    },
  },
  methods:{
    handlecity (city) {
      // 调用dispatch方法 定义一个change的方法，将city城市名称传递出去，传到actions中
      // this.$store.dispatch("changeCity",city)

      // 单一的数据时，可以不用actions来修改数据，直接用mutations
      // this.$store.commit("changeCity",city)

      this.changeCity(city)
      // 点击切换城市之后，路由跳转到项目首页Header
      this.$router.push("/")
    },
    ...mapMutations(["changeCity"])
  },
  // 监听输入框数据改变
  watch: {
    keyword() {
      if (this.timer) {
        // 数据节流
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
      }
      // 节流操作
      this.timer = setTimeout(() => {
        const result = [];
        // 先通过for in循环，遍历对象 i
        for (let i in this.cities) {
          // 再通过forEach 来得到里面需要得到的数据 item
          this.cities[i].forEach((item) => {
            // indexOf() 查找数据在数组中第一次出现的位置 如果没有 返回-1
            if (
              item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1
            ) {
              // push到result数组里面去
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
  // 生命周期挂载前mounted  来触发效果
  mounted() {
    this.scroll = new BScroll(".search");
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    padding: 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    box-sizing: border-box;
  }
}

.search-content {
  z-index: 1;
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;

  .search-item {
    background: #ccc;
    line-height: 0.6rem;
    color: #666;
  }
}
</style>