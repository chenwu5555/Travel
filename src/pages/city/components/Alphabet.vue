<template>
<!-- 字母表部分 -->
  <div class="alphabet">
    <div class="alphabet-item" 
        v-for="(item,index) in cities" 
        :key="item.index"
        >
            {{index}}
        </div>
  </div>
</template>

<script>
export default {
  neme: "Alphabet",
  props:["cities"],
};
</script>

<style lang="stylus" scoped>
// 引入自定义样式
@import '../../../assets/styles/varibles.styl';

.alphabet {
  display: flex;
  // 主轴改成纵轴
  flex-direction: column;
  // 分配主轴上空白空间，居中排列
  justify-content: center;
  position: absolute;
  top: 1.8rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  text-align: center;

  .alphabet-item {
    line-height: 0.44rem;
    color: $bgColor;
  }
}
</style>