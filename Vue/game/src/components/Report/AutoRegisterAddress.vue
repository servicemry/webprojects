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
            <a href="javascript:;" class="btn active" data-toggle="modal" data-target="#myModal-safe6">
              <span>
                <i class="icon-plus"></i>生成推广链接</span>
            </a>
            <a href="javascript:;" class="btn active">
              <span>刷新</span></a>
          </div>
          <h3>微信推广</h3></div>
        <div class="main-bd">
          <div class="search-list">
            <div class="table-responsive">
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>备注</th>
                    <th>奖金</th>
                    <th>会员类型</th>
                    <th>单击[链接地址]复制</th>
                    <th>时间</th>
                    <th>状态</th>
                    <th>操作</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>无</td>
                    <td>1956</td>
                    <td>代理</td>
                    <td>
                      <a href="javascript:;">http://t.cn/R96TkSB</a></td>
                    <td>2017/8/3 16:24:49</td>
                    <td>
                      <i class="icon-link"></i>
                    </td>
                    <td>
                      <a href="javascript:;" data-toggle="modal" data-target="#myModal-del">
                        <i class="icon-remove"></i>删除</a>&nbsp;&nbsp;
                      <a href="javascript:;" data-toggle="modal" data-target="#myModal-safe8">
                        <i class="fa fa-weixin"></i>微信</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--生成推广链接-->
    <div class="modal fade" id="myModal-safe6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">生成推广链接</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user"></i>
                </span>
                <select class="form-control">
                  <option value="0" selected="selected">请选择会员类型？</option>
                  <option value="1">代理</option>
                  <option value="2">会员</option></select>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-cny"></i>
                </span>
                <select class="form-control">
                  <option value="0" selected="selected">请选择会员奖金</option>
                  <option value="1">1956</option>
                  <option value="2">1955</option>
                  <option value="3">1954</option></select>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-info-circle"></i>
                </span>
                <input type="text" class="form-control" placeholder="备注信息" /></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <!--删除-->
    <div class="modal fade" id="myModal-del" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">微信推广</h4></div>
          <div class="modal-body text-center">
            <p>确定要删除吗？</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确认</button></div>
        </div>
      </div>
    </div>
    <!--微信注册弹出框-->
    <div class="modal fade" id="myModal-safe8" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">请在微信中 -> 发现 -> 扫一扫自动注册</h4></div>
          <div class="modal-body text-center">
            <div class="img text-center" style="padding: 15px;">
              <img src="./../../assets/images/code.png" class="img-responsive center-block" /></div>
            <p>
              <font color="red">请将二维码发给用户，用户使用微信扫一扫后即可自动注册。</font></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div>
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
