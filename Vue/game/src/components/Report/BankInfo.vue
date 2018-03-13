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
            <a href="" class="btn btn-yellow">刷新</a></div>
          <h3>银行资料</h3></div>
        <div class="main-bd">
          <div class="bank-list container-fluid">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="add-bank" data-toggle="modal" data-target="#myModal-safe4">
                  <div class="inner">
                    <div class="ico">
                      <i class="icon-plus"></i>
                    </div>
                    <p>添加银行卡</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="bank-item">
                  <div class="inner">
                    <h3>中国农业银行</h3>
                    <p class="txt">银行卡号：622848********8801</p>
                    <div class="line"></div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="bank-item">
                  <div class="inner">
                    <h3>
                      <font color="#EC5555">中国工商银行</font></h3>
                    <p class="txt">银行卡号：622848********8801</p>
                    <div class="line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--银行卡弹出-->
    <div class="modal fade" id="myModal-safe4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">添加银行卡</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-user"></i>
                </span>
                <input type="text" class="form-control" placeholder="持卡人"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-credit-card"></i>
                </span>
                <input type="text" class="form-control" placeholder="银行卡卡号"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="资金密码"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
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
