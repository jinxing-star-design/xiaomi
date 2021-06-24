import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
import env from './env'

Vue.config.productionTip = false
Vue.prototype.axios = axios 

//这个baseurl根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
// 设置超时时间
axios.defaults.timeout = 8000;


// 根据环境变量设置不同的请求地址
axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
