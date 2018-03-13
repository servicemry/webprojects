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
            <button class="btn btn-yellow" data-toggle="modal" data-target="#myModal-exchange">
              <span>
                <i class="icon-exchange hidden-xs">&nbsp;</i>转账</span></button>
            <button class="btn btn-yellow" data-toggle="modal" data-target="#myModal-addVip">
              <span>
                <i class="icon-plus  hidden-xs">&nbsp;</i>新增</span></button>
          </div>
          <h3>会员管理</h3></div>
        <div class="main-bd">
          <div class="search-row clear">
            <div class="pull-left">
              <div class="pull-left">会员名：</div>
              <input type="text" class="form-control" placeholder="会员名" /></div>
            <div class="pull-left">
              <div class="pull-left">奖金：</div>
              <input type="text" class="form-control" placeholder="奖金金额" /></div>
            <div class="pull-left">
              <div class="pull-left">余额：</div>
              <input type="text" class="form-control" placeholder="最小余额" /></div>
            <div class="pull-left">
              <div class="pull-left">至：</div>
              <input type="text" class="form-control" placeholder="最大余额" /></div>
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
                    <th>会员名</th>
                    <th>奖金</th>
                    <th>团队总人数</th>
                    <th>余额</th>
                    <th>团队总余额</th>
                    <th>注册时间</th>
                    <th>最后登录时间</th>
                    <th>是否在线</th>
                    <th>操作</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <router-link to="">servicemry</router-link></td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>
                      <span class="s1" style="background-color: #3FA00A;">在线</span></td>
                    <td>
                      <a href="javascript:;" data-toggle="modal" data-target="#myModal-exchange">
                        <i class="icon-exchange"></i>
                      </a>&nbsp;
                      <a href="javascript:;">
                        <i class="icon-bar-chart"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>data</td>
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
                    <td>data</td>
                    <td>data</td>
                    <td>data</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <nav aria-label="" class="text-center">
            <ul class="pagination">
              <li class="disabled">
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span></a>
              </li>
              <li class="active">
                <a href="#">1
                  <span class="sr-only">(current)</span></a>
              </li>
              <li>
                <a href="">2</a></li>
              <li>
                <a href="">3</a></li>
              <li>
                <a href="">4</a></li>
              <li>
                <a href="">5</a></li>
              <li>
                <a href="">6</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">»</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="modal fade" id="myModal-exchange" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">开通转账</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="请输入资金密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-google-plus"></i>
                </span>
                <input type="password" class="form-control" placeholder="请输入谷歌动态密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-time"></i>
                </span>
                <input type="text" class="form-control" placeholder="开通后有效期为12小时"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <!--新增会员-->
    <div class="modal fade" id="myModal-addVip" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">新增会员</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user"></i>
                </span>
                <input type="text" class="form-control" placeholder="会员名称"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="text" class="form-control" placeholder="登录密码默认123456" value="123456"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-users"></i>
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
