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
          <h3>帐变明细</h3></div>
        <div class="main-bd">
          <div class="search-row clear">
            <div class="pull-left">
              <div class="pull-left">类型：</div>
              <div class="pull-left">
                <select name="" id="" class="form-control">
                  <option value="">请选择彩种</option></select>
              </div>
            </div>
            <div class="pull-left">
              <div class="pull-left">流水号：</div>
              <input type="text" class="form-control" placeholder="期号" /></div>
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
                    <th>流水号</th>
                    <th>单号</th>
                    <th>类型</th>
                    <th>时间</th>
                    <th>金额</th>
                    <th>余额</th>
                    <th>备注</th></tr>
                </thead>
                <tbody>
                  <tr>
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
