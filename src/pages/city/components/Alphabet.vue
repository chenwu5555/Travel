<template>
<!-- 字母表部分 -->
  <div class="alphabet">
    <div class="alphabet-item" 
        v-for="item in letters" 
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handerLetterClick"
        >
          {{item}}
        </div>
  </div>
</template>

<script>
export default {
  neme: "Alphabet",
  props:{
    cities:Object
  },
  // 设定一个起始值
  data () {
    return {
      touchStatus:false,
      timer:null
    }
  },
  // 计算属性  定义一个数组类型的数据
  computed:{
    letters () {
      const letters = []
      for (let i in this.cities){
        letters.push(i)
              // console.log(letters)
      }
      return letters

      // 返回一个["A"，"B","C",...]数组 letters
    }
  },

  // 生命周期 updated 数据更新的时候  性能优化
  updated () {
    this.stratY = this.$refs["A"][0].offsetTop
  },

  methods:{
    handerLetterClick (e) {
      // e.target 触发谁，谁就是目标
      // console.log(e.target.innerText)
      this.$emit("change",e.target.innerText)
    },
    // 触摸滑动之前
    handleTouchStart () {
      this.touchStatus = true
    },
    // 触动滑动时 
    handleTouchMove (e) {
      if(this.touchStatus){
        // 数据节流  创建一个timer，如果有的话，清除，优化性能
        if(this.timer){
          clearTimeout(this.timer)
        }
          this.timer = setTimeout(()=>{
              // 获取触摸开始时的dom元素的Y坐标 也就是A元素到灰色顶栏的高度
              // const stratY = this.$refs["A"][0].offsetTop
              // console.log(stratY)
              // 获取到滑动到某一个元素距离灰色顶栏的高度的差值
              const touchY = e.targetTouches[0].clientY-89
              // console.log(touchY)
              // 找到字母的下标  20是字母的高度  floor是详细取整
              const index = Math.floor((touchY - this.stratY)/20)
              // console.log(index)
              if(index >= 0 && index<this.letters.length){
                this.$emit("change",this.letters[index])
              }
            },16)
        
      }
    },
    // 触动滑动结束时
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>