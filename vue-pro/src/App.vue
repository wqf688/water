<template>
  <div id="app">
    <!-- 使用子组件 -->
    <Header class="header_box" />
    <!-- <Index /> -->
    <!-- <About /> -->

    <!-- 路由组件: 此组件的内容会 随着路由的 路径变化 而加载 对应的组件 -->
    <router-view></router-view>
    <Footer class="footer" />
  </div>
</template>

<script>
// 引入子组件
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Index from "./components/Index";
// import About from "./components/About";

export default {
  name: "App",
  components: {
    Header, //注册子组件
    Footer
    // Index,
    // About
  }
};
</script>

<style>
/* 对于静态文件: js, css, 图片 应该存放在 assets 目录下 */

/* 使用 @import 引入其他的css文件 */
@import "./assets/css/mycss.css";
@import "./assets/css/common.css";
</style>
