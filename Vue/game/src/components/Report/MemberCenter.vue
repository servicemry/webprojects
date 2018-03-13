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
            <router-link to="" class="btn btn-yellow">设置昵称与登录问候语</router-link>
            <router-link to="" class="btn btn-yellow">刷新</router-link></div>
          <h3>用户中心</h3></div>
        <div class="main-bd">
          <div class="userCenter-page">
            <div class="userCenter-info">
              <div class="div-table">
                <div class="col img">
                  <img src="./../../assets/images/90x90.png" class="img-responsive" /></div>
                <div class="col">
                  <h3>RAINBOW HEART</h3></div>
              </div>
            </div>
            <div class="userCenter-info2">
              <div class="row">
                <div class="col-sm-12">
                  <h4>
                    <b>我的信息</b>
                  </h4>
                </div>
                <div class="col-sm-6 col-md-4">昵称：红心</div>
                <div class="col-sm-6 col-md-4">注册时间：2017-06-14 18:57:48</div>
                <div class="col-sm-6 col-md-4">登陆问候语：问候语</div>
                <div class="col-sm-6 col-md-4">余额：0</div>
                <div class="col-sm-6 col-md-4">奖金：
                  <b>1956</b>
                </div>
                <div class="col-sm-6 col-md-4">返点：
                  <b>12.8</b>
                </div>
                <div class="col-sm-6 col-md-4">最近登陆：8.8.8.8</div>
                <div class="col-sm-6 col-md-4">最近登陆时间：最近登陆时间</div>
                <div class="col-sm-6 col-md-4">最近登陆地址： 重庆市移动</div></div>
              <div class="row">
                <div class="col-sm-12">
                  <h4>
                    <b>团队信息</b>
                  </h4>
                </div>
                <div class="col-sm-6 col-md-4">团队人数：
                  <b>1</b>
                </div>
                <div class="col-sm-6 col-md-4">当日注册：
                  <b>0</b>
                </div>
                <div class="col-sm-6 col-md-4">团队余额：
                  <b>0</b>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <h4>
                    <b>其他信息</b>
                  </h4>
                </div>
                <div class="col-sm-6 col-md-4">绑定银行卡：
                  <b>1</b>
                </div>
              </div>
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
