<template>
  <div>
    <!-- 头部城市选择组件 -->
    <city-header></city-header>
    <!-- 城市搜索组件 -->
    <city-search></city-search>
    <!-- 热门城市信息 -->
    <city-list :hotCities="hotCities" :cities="cities" ></city-list>、
    <!-- 城市列表选项 -->
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>
<script>
// 引入头部城市选择组件
import CityHeader from "./components/Header.vue";
// 引用城市搜索组件
import CitySearch from "./components/Search.vue";
// 引用热门城市信息组件
import CityList from "./components/List.vue";
// 引用城市列表选项
import CityAlphabet from "./components/Alphabet.vue";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      hotCities: [],
      cities: {},
    };
  },
  methods: {
    getHomeInfo() {
      // 发送axios 请求数据
      this.$axios.get("/api/city.json").then(this.getHomeInfoSucc);
    },
    // ajax 获取到的数据
    getHomeInfoSucc(res) {
      // 拿到ajax获取到的数据
      res = res.data;
      if (res.ret && res.data) {
        // 获取到的城市信息数据
        const data = res.data;
        //城市位置信息数据
        this.hotCities = data.hotCities;
        // 城市列表选项数据
        this.cities = data.cities;
      }
      console.log(res);
    },
  },
  // 生命周期钩子挂载在实例上
  mounted() {
    this.getHomeInfo();
  },
};
</script>

<style lang="stylus" scoped></style>