<template>
  <div>
    <!--头部-->
    <main-header></main-header>
    <!--结束头部-->
    <!--左边菜单-->
    <main-lefter></main-lefter>
    <!--结束左边菜单-->
    <main-body></main-body>

    <!-- 底部开始 -->
    <main-footer></main-footer>
    <!-- 底部结束 -->

  </div>
</template>
<script>
import './../assets/js/index.js'
import './../assets/css/index.css'
import './../assets/css/font-awesome.min.css'

import MainHeader from './MainHeader'
import MainLefter from './MainLefter'
import MainFooter from './MainFooter'
import MainBody from './MainBody'


  export default {
    data() {
      return {}
    },
    components: {
      MainHeader,
      MainLefter,
      MainFooter,
      MainBody
    }
  }</script>