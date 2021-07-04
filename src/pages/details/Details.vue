<template>
    <div>
        <details-banner></details-banner>
        <details-header></details-header>
    </div>
</template>

<script>
// 引入Banner头部横幅组件
import DetailsBanner from "./components/Banner.vue"
// 引入Header.vue组件  渐隐渐现效果
import DetailsHeader from "./components/Header.vue"
export default {
    name:"Details",
    components:{
        DetailsBanner,
        DetailsHeader
    }
}
</script>

<style lang="stylus">

</style>