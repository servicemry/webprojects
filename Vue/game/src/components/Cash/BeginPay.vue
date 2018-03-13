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
            <div class="">
              <div class="panel-body chongzhibox">
                <div class="czbox">
                  <div class="czrow">
                    <div class="czlabel">充值方式：</div>
                    <div class="cztxt">
                      <div class="radio">
                        <label class="form-radio form-normal form-text active">
                          <input checked="checked" type="radio">网银充值</label></div>
                    </div>
                  </div>
                  <div class="czrow" id="xzyh" style="display:block">
                    <div class="cztxt graybg">
                      <ul class="bankboxlist">
                        <li>
                          <div class="bankbox thisbank">
                            <img alt="" src="./../../assets/images/bank/gsyh.png">
                            <img alt="" src="./../../assets/images/bank/line.png"></div>
                        </li>
                        <li>
                          <div class="bankbox">
                            <img alt="" src="./../../assets/images/bank/msyh.png">
                            <img alt="" src="./../../assets/images/bank/line.png"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr>
                  <div class="czrow">
                    <div class="czlabel">充值金额：</div>
                    <div class="cztxt">
                      <div class="jinebox">
                        <input placeholder="请输入充值金额" type="text">元</div>充值金额：
                      <strong>单笔最低充值金额为
                        <span>50</span>元，最高
                        <span>10000</span>元</strong></div>
                  </div>
                </div>
                <div class="czfoot">
                  <div class="czfootbox">
                    <button class="btn btn-primary" @click="beginPay()">继续下一步</button></div>
                </div>
              </div>
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
    },
    methods:{
      beginPay(){
        this.$router.push({path:'/beginpay2'})
      }
    }
  }
</script>
