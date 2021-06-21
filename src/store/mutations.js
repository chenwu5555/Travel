export default {
    // 同步的一些数据的改变  城市名称页面
    changeCity (state,city) {
        // 利用本地储存保存城市，防止刷新
        state.city = city
        try {
          localStorage.city = city
        }catch (error) {
          console.log(error);
        }
    }
}