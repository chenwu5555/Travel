let defaultCity = "上海"

// 捕捉异常 防止用户禁用了本地缓存
try {
  if(localStorage.city) {
    defaultCity = localStorage.city
  }
}catch (error) {
  console.log(error);
}

export default {
    city:defaultCity
}