import Vue from "vue";
import App from "./App.vue";
// 引入store,非default导出需要用大括号
import {store} from "./store";
// 名称必须是router
import router from "./route/router";

// 引入 并 注册 axios 到 vue 中
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// 自定义的代码: 配置axios 的默认 请求基础路径 和 请求头(错误则会跨域报错)
Vue.axios.defaults.baseURL = "http://101.96.128.94:9999/mfresh/data/";
Vue.axios.defaults.headers = {
  "content-type": "application/x-www-form-urlencoded"
};

Vue.config.productionTip = false;

new Vue({
  router, //完整写法:  router: router
  render: h => h(App),
  store   //注册vuex
}).$mount("#app");
