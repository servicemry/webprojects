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
          <h3>团队报表</h3></div>
        <div class="main-bd">
          <div class="search-row clear">
            <div class="pull-left">
              <div class="pull-left">会员：</div>
              <input type="text" class="form-control" placeholder="会员" /></div>
            <div class="pull-left">
              <div class="pull-left">奖金：</div>
              <input type="text" class="form-control" placeholder="奖金" /></div>
            <div class="pull-left">
              <div class="pull-left">起止时间：</div>
              <input type="text" class="form-control" /></div>
            <div class="pull-left">
              <div class="pull-left">至：</div>
              <input type="text" class="form-control" /></div>
            <div class="pull-left">
              <button type="button" class="btn btn-yellow">
                <span>
                  <i class="icon-search"></i>查询</span>
              </button>
            </div>
          </div>
          <div class="search-list">
            <div class="table-responsive">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>会员</th>
                    <th style="cursor:pointer">团队盈亏
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">消费
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">中奖
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">充值
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">提款
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">返点
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">活动
                      <i class="fa fa-sort"></i></th>
                    <th style="cursor:pointer">自身盈亏
                      <i class="fa fa-sort"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="">servicemry</a></td>
                    <td>
                      <span class="s1" style="background-color:#666666">0</span></td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td></tr>
                </tbody>
              </table>
            </div>
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
