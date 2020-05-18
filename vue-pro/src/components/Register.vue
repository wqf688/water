<template>
  <div class="register">
  <h2>新用户注册</h2>
  <ul>
    <li>
      <span>邮箱：</span>
      <input  v-model="uname"  type="text" id="uname" placeholder="请输入邮箱名"/>
      <em></em>
      <i></i>
    </li>
    <li>
      <span>密码：</span>
      <input  v-model="upwd"  type="password" id="upwd" placeholder="请输入密码"/>
      <em></em>
      <i></i>
    </li>
    <li>
      <span>重复密码：</span>
      <input type="password" id="upwd2" placeholder="请重复输入密码"/>
      <em></em>
      <i></i>
    </li>
    <li>
      <span>手机号：</span>
      <input v-model="phone"  type="text" id="phone" placeholder="请输入手机号"/>
      <em></em>
      <i></i>
    </li>
    <li>
      <span>验证码：</span>
      <input type="text" class="inp_yzm" placeholder="请输入验证码"/>
      <img src="../assets/images/yzm.png" alt=""/>
      <strong class="icon_refresh"></strong>
    </li>
    <li class="li_checkbox"><label>
      <input type="checkbox" checked/>
      <span>我已阅读并同意用户注册协议</span>
    </label>
    </li>
    <li class="li_btn">
      <button type="button" @click="doReg">提交注册</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    name:"Register",
    data(){
      return {
        uname:"",
        upwd:"",
        phone:""
      }
    },
    methods:{
      doReg(){
        console.log(this.uname,this.upwd,this.phone);
        // 发送注册请求
        // user_register.php  post
        this.axios.post("user_register.php",`uname=${this.uname}&upwd=${this.upwd}&phone=${this.phone}`)
        .then(res => {
          console.log(res)
          let code=res.data.code;
          if(code==1){
            alert("恭喜您注册成功，即将为您跳转到刚才的页面")
            //注意： vue的路由，回到历史中的上一页
            this.$router.go(-1);
          }else{
            alert("注册失败")
          }
        })
        .catch(err => {
          console.error(err); 
        })
      }
    }
}
</script>

<style>

</style>