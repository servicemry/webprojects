<template>
<div>
    <!--头部-->
    <main-header></main-header>
    <!--结束头部-->
    <!--左边菜单-->
    <main-lefter></main-lefter>
    <!--结束左边菜单-->
    <!-- 内容部分 -->
    <div class="iframeBox">
      <show-info></show-info>
      <div class="iframe-mainBox">
        <div class="main-hd">
          <div class="pull-right">
            <a href="" class="btn active">
              <span>刷新</span></a>
          </div>
          <h3>团队统计</h3></div>
        <div class="main-bd">
          <div class="teamInfo-total">
            <table class="table table-hover table-bordered">
              <caption>最近10天的注册人数、投注人数、有效[投注金额大于等于1000元]投注人数统计</caption>
              <tbody>
                <tr>
                  <th>2017-07-26</th>
                  <td>注册[0]</td>
                  <td>微信[0]</td>
                  <td>投注[0]</td>
                  <td>有效[0]</td></tr><tr>
                  <th>2017-07-27</th>
                  <td>注册[0]</td>
                  <td>微信[0]</td>
                  <td>投注[0]</td>
                  <td>有效[0]</td></tr>
              </tbody>
            </table>
            
            <table class="table table-hover table-bordered">
              <caption>奖金分类统计与其他统计</caption>
                <tbody>
                  <tr>
                    <th>1956 奖金人数</th>
                    <td>1</td></tr>
                  <tr>
                    <th>团队总人数</th>
                    <td>2</td></tr>
                  <tr>
                    <th>团队总余额【元】</th>
                    <td>1</td></tr>
                  <tr>
                    <th>有余额的会员人数</th>
                    <td>2</td></tr>
                  <tr>
                    <th>余额为0元会员人数</th>
                    <td>1</td></tr>
                  <tr>
                    <th>今日投注会员人数</th>
                    <td>2</td></tr>
                </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    <!-- 内容部分结束 -->
    <!-- 底部开始 -->
    <main-footer></main-footer>
    <!-- 底部结束 -->
</div>
</template>

<script>
import './../../assets/js/index.js'
import './../../assets/css/index.css'
import './../../assets/css/font-awesome.min.css'

import MainHeader from './../MainHeader'
import MainLefter from './../MainLefter'
import MainFooter from './../MainFooter'
import ShowInfo from './../ShowInfo'
  export default {
    data() {
      return {}
    },
    components: {
      MainHeader,
      MainLefter,
      MainFooter,
      ShowInfo
    },
    methods:{
      beginPay(){
        this.$router.push({path:'/beginpay2'})
      }
    }
  }
</script>
