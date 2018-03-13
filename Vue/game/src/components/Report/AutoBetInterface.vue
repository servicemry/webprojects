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
          <h3>自动挂机接口</h3></div>
        <div class="main-bd">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label">接口IP</label>
              <div class="col-sm-10">
                <div class="text-left">0.0.0.0</div></div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">接口令牌</label>
              <div class="col-sm-10">
                <textarea name="" rows="4" cols="" class="form-control" placeholder="申请接口成功后，接口令牌将自动生成。" readonly="readonly"></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">接口状态</label>
              <div class="col-sm-10">
                <div class="text-left">0未申请</div></div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">申请时间</label>
              <div class="col-sm-10">
                <div class="text-left">2017-8-4 19:50:37</div></div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">资金密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="请输入资金密码" /></div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="button"  class="btn btn-danger">申请接口</button></div>
            </div>
          </form>
          <div class="tips" style="padding: 25px;">
            <p>温馨提示：</p>
            <p>1、接口IP地址是指只能在当前的IP网络环境下发起请求。</p>
            <p>2、接口令牌代表用户的标识，当用户的登录密码或投注密码发生变化后接口令牌即马上失效，需要关闭后重新申请。</p>
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

<style scoped>
.form-horizontal{ padding-top: 25px; padding-bottom: 25px; } .form-horizontal .text-left{ line-height: 34px; }
</style>

