import Vue from "vue";
import Vuex from "vuex";
//将vuex注册到vue实例中
Vue.use(Vuex);

export const store =new Vuex.Store({
  // state专门用来保存 共享的状态值
  state:{
    // 保存登录状态
    login:false,
    uname:""
  },
  // 用来更新state中的值
  mutations:{
    doLogin(state){
      // 登录
      state.login=true;
    },
    doLogout(state){
      // 退出
      state.login=false;
    },
    // 修改uname的值
    setUname(state, uname) {
      state.uname = uname;
    }
  },
 
});