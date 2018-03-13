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
      <!-- 移动端下显示余额，充值提款 -->
      <show-info></show-info>
      <!-- 结束 移动端下显示余额，充值提款 -->
      <div class="iframe-mainBox">
        <div class="main-hd">
          <h3>提款申请</h3></div>
        <div class="main-bd">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label">账户余额</label>
              <div class="col-sm-10">
                <div class="text-left">
                  <b>1000</b>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">提款金额</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="请输入提现金额"></div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">资金密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="请输入资金密码"></div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">选择银行卡</label>
              <div class="col-sm-10">
                <select name="" class="form-control">
                  <option value="">选择银行卡</option></select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-danger">　确认　</button></div>
            </div>
          </form>
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
    }
  }
</script>

<style scoped>
.form-horizontal{ padding-top: 25px; padding-bottom: 25px; } 
.form-horizontal .text-left{ color: #F98700; line-height: 34px; }
</style>

