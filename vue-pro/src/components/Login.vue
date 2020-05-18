<template>
     <div class="login_box">
  <div class="container">
    <div class="login">
      <h2>用户登录</h2>
      <dl class="clearfloat">
        <dt><span class="tips" id="uname_prompt_text"></span>用户名：</dt>
        <dd>
          <input  v-model="uname"  type="text" id="uname" placeholder="邮箱/手机号"/>
          <em class="icon_user"></em>
          <i class="icon_error" id="uname_prompt_icon"></i>
        </dd>
      </dl>
      <dl>
        <dt><span class="tips" id="pwd_prompt_text">请输入密码</span>密码：</dt>
        <dd>
          <input  v-model="upwd"  type="password" id="pwd" placeholder="密码"/>
          <em class="icon_pwd"></em>
          <i class="icon_error" id="pwd_prompt_icon"></i>
        </dd>
      </dl>
      <p><label>
        <input type="checkbox"  v-model="remember"/>
        <span>自动登录</span>
      </label></p>
      <button @click="doLogin"   type="button" id="login">立 即 登 录</button>
    </div>
  </div>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name:"Login",
  data(){
    return {
      uname:"",
      upwd:"",
      remember:false
    }
  },
  methods:{
    doLogin(){
      // 发送登录操作的请求
      this.axios.post("user_login.php",`unameOrPhone=${this.uname}&upwd=${this.upwd}`)
      .then(res => {
        console.log(res)
        let code=res.data.code;
        if(code==1){
          alert("恭喜您登成功，即将跳转到首页");
          // 路由跳转到指定页面
          this.$router.push("/")
          // 更新vuex中的state的值，必须通过mutations提供方法才可以
          // 通过commit来触发vuex中doLogin方法
          // this.$store.commit("doLogin")
          this.setUname(res.data.uname);
          console.log(res.data.uname);
          
        }else{
          alert("很遗憾，登录失败")
        }
      })
      .catch(err => {
        console.error(err); 
      }).then(()=>{
        if(this.remember){
           localStorage.setItem("uname",this.uname)
        }else{
          sessionStorage.setItem("uname",this.uname)
        }
      })
    },
    // 
    ...mapMutations(["setUname"])
  }
}
</script>

<style>

</style>