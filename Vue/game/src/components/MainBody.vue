<template>
  <div>
      <div class="iframeBox">
       <!-- 移动端下显示余额，充值提款 -->
      <show-info></show-info>
      <!-- 结束 移动端下显示余额，充值提款 -->
      <div class="container-fluid index-imgmenu">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <router-link to="/">
              <img src="./../assets/images/index-img1.jpg" class="img-responsive center-block" /></router-link>
          </div>
          <div class="col-sm-6 col-md-3">
            <router-link to="/">
              <img src="./../assets/images/index-img2.jpg" class="img-responsive center-block" /></router-link>
          </div>
          <div class="col-sm-6 col-md-3">
            <router-link to="/">
              <img src="./../assets/images/index-img3.jpg" class="img-responsive center-block" /></router-link>
          </div>
          <div class="col-sm-6 col-md-3">
            <router-link to="/">
              <img src="./../assets/images/index-img4.jpg" class="img-responsive center-block" /></router-link>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="index-content-box">
              <div class="hd">
                <router-link to="/" class="pull-right">提升</router-link>
                <h3>
                  <em>▎</em>安全等级</h3></div>
              <div class="bd">
                <div class="div-table">
                  <div class="col">
                    <img src="./../assets/images/lev1.png" class="img-row" /></div>
                  <div class="col">
                    <div class="title">
                      <span>安全星级：
                        <i class="icon-star"></i>
                        <i class="icon-star-empty"></i>
                        <i class="icon-star-empty"></i>
                        <i class="icon-star-empty"></i>
                        <i class="icon-star-empty"></i>
                      </span>
                    </div>
                    <p>上次登陆的IP：183.228.71.95</p>
                    <p>上次登陆地址：重庆市移动</p>
                    <p>上次登陆时间：2017-07-27 19:40:19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="index-content-box">
              <div class="hd">
                <router-link to="/" class="pull-right">更多</router-link>
                <h3>
                  <em>▎</em>系统公告</h3></div>
              <div class="bd">
                <ul class="list-unstyled notice-list">
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                  <li>
                    <span class="time">01-31 16:13</span>
                    <router-link to="/" class="ddd">· 维护功能内容信息维护功能内容信息维护功能内容信息</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShowInfo from './ShowInfo'

  export default{
    data () {
      return {
        
      }
    },
    components: {
      ShowInfo
    }
  }
</script>
