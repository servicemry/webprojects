<template>
  <div>
      <div class="zindex-1 visible-lg visible-md"></div>
      <div class="navbar navbar-inverse  navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header-row">
          <router-link to="/main" class="a-menu pull-right visible-sm visible-xs" data-toggle="collapse" data-target=".navlist">菜单</router-link>
          <a class="logo">创新游戏</a>
          <div class="btn-sideMenu pull-left">
            <i class="icon-reorder"></i>
          </div>
        </div>
        <div class="pull-left   hidden-sm hidden-xs">
          <div class="nav-funbtn pull-left">
            <router-link to="StateMessage" class="a-msn hidden-sm hidden-xs">短消息</router-link>
            <router-link to="Notice" class="a-notice  hidden-sm hidden-xs">公告</router-link>
            <a  class="a-menu J-a-menu">菜单</a></div>
        </div>
        <div class="pull-right nav-right hidden-sm hidden-xs">
          <div class="div-table">
            <div class="col">
              <img src="./../assets/images/avator.png" /></div>
            <div class="col">
              <h6>RAINBOW 欢迎您！</h6>
              <p>余额：
                <b>52133.64</b>冻结：
                <b>52133.64</b>
              </p>
            </div>
            <div class="col">
              <router-link to="BeginPay" class="btn btn-info">充值</router-link>
              <router-link to="Withdraw" class="btn btn-success">提现</router-link>
              <router-link to="/"    class="btn btn-danger">退出</router-link>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="navlist" role="navigation">
      <div class="div-table">
        <div class="col col1">
          <h3>
            <span>会员中心</span></h3>
          <div class="a-row">
            <router-link to="SafeCenter">修改密码</router-link>
            <router-link to="SafeCenter">安全中心</router-link>
            <router-link to="MyBetRecord">我的投注</router-link>
            <router-link to="AccountChangeDetails">账变明细</router-link>
            <router-link to="BankOrder">银行订单</router-link>
            <router-link to="MemberCenter">用户中心</router-link>
            <router-link to="BankInfo">银行资料</router-link>
            <router-link to="MyApendBetRecord">我的追号</router-link>
            <router-link to="PayRecord">充提记录</router-link>
            <router-link to="PepoleReport">个人报表</router-link></div>
        </div>
        <div class="col col2">
          <h3>
            <span>代理中心</span></h3>
          <div class="a-row">
            <router-link to="MemberManage">会员管理</router-link>
            <router-link to="AutoRegisterAddress">微信推广</router-link>
            <router-link to="WagesManage">工资管理</router-link>
            <router-link to="TeamReport">团队报表</router-link>
            <router-link to="TeamPay">团队充提</router-link>
            <router-link to="TeamBet">团队投注</router-link>
            <router-link to="TeamCalc">团队统计</router-link>
            <router-link to="JJInfo">奖金详情</router-link></div>
        </div>
        <div class="col col3">
          <h3>
            <span>服务中心</span></h3>
          <div class="a-row">
            <router-link to="StateMessage">站内消息</router-link>
            <router-link to="Notice">通知公告</router-link>
            <router-link to="AutoBetInterface">自主挂机</router-link>
          </div>
        </div>
        <div class="col col4">
          <h3>
            <span>资金中心</span></h3>
          <div class="a-row">
            <router-link to="BeginPay">我要充值</router-link>
            <router-link to="Withdraw">我要提现</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>
