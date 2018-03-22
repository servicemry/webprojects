<template>
  <div class="container-fuild">
      <div class="loginheader text-center hidden-xs">
          <img height="120"  src="./../assets/images/login/logo.png">
      </div>

      <div class="loginbody">
          <div class="loginform">
            <div class="inputuser">
                <input type="text" class="inputname" placeholder="请输入用户名">
            </div>
            
            <div class="inputuser">
                <input type="password" class="inputname" placeholder="请输入密码">
            </div>
            
            <div class="inputuser">
                <input type="text" class="inputname" placeholder="验证码">
            </div>
            
            <input type="button" @click="returnMain()" class="inputbutton" value="登录"/>
          </div>
      </div>
    <ul class="link_right hidden-xs">
    <li><a href="" target="_blank"><i class="icon ic-kefu"></i><span>在线客服</span></a></li>
    <li><a href="/static/download/index.html" target="_blank"><i class="icon ic-down"></i><span>下载中心</span></a></li>
    </ul>
      
        <div class="loginfooter hidden-xs">
            <div class="foot">
                <p><img src="./../assets/images/nsc_login_footer_new.png"></p>
                <div class="browser"><b>推荐浏览器</b>
                <a href="//sw.bos.baidu.com/sw-search-sp/software/6a6217440c026/ChromeStandalone_62.0.3202.89_Setup.exe" target="_blank"><i class="icon ic-chrome"></i> 谷歌Chrome</a> / 
                <a href="//download.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe" target="_blank"><i class="icon ic-firefox"></i> 火狐Firefox</a> / 
                <a href="//support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" target="_blank"><i class="icon ic-ie"></i> IE 10.0 以上</a>
                </div>
                <p>Copyright © CXGame 2010-2018 创新游戏 版权所有</p>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods:{
      returnMain(){
          this.$router.push({path:'/main'})
      }
  }
}
</script>

<style scoped>
@import './../assets/css/login.css'
</style>
