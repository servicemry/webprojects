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
          <h3>提款说明</h3></div>
        <div class="main-bd">
          <div class="tksm">
            <table class="table table-hover table-bordered">
              <tr>
                <th>
                  <b>提款信息</b>
                </th>
                <td>
                  <p>提款时间： 从
                    <b>03:00:00</b>至第二天
                    <b>02:59:59</b>
                  </p>
                  <p>每天限制提款
                    <b>88</b>次，您今天已提款
                    <b>0</b>次。</p>
                  <p>最小提款额：
                    <b>100</b>元，最大提款额：
                    <b>500000</b>元</p>
                  <p>系统消费比例限制为：
                    <b>50%</b>。</p>
                  <p>您的码量还有：
                    <b>0</b>元。</p>
                </td>
              </tr>
              <tr>
                <th>
                  <b>重要提示</b>
                </th>
                <td>
                  <p>绑定银行卡后
                    <b>6</b>小时后才能进行提款。</p>
                  <p>同一张银行卡若绑定第二次需要等候
                    <b>48</b>小时后才能进行提款。</p>
                  <p>同一张银行卡若绑定第三次需要等候
                    <b>120</b>小时后才能进行提款。</p>
                  <p>本平台从
                    <b>当天凌晨3点</b>至
                    <b>第二天凌晨3点</b>为一天。</p>
                  <p>例如：2016-01-01 03:00 至 2016-01-02 03:00 为报表的 2016-01-01 一天</p>
                </td>
              </tr>
              <tr>
                <th>
                  <b>规则更新</b>
                </th>
                <td>
                  <p>每日免费提款次数为
                    <b>2</b>次</p>
                  <p>您已经免费提款
                    <b>0</b>次</p>
                  <p>超过后将按
                    <b>1%</b>的比例收取手续费</p>
                  <p>单次手续费
                    <b>100</b>元封顶</p>
                </td>
              </tr>
            </table>
            <div class="text-center" style="padding: 25px;">
              <router-link to="Withdraw2" class="btn btn-danger">确认</router-link></div>
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
    }
  }
</script>

<style scoped>
.tksm b { color: #F98700; } .tksm .table td { text-align: left; }
</style>

