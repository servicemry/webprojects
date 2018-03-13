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
          <h3>通知公告</h3></div>
        <div class="main-bd">
          <div class="notice-page-list">
            <ul class="list-unstyled">
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
              <li data-toggle="modal" data-target="#myModal-notice">
                <strong>
                  <i class="fa fa-star graystar"></i>平台账户安全提醒</strong>
                <span>2017/7/28 21:39:14</span></li>
            </ul>
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

    <!-- modal -->
       <div class="modal fade" id="myModal-notice" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">平台账户安全提醒</h4>
            <p>发布时间：2017/7/12 0:00:27</p>
          </div>
          <div class="modal-body">
            <p>亲爱的彩民们好 支付宝充值方式将于每日 23：30 - 00：00 与00：30 - 01：00 时段关闭充值渠道进行维护，不便之处敬请见谅。</p>
            <p class="text-right">创新游戏 特此公告</p></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <!--<button type="button" class="btn btn-primary">发送</button>--></div>
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
