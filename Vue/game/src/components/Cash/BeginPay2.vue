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
          <h3>我要充值</h3></div>
        <div class="main-bd">
          <form class="form-horizontal">
            <div class="container-fluid">
              <div class="panel-body czconfim">
                <p>
                  <strong>充值信息</strong></p>
                <div class="czconfimbox" id="czconfimbox">
                  <p>
                    <strong>付款说明</strong></p>
                  <ul>
                    <li>
                      <span>充值步骤：</span>第一步：提交申请-&gt;第二步：登录【银行网银】-&gt; 第三步：点击【转账】-&gt; 第四步：根据以上信息按步骤完成充值。</li>
                    <li>
                      <span>转账时间：</span>实时到帐。</li>
                    <li>
                      <span>平台帐号：</span>必须发起申请后，才能看到平台收款帐号姓名。</li>
                    <li>
                      <span>特别说明：</span>
                      <strong style="color:red;">所有其它网银都可以向 A民生银行 实时转帐。</strong></li>
                    <li>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <strong style="color:red;">勿使用支付宝直接充值到 A民生银行</strong></li>
                  </ul>
                </div>
                <div class="czconfimbox">
                  <p class="p-logo">
                    <img alt="" src="./../../assets/images/bank/gsyh.png"></p>
                  <ul>
                    <li style="background-position: 5px 10px;">
                      <span>充值金额：</span>
                      <p>
                        <strong>100</strong></p>
                      <input type="button" class="copyicon" value="复制"></li>
                    <li>
                      <span>您付款银行卡的姓名：</span>
                      <p>
                        <input type="text" value="">
                        <label style="color:red;font-size:20px;">填写姓名与您付款姓名不一致，无法自动到帐。</label></p>
                    </li>
                  </ul>
                  <div class="information">
                    <div class="code">
                      <table border="" cellspacing="" cellpadding="">
                        <tr>
                          <th>
                            <img src="./../../assets/images/code.png" width="88" height="88" /></th>
                          <td>扫码支付</td></tr>
                      </table>
                    </div>
                  </div>
                  <div class="timeinformation">
                    <p>倒计时：
                      <strong>02:00:00</strong></p>
                    <span>付款倒计时</span></div>
                </div>
              </div>
              <div class="text-center">
                <button class="btn btn-primary" type="button">发起申请</button>
                <button class="btn btn-danger" type="button">返&nbsp;&nbsp;&nbsp; 回</button></div>
            </div>
          </form>
          <div class="tips" style="padding: 25px;">
            <p>温馨提示：</p>
            <p>1、充值账户均在第三方支付平台托管，请仔细阅读第三方支付平台的法律声明和服务协议，使用该第三支付平台的服务即视为您已同意其法律声明和服务协议的全部内容。</p>
            <p>2、充值费用暂免，如收取将另行通知。</p>
            <p>3、充值（7X24小时）实时到账。</p>
            <p>4、如果充值金额没有及时到账，可以与我公司或第三方支付平台联系。</p>
            <p>5、民生充值可以使用任何银行跨行转账进行充值。</p>
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
import './../../assets/css/cz.css'

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
