<template>
  <div>
    <div class="header">城市选择</div>
    <!-- "/"回到了当前项目根目录页面 -->
    <router-link to="/">
    <!-- class="iconfont" 引用了全局样式箭头图标 -->
      <div class="iconfont header-back">&#xe604;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header {
  position: relative;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
}

.header-back {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.64rem;
  line-height: 0.86rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>