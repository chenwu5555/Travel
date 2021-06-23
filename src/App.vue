<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- keep-alive来缓存组件，防止二次渲染，这样会大大的节省性能 -->
    <keep-alive exclude="Detail">
          <!-- 显示的是当前路由所对应的内容 -->
          <router-view/>
    </keep-alive>

  </div>
</template>

<style lang="stylus">
// #app
//   font-family Avenir, Helvetica, Arial, sans-serif
//   -webkit-font-smoothing antialiased
//   -moz-osx-font-smoothing grayscale
//   text-align center
//   color #2c3e50
//   margin-top 60px
</style>
