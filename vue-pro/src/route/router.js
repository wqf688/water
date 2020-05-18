import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import About from "../components/About.vue";
import Index from "../components/Index.vue";
import News from "../components/News.vue";
import Details from "../components/Details.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

// 路由的对应关系数组:  什么路径 -> 什么组件
const routes = [
  { path: "/", component: Index },
  { path: "/about", component: About },
  { path: "/news", component: News },
  {path:"/details/:nid",component:Details,props:true},
  {path:"/login",component:Login},
  {path:"/register",component:Register}
];

// 利用对应关系数组 做出路由对象
export default new VueRouter({
  mode: "history",
  routes
});
