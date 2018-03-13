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
      <div class="iframe-mainBox">
        <div class="main-hd">
          <div class="pull-right">
            <a href="javascript:;" class="btn btn-yellow">
              <span>
                <i class="icon-remove">&nbsp;</i>删除全部</span></a>
            <a href="javascript:;" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-sendMessage">
              <span>
                <i class="icon-plus">&nbsp;</i>新增</span></a>
          </div>
          <h3>站内消息</h3></div>
        <div class="main-bd">
          <div class="search-row clear">
            <div class="pull-left">
              <div class="pull-left">会员名：</div>
              <input type="text" class="form-control" placeholder="会员名" /></div>
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
                    <th>编号</th>
                    <th>标题</th>
                    <th>发送人</th>
                    <th>接收人</th>
                    <th>时间</th>
                    <th>状态</th>
                    <th>操作</th></tr>
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

    <!-- modal -->
    <div class="modal fade" id="myModal-sendMessage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">发送消息</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-group"></i>
                </span>
                <div class="form-control">
                  <label>
                    <input type="radio" name="radio" checked="checked" />上级</label>&nbsp;&nbsp;&nbsp;
                  <label>
                    <input type="radio" name="radio" />下级</label></div>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-user"></i>
                </span>
                <select name="" class="form-control">
                  <option value="">所有会员</option></select>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-envelope"></i>
                </span>
                <input type="text" class="form-control" placeholder="请输入消息标题"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-question-sign"></i>
                </span>
                <textarea name="" rows="5" cols="" class="form-control" placeholder="请输入消息内容"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">发送</button></div>
        </div>
      </div>
    </div>
    <!-- endmodal -->

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
