export default {
    // 同步的一些数据的改变  城市名称页面
    changeCity (state,city) {
        // localStorage(用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除,且只能够读取) 利用本地储存保存城市，防止刷新
        state.city = city
        try {
          localStorage.city = city
        }catch (error) {
          console.log(error);
        }
    }
}