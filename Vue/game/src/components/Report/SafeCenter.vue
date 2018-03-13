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
          <router-link to="" class="pull-right">我要重置密码</router-link>
          <h3>安全中心</h3></div>
        <div class="main-bd">
          <div class="div-table safe-hd">
            <div class="col">
              <img src="./../../assets/images/lev1.png" class="img-row" /></div>
            <div class="col">
              <p style="color: #999;">根据用户的安全设置计算出目前的安全级别。最低安全级别为“低”，基本没有任何安全措施。最高安全级别为“高”，各项安全信息都已经完善。</p>
              <p>上次登陆的IP：183.228.71.95</p>
              <p>上次登陆地址：重庆市移动</p>
              <p>上次登陆时间：2017-07-27 19:40:19</p>
              <div>
                <button type="button" class="btn btn-yellow">
                  <span>开启异地登陆验证</span></button>
              </div>
            </div>
          </div>
          <div class="safe-bd">
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe1.png" /></div>
              <div class="col txt">
                <h3>登陆密码：
                  <b>弱</b>
                </h3>
                <p>建议您使用字母、数字、混合大小写、特殊符号等进行组合，尽量不要使用单一的字母或数字作为密码，设置的密码长度越长越安全。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe1">
                  <span>修改登陆密码</span></button>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe2.png" /></div>
              <div class="col txt">
                <h3>资金密码：
                  <b>无</b>
                </h3>
                <p>在进行银行卡绑定、转账、提款等使用资金操作需要进行的资金密码确认，以提高您的资金安全性。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe2">
                  <span>修改资金密码</span></button>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe3.png" /></div>
              <div class="col txt">
                <h3>投注密码：
                  <b>无</b>
                </h3>
                <p>在进行游戏时，第一次操作需要进行的投注密码确认，以提高您的资金安全性。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe3">
                  <span>修改投注密码</span></button>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe4.png" /></div>
              <div class="col txt">
                <h3>银行卡：
                  <b>未绑定</b>
                </h3>
                <p>绑定银行卡后，您可以快速的通过绑定后的银行卡进行充值、转账、提款等使用资金。</p>
              </div>
              <div class="col btn-fun">
                <router-link to="" class="btn btn-yellow">
                  <span>绑定银行卡号</span></router-link>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe5.png" /></div>
              <div class="col txt">
                <h3>安全邮箱：
                  <b>未绑定</b>
                </h3>
                <p>当修改密码或绑定安全问题以及申请谷歌身份验证时，都必须先绑定安全邮箱后才能操作。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe5">
                  <span>绑定安全邮箱</span></button>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe6.png" /></div>
              <div class="col txt">
                <h3>安全问题：
                  <b>未绑定</b>
                </h3>
                <p>当忘记密码后可以使用安全问题来重置您的新密码。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe6">
                  <span>绑定安全问题</span></button>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe7.png" /></div>
              <div class="col txt">
                <h3>谷歌身份验证：
                  <b>未绑定</b>
                </h3>
                <p>Google身份验证器可以为用户提供像银行宝令一样的动态密码工具，每30秒将自动更新一次动态密码，这样可以保证你的账户更安全。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe7">
                  <span>申请谷歌验证</span></button>
              </div>
            </div>
            <div class="div-table">
              <div class="col img hidden-sm hidden-xs">
                <img src="./../../assets/images/icon/safe8.png" /></div>
              <div class="col txt">
                <h3>微信绑定：
                  <b>未绑定</b>
                </h3>
                <p>微信绑定后可以让用户在登录时直接使用手机微信进行扫一扫进行快速授权认证登录。</p>
              </div>
              <div class="col btn-fun">
                <button type="button" class="btn btn-yellow" data-toggle="modal" data-target="#myModal-safe8">
                  <span>申请绑定微信</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">修改登录密码</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="旧密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="新密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="重复新密码"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">修改资金密码</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="旧密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="新密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="重复新密码"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">修改投注密码</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="旧密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="新密码"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="重复新密码"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">绑定安全邮箱</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">@</span>
                <input type="password" class="form-control" placeholder="请输入邮箱"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">绑定安全问题</h4></div>
          <div class="modal-body">
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">@</span>
                <input type="password" class="form-control" placeholder="验证绑定邮箱"></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-question-sign"></i>
                </span>
                <select class="form-control">
                  <option value="0" selected="selected" label="我最喜欢的一组数字？">我最喜欢的一组数字？</option>
                  <option value="1" label="我最喜欢的国家或城市？">我最喜欢的国家或城市？</option>
                  <option value="2" label="我最喜欢的一首歌？">我最喜欢的一首歌？</option>
                  <option value="3" label="我最喜欢的人生格言？">我最喜欢的人生格言？</option></select>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-comment"></i>
                </span>
                <input type="text" class="form-control" placeholder="安全问题回答1" /></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-question-sign"></i>
                </span>
                <select class="form-control">
                  <option value="0" selected="selected" label="我最喜欢的一组数字？">我最喜欢的一组数字？</option>
                  <option value="1" label="我最喜欢的国家或城市？">我最喜欢的国家或城市？</option>
                  <option value="2" label="我最喜欢的一首歌？">我最喜欢的一首歌？</option>
                  <option value="3" label="我最喜欢的人生格言？">我最喜欢的人生格言？</option></select>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-comments"></i>
                </span>
                <input type="text" class="form-control" placeholder="安全问题回答2" /></div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-question-sign"></i>
                </span>
                <select class="form-control">
                  <option value="0" selected="selected" label="我最喜欢的一组数字？">我最喜欢的一组数字？</option>
                  <option value="1" label="我最喜欢的国家或城市？">我最喜欢的国家或城市？</option>
                  <option value="2" label="我最喜欢的一首歌？">我最喜欢的一首歌？</option>
                  <option value="3" label="我最喜欢的人生格言？">我最喜欢的人生格言？</option></select>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-comments"></i>
                </span>
                <input type="text" class="form-control" placeholder="安全问题回答3" /></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe7" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">申请谷歌验证</h4></div>
          <div class="modal-body text-center">
            <h4>二维码方式添加</h4>
            <p>请在Google身份验证器中采用扫描条形码方式添加</p>
            <div class="img text-center" style="padding: 15px;">
              <img src="./../../assets/images/code.png" class="img-responsive center-block" /></div>
            <h4>密钥的方式添加</h4>
            <p>请在Google身份验证器中采用输入提供的密钥方式添加</p>
            <div>
              <i class="icon-key"></i>密钥如下所示：</div>
            <div>
              <b>KRCE ST2K GI3T GNJW</b>
            </div>
            <div class="modal-form">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="icon-key"></i>
                </span>
                <input type="password" class="form-control" placeholder="谷歌6位动态密码"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">下一步</button></div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal-safe8" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">请在微信中 -> 发现 -> 扫一扫快速绑定</h4></div>
          <div class="modal-body text-center">
            <div class="img text-center" style="padding: 15px;">
              <img src="./../../assets/images/code.png" class="img-responsive center-block" /></div>
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
