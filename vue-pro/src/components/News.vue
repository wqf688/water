<template>
  <div>
    <!-- news.html 12~40 -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news">
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <!-- 过滤器写法: {{ 变量 | 过滤器 }} -->
            <span>{{item.pubTime | datetime}}</span>
            <a><router-link :to="'/details/'+item.nid">{{item.title}}</router-link></a>
          </li>
          <!--<li><span>2016-02-21</span><a href="">净美仕新风净化系统 助力校园新风行动</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li>-->
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a :class="{default: pageNum==1}" @click="getNews(pageNum-1)">上一页</a>

        <!-- 当前页, 有cur样式, 否则没有 -->
        <!-- 样式写法: :class="{样式名:true/false}" -->
        <!-- 通过true和false 来代表样式是否生效  -->
        <a
          @click="getNews(item)"
          :class="{cur: pageNum==item}"
          v-for="(item, index) in pageCount"
          :key="index"
        >{{item}}</a>
        <!-- <a>2</a> -->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->

        <!-- 根据条件, 来显示 能点 和 不能点的下一页 -->
        <a @click="getNews(pageNum+1)" v-if="pageNum<pageCount">下一页</a>
        <a class="default" v-else>下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  // 页面上的内容 必须保存在 data 属性中
  data() {
    return {
      totalRecord: 0,
      pageCount: 0,
      pageNum: 0,
      pageSize: 0,
      data: []
    };
  },
  mounted() {
    this.getNews(1);
  },
  // fileters : 专门制作过滤器的属性
  filters: {
    // {{ 时间戳 | datetime }} -> xxxx年xx月xx日
    datetime(timestamp) {
      // 服务器返回的时间戳是字符串类型
      var ts = parseInt(timestamp);
      var date = new Date(ts);
      var year = date.getFullYear();
      var month = date.getMonth() + 1; //得到的月0~11
      var day = date.getDate();

      // 模板字符串: 外层定界符是 `  反引号
      return `${year}-${month}-${day}`;
    }
  },
  // 添加方法,可以在页面上调用, 则必须写在 methods中
  methods: {
    // 获取指定页数的数据
    getNews(page) {
      // 如果页数小于1, 则return. 让下方代码不执行
      if (page < 1) return;

      // this.axios.post
      // post(接口地址, 接口的参数)
      // 地址的前面部分已经在 main.js 中配置过, 请求时直接写后半部分即可
      // 服务器要求参数是字符串格式  "xxx=xx&xx=xx.."
      this.axios
        .post("news_select.php", "pageNum=" + page)
        .then(res => {
          console.log(res);
          // 分着存, 在html中使用时格式比较简单 {{pageNum}}
          // 合着存, 则html中, 要写:  {{ data.pageNum }}
          this.data = res.data.data;
          this.pageCount = res.data.pageCount;
          this.pageNum = res.data.pageNum;
          this.pageSize = res.data.pageSize;
          this.totalRecord = res.data.totalRecord;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
</style>