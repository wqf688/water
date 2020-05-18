<template>
  <div>
    <!-- vue: 文件名必须大驼峰, 即大写开头. 文件名即组件名 -->
    <!-- 模板文件: html代码只能有一个父元素 -->
    <!-- 把 原版网站的 header.html 内容拷贝到此处 -->
    <header class="header container">
      <h1 class="logo">
        <a href="index.html" class="link"></a>
      </h1>
      <div class="h_con">
        <ul class="clearfloat">
          <li class="phone">4000-585-116</li>
          <li>
            <a href="#">中文</a>
          </li>
          <li>
            <em>|</em>
          </li>
          <li>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#" class="weixin"></a>
          </li>
          <li>
            <a href="#" class="weibo"></a>
          </li>
          <li v-show="uname==''"><router-link to="/login" class="h_login">登录</router-link></li>
          <li v-show="uname==''"><em>|</em></li>
          <li v-show="uname==''"><a href="register.html" class="h_register"> <router-link to="/register">注册</router-link></a></li>
          <li class="top_user" v-show="uname!==''"><a href="">{{uname}}</a></li>
          <li class="top_quit" v-show="uname!==''"><a @click="logout">退出</a></li>
        </ul>
        <div class="search clearfloat">
          <button type="button"></button>
          <input type="text" />
        </div>
      </div>
    </header>
    <!--nav-->
    <nav class="navbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <router-link to="/">
                <span class="icon_home"></span>首页
              </router-link>
            </li>
            <li>
              <router-link to="/about">关于净美仕</router-link>
            </li>
            <li>
              <router-link to="/news">公司动态</router-link>
            </li>
            <li class="nav_pd">
              <a href="product.html">
                产品中心
                <span class="icon_pd"></span>
              </a>
              <div class="pd_dropdown">
                <a href="product.html?type=1">净美仕净化器</a>
                <a href="product.html?type=2">净美仕滤网</a>
              </div>
            </li>
            <li>
              <a href="contact.html">联系我们</a>
            </li>
          </ul>
        </div>
        <div class="s_cart">
          <a href="cart.html">
            <span class="icon_cart"></span>购物车(
            <strong id="cart_sum">0</strong>)
            <span class="icon_sj"></span>
          </a>
          <div class="cart_dropdown">
            <!--<h3>您的购物车为空~</h3>-->
            <ul>
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
            </ul>
            <div class="cd_js clearfloat">
              <span>
                共计：
                <strong>0.00</strong>
              </span>
              <a href="#">结算</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// 使用vuex的mapState需要引入
import {mapState,mapMutations} from "vuex";
export default {
  // 官方推荐: 给组件起个名字, 便于报错时的提示
  name: "Header",
  // 引入vuex的store中的state值，必须在计算属性中书写
  computed:{
    // mapState 辅助函数，可以快速引入store中的值
    // 此处的login是state中的login 登录状态
    ...mapState(["login","uname"])
  },
  methods:{
    logout(){
      // this.$store.commit("doLogout")
      this.setUname("")
      localStorage.clear()
      sessionStorage.clear()
    },
    ...mapMutations(["setUname"])
  },
  mounted(){
    var uname=localStorage.getItem("uname")||sessionStorage.getItem("uname");
    this.setUname(uname||"")
  }
};
</script>

<style>
</style>