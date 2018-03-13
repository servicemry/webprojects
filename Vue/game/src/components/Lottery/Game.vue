<template>
  <div>
    <!--头部-->
    <main-header></main-header>
    <!--结束头部-->
    <!--左边菜单-->
    <main-lefter></main-lefter>
    <!--结束左边菜单-->
   <div class="iframeBox">
        <div class="gameIframeBox">
          <!-- 移动端下显示余额，充值提款 -->
          <show-info></show-info>
          <!-- 结束 移动端下显示余额，充值提款 -->
            <div class="gamePageBox">
                <!--开奖-->
          <div class="container-fluid game-head ">
            <div class="row">
              <div class="pull-left game-logo">
                <h1>重庆
                  <b>时时彩</b>
                </h1>
                <p>LOTTERY</p>
              </div>
              <div class="pull-left hidden-xs">
                <div class="time-wrap">
                  <div class="title">正在销售第
                    <b>20170217-067</b>期</div>
                  <div class="time">
                    <span>截止时间</span>
                    <div class="visible-sm visible-xs"></div>
                    <span class="timeBox ">00:00:15</span></div>
                </div>
              </div>
              <div class="pull-left kaijiang-row">
                <div class="kaijiang-wrap">
                  <div class="title">
                    <b>20170217-067</b>期开奖号码</div>
                  <div class="time">
                    <div class="kj-ball-row">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span></div>
                  </div>
                </div>
              </div>
              <div class="pull-right">
                <div class="btns">
                  <div class="div-table">
                    <div class="col">
                      <router-link to="/game">近期开奖</router-link>
                      <router-link to="/game">最佳走势</router-link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 开奖结束 -->

          <div class="container-fluid game-body">
              <!-- 玩法开始 -->
              <div class="game-play row hidden-sm hidden-xs">
              <div class="col-sm-10">
                <ul class="list-unstyled game-play-select">
                  <li class="cur">
                    <a href="javascript:;">五星</a></li>
                  <li>
                    <a href="javascript:;">四星</a></li>
                  <li>
                    <a href="javascript:;">后三</a></li>
                  <li>
                    <a href="javascript:;">前三</a></li>
                  <li>
                    <a href="javascript:;">后二</a></li>
                  <li>
                    <a href="javascript:;">前二</a></li>
                  <li>
                    <a href="javascript:;">定位胆</a></li>
                  <li>
                    <a href="javascript:;">不定位</a></li>
                  <li>
                    <a href="javascript:;">龙虎</a></li>
                  <li>
                    <a href="javascript:;">大小单双</a></li>
                  <li>
                    <a href="javascript:;">任选玩法</a></li>
                </ul>
              </div>
              <div class="col-sm-2 text-right hidden-sm hidden-xs">
                <ul class="list-unstyled pull-right">
                  <li>
                    <a href="javascript:;">
                      <i class="icon-question-sign"></i>玩法介绍</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="game-play2 row hidden-sm hidden-xs">
              <ul class="list-unstyled game-play-select">
                <li class="label">五星直选</li>
                <li>
                  <a href="javascript:;">直选复式</a></li>
                <li>
                  <a href="javascript:;">直选单式</a></li>
                <li>
                  <a href="javascript:;">直选和值</a></li>
              </ul>
            </div>
            <div class="game-play2 row hidden-sm hidden-xs">
              <ul class="list-unstyled game-play-select">
                <li class="label">五星组选</li>
                <li>
                  <a href="javascript:;">组选120</a></li>
                <li>
                  <a href="javascript:;">组选60</a></li>
                <li>
                  <a href="javascript:;">组选30</a></li>
                <li>
                  <a href="javascript:;">组选20</a></li>
                <li>
                  <a href="javascript:;">组选10</a></li>
                <li>
                  <a href="javascript:;">组选5</a></li>
              </ul>
            </div>
            <div class="game-play2 row hidden-sm hidden-xs">
              <ul class="list-unstyled game-play-select">
                <li class="label">五星特殊</li>
                <li>
                  <a href="javascript:;">一帆风顺</a></li>
                <li>
                  <a href="javascript:;">双喜临门</a></li>
                <li>
                  <a href="javascript:;">三星报喜</a></li>
                <li>
                  <a href="javascript:;">四季发财</a></li>
              </ul>
            </div>
            <div class="game-play-help row hidden-sm hidden-xs" style="display: none;">
              <div class="inner">
                <i class="fa fa-question-circle"></i>从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注。 从万位、千位、百位、十位、个位中至少两位上各选1个号码组成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。 投注方案：万位5，百位8;开奖号码：51812，即中任二直选。</div>
            </div>

            <!--移动端用的玩法 启动 select-->
            <div class="game-play row hidden-md hidden-lg">
              <div class="col-sm-12">
                <select name="">
                  <option value="">五星</option>
                  <option value="">四星</option>
                  <option value="">三星</option></select>
                <select name="">
                  <option value="">五星直选</option>
                  <option value="">直选复式</option>
                  <option value="">直选单式</option>
                  <option value="">直选组合</option></select>
                <select name="">
                  <option value="">五星组选</option>
                  <option value="">直组选120</option>
                  <option value="">组选60</option>
                  <option value="">组合30</option>
                  <option value="">组选20</option>
                  <option value="">组选10</option>
                  <option value="">组选5</option></select>
                <select name="">
                  <option value="">五星特殊</option>
                  <option value="">一帆风顺</option>
                  <option value="">好事成双</option>
                  <option value="">三星报喜</option>
                  <option value="">四季发财</option>
                  <option value="">龙和虎</option>
                  <option value="">总和</option>
                  <option value="">斗牛</option>
                  <option value="">梭哈</option></select>
              </div>
            </div>

            <div class="game-ball-rows">
              <div class="game-ball-row row">
                <div class="title pull-left">
                  <strong>万位</strong></div>
                <div class="pull-right balls-action">
                  <a href="javascript:;">全</a>
                  <a href="javascript:;">大</a>
                  <a href="javascript:;">小</a>
                  <a href="javascript:;">奇</a>
                  <a href="javascript:;">偶</a>
                  <a href="javascript:;">清</a></div>
                <div class="balls pull-left">
                  <div class="a">
                    <a href="javascript:;" class="on">0</a></div>
                  <div class="a">
                    <a href="javascript:;">1</a></div>
                  <div class="a">
                    <a href="javascript:;">2</a></div>
                  <div class="a">
                    <a href="javascript:;">3</a></div>
                  <div class="a">
                    <a href="javascript:;">4</a></div>
                  <div class="a">
                    <a href="javascript:;">5</a></div>
                  <div class="a">
                    <a href="javascript:;">6</a></div>
                  <div class="a">
                    <a href="javascript:;">7</a></div>
                  <div class="a">
                    <a href="javascript:;">8</a></div>
                  <div class="a">
                    <a href="javascript:;">9</a></div>
                </div>
              </div>
              <div class="game-ball-row row">
                <div class="title pull-left">
                  <strong>千位</strong></div>
                <div class="pull-right balls-action">
                  <a href="javascript:;">全</a>
                  <a href="javascript:;">大</a>
                  <a href="javascript:;">小</a>
                  <a href="javascript:;">奇</a>
                  <a href="javascript:;">偶</a>
                  <a href="javascript:;">清</a></div>
                <div class="balls pull-left">
                  <div class="a">
                    <a href="javascript:;" class="on">0</a></div>
                  <div class="a">
                    <a href="javascript:;">1</a></div>
                  <div class="a">
                    <a href="javascript:;">2</a></div>
                  <div class="a">
                    <a href="javascript:;">3</a></div>
                  <div class="a">
                    <a href="javascript:;">4</a></div>
                  <div class="a">
                    <a href="javascript:;">5</a></div>
                  <div class="a">
                    <a href="javascript:;">6</a></div>
                  <div class="a">
                    <a href="javascript:;">7</a></div>
                  <div class="a">
                    <a href="javascript:;">8</a></div>
                  <div class="a">
                    <a href="javascript:;">9</a></div>
                </div>
              </div>
              <div class="game-ball-row row">
                <div class="title pull-left">
                  <strong>百位</strong></div>
                <div class="pull-right balls-action">
                  <a href="javascript:;">全</a>
                  <a href="javascript:;">大</a>
                  <a href="javascript:;">小</a>
                  <a href="javascript:;">奇</a>
                  <a href="javascript:;">偶</a>
                  <a href="javascript:;">清</a></div>
                <div class="balls pull-left">
                  <div class="a">
                    <a href="javascript:;" class="on">0</a></div>
                  <div class="a">
                    <a href="javascript:;">1</a></div>
                  <div class="a">
                    <a href="javascript:;">2</a></div>
                  <div class="a">
                    <a href="javascript:;">3</a></div>
                  <div class="a">
                    <a href="javascript:;">4</a></div>
                  <div class="a">
                    <a href="javascript:;">5</a></div>
                  <div class="a">
                    <a href="javascript:;">6</a></div>
                  <div class="a">
                    <a href="javascript:;">7</a></div>
                  <div class="a">
                    <a href="javascript:;">8</a></div>
                  <div class="a">
                    <a href="javascript:;">9</a></div>
                </div>
              </div>
              <div class="game-ball-row row">
                <div class="title pull-left">
                  <strong>十位</strong></div>
                <div class="pull-right balls-action">
                  <a href="javascript:;">全</a>
                  <a href="javascript:;">大</a>
                  <a href="javascript:;">小</a>
                  <a href="javascript:;">奇</a>
                  <a href="javascript:;">偶</a>
                  <a href="javascript:;">清</a></div>
                <div class="balls pull-left">
                  <div class="a">
                    <a href="javascript:;" class="on">0</a></div>
                  <div class="a">
                    <a href="javascript:;">1</a></div>
                  <div class="a">
                    <a href="javascript:;">2</a></div>
                  <div class="a">
                    <a href="javascript:;">3</a></div>
                  <div class="a">
                    <a href="javascript:;">4</a></div>
                  <div class="a">
                    <a href="javascript:;">5</a></div>
                  <div class="a">
                    <a href="javascript:;">6</a></div>
                  <div class="a">
                    <a href="javascript:;">7</a></div>
                  <div class="a">
                    <a href="javascript:;">8</a></div>
                  <div class="a">
                    <a href="javascript:;">9</a></div>
                </div>
              </div>
              <div class="game-ball-row row">
                <div class="title pull-left">
                  <strong>个位</strong></div>
                <div class="pull-right balls-action">
                  <a href="javascript:;">全</a>
                  <a href="javascript:;">大</a>
                  <a href="javascript:;">小</a>
                  <a href="javascript:;">奇</a>
                  <a href="javascript:;">偶</a>
                  <a href="javascript:;">清</a></div>
                <div class="balls pull-left">
                  <div class="a">
                    <a href="javascript:;" class="on">0</a></div>
                  <div class="a">
                    <a href="javascript:;">1</a></div>
                  <div class="a">
                    <a href="javascript:;">2</a></div>
                  <div class="a">
                    <a href="javascript:;">3</a></div>
                  <div class="a">
                    <a href="javascript:;">4</a></div>
                  <div class="a">
                    <a href="javascript:;">5</a></div>
                  <div class="a">
                    <a href="javascript:;">6</a></div>
                  <div class="a">
                    <a href="javascript:;">7</a></div>
                  <div class="a">
                    <a href="javascript:;">8</a></div>
                  <div class="a">
                    <a href="javascript:;">9</a></div>
                </div>
              </div>
              <!--输入号码-->
              <div class="game-ball-row row" style="display: none;">
                <div class="col-md-9">
                  <textarea name="" rows="4" cols="" style="width: 100%; border: 0; padding: 8px;"></textarea>
                </div>
                <div class="col-md-3">
                  <button type="button" class="btn btn-info btn-block">删除重复号</button>
                  <button type="button" class="btn btn-info  btn-block">导入文件</button>
                  <button type="button" class="btn btn-info  btn-block">清空</button></div>
              </div>
            </div>

            <!--统计-->
            <div class="game-play-action row">
              <div class="col-xs-12">
                <div class="pull-left">共 0 注，计 0 元</div>
                <div class="pull-left">
                  <div class="pull-left">单注金额</div>
                  <div class="input-group">
                    <span class="input-group-addon">+</span>
                    <input type="text" class="form-control" aria-label="" value="1">
                    <span class="input-group-addon">-</span></div>
                </div>
                <div class="pull-left">
                  <div class="pull-left">倍数</div>
                  <div class="input-group">
                    <span class="input-group-addon">+</span>
                    <input type="text" class="form-control" aria-label="" value="1">
                    <span class="input-group-addon">-</span></div>
                </div>
                <div class="pull-left">
                  <div class="pull-left">奖金</div>
                  <div class="input-group" style="width: 150px;">
                    <input type="text" class="form-control J-fandian-input" value="195600~0%">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                          <a href="javascript:;">195600~0%</a>
                        </li>
                      </ul>
                    </div>
                    <!-- /btn-group --></div>
                  <!-- /input-group --></div>
                
                <div class="pull-right">
                  <button type="button" class="btn btn-blue">添加投注</button>
                  <button type="button" class="btn btn-blue">一键投注</button></div>
              </div>
            </div>
            

            <!--圆角分-->
            <div class="row yjf-row">
              <div class="col-xs-12">
                <div class="pull-left">快速选择单注金额</div>
                <div class="pull-left">
                  <a href="javascript:;" class="cur">圆</a>
                  <a href="">角</a>
                  <a href="">分</a>
                  <a href="">厘</a>
                </div>
              </div>
            </div>
            <div class="lotteryBottom row">
              <div class="col-md-9 ">
                <div class="car-listBox">
                  <div class="hd">
                    <span class="pull-right">
                      <a href="javascript:;" class="">
                        <i class="icon-trash icon-large"></i>清除</a>
                    </span>彩票购物车：总注数[0]注，总投注金额[0]元，预计总奖金[]元。</div>
                  <div class="bd">
                    <div class="car-item">
                      <div class="pull-right">
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;" data-toggle="modal" data-target="#order-info-1">详情</a></div>
                      <div class="ddd">[重庆时时彩]-[五星]-[直选复式]：[2]元一注，[1]倍，共[625]注，花费[1250]元。投注码：7,13579,13579,01234,01234</div></div>
                    <div class="car-item">
                      <div class="pull-right">
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;" data-toggle="modal" data-target="#order-info-1">详情</a></div>
                      <div class="ddd">[重庆时时彩]-[五星]-[直选复式]：[2]元一注，[1]倍，共[625]注，花费[1250]元。投注码：7,13579,13579,01234,01234</div></div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-right">
                <button type="button" class="btn btn-danger">
                  <i class="icon-ok-sign"></i>&nbsp;添加投注</button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#zhuihao-box">
                  <i class="icon-reorder"></i>&nbsp;智能追号</button>
              </div>
            </div>

            <!--投注历史-->
            <div class="tz-history hidden-xs ">
              <div class="game-play row">
                <div class="col-sm-12">
                  <ul class="list-unstyled game-play-select" role="tablist">
                    <li class="active" role="presentation">
                      <a href="#item-box1" aria-controls="item-box1" role="tab" data-toggle="tab">最近投注</a></li>
                    <li role="presentation">
                      <a href="#item-box2" aria-controls="item-box2" role="tab" data-toggle="tab">最近追号</a></li>
                    <li role="presentation">
                      <a href="#item-box3" aria-controls="item-box3" role="tab" data-toggle="tab">最近账变</a></li>
                    <li role="presentation">
                      <a href="#item-box4" aria-controls="item-box4" role="tab" data-toggle="tab">最近盈亏</a></li>
                  </ul>
                </div>
              </div>
              <div class="table-boxs tab-content">
                <div id="item-box1" role="tabpanel" class="tab-pane fade in active">
                  <div class="table-responsive">
                    <table class="table table-condensed table-hover">
                      <thead>
                        <tr>
                          <th>方案号</th>
                          <th>彩种</th>
                          <th>玩法</th>
                          <th>期号</th>
                          <th>时间</th>
                          <th>单注金额</th>
                          <th>倍数</th>
                          <th>投注金额</th>
                          <th>中奖号码</th>
                          <th>中奖金额</th>
                          <th>状态</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>data</td>
                          <td>data</td>
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
                <div id="item-box2" role="tabpanel" class="tab-pane fade">
                  <div class="table-responsive">
                    <table class="table table-condensed table-hover">
                      <thead>
                        <tr>
                          <th>方案号</th>
                          <th>彩种</th>
                          <th>玩法</th>
                          <th>时间</th>
                          <th>注数</th>
                          <th>金额</th>
                          <th>类型</th>
                          <th>期数</th>
                          <th>完成数</th>
                          <th>状态</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>data</td>
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
                <div id="item-box3" role="tabpanel" class="tab-pane fade">
                  <div class="table-responsive">
                    <table class="table table-condensed table-hover">
                      <thead>
                        <tr>
                          <th>流水号</th>
                          <th>单号</th>
                          <th>类型</th>
                          <th>时间</th>
                          <th>金额</th>
                          <th>余额</th>
                          <th>备注</th></tr>
                      </thead>
                      <tbody>
                        <tr>
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
                <div id="item-box4" role="tabpanel" class="tab-pane fade">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr>
                          <th>温馨提示</th>
                          <td colspan="5">最近盈亏只显示当天的盈亏详情</td></tr>
                        <tr>
                          <th>总盈利</th>
                          <td>0</td>
                          <th>消费</th>
                          <td>0</td>
                          <th>中奖</th>
                          <td>0</td></tr>
                        <tr>
                          <th>充值</th>
                          <td>0</td>
                          <th>提款</th>
                          <td>0</td>
                          <th>奖励</th>
                          <td>0</td></tr>
                        <tr>
                          <th>活动</th>
                          <td>0</td>
                          <th>返点</th>
                          <td colspan="3">0</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
            </div>
        </div>
   </div>


    <!--查看订单详情弹出框-->
    <div class="modal fade" tabindex="-1" role="dialog" id="order-info-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">订单详情</h4></div>
          <div class="modal-body">
            <table class="table table-hover table-noborder">
              <tr>
                <th>彩种</th>
                <td>重庆时时彩</td></tr>
              <tr>
                <th>金额</th>
                <td>3000元</td></tr>
              <tr>
                <th>data</th>
                <td>data</td></tr>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button></div>
        </div>
        </div>
     </div>
    <!--查看订单详情弹出框-->
    
    <!--追号-->
    <div class="modal fade zhuihao-box" tabindex="-1" role="dialog" id="zhuihao-box">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">追号：共【9】注，追【0】期，累计投注金额【0】元。</h4></div>
          <div class="modal-body">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#zhuihao-box1" aria-controls="#zhuihao-box1" role="tab" data-toggle="tab">利润率追号</a></li>
              <li role="presentation">
                <a href="#zhuihao-box2" aria-controls="#zhuihao-box2" role="tab" data-toggle="tab">同倍追号</a></li>
              <li role="presentation">
                <a href="##zhuihao-box3" aria-controls="#zhuihao-box3" role="tab" data-toggle="tab">翻倍字号</a></li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
              <div class="container-fluid form-inline">
                <div class="row">
                  <span class="pull-left">最低收益率：
                    <input type="text" class="form-control">%，</span>
                  <span class="pull-left">起始倍数：
                    <input type="text" class="form-control">倍，</span>
                  <span class="pull-left">隔
                    <input type="text" class="form-control">期倍数</span>
                  <span class="pull-left">x
                    <input type="text" class="form-control">倍，</span>
                  <span class="pull-left">追号期数：
                    <input type="text" class="form-control">期。</span>
                  <span class="pull-right">
                    <button type="button" class="btn btn-info">
                      <i class="icon-screenshot"></i>生成追号计划</button>
                  </span>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane active" id="zhuihao-box1">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <th>追号期次</th>
                        <th>倍数</th>
                        <th>金额</th>
                        <th>奖金</th>
                        <th>当前投注金额</th>
                        <th>预期盈利金额</th>
                        <th>预期盈利率</th></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td>
                        <td>20元</td>
                        <td>20元</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="zhuihao-box2">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <th>追号期次</th>
                        <th>倍数</th>
                        <th>金额</th>
                        <th>奖金</th>
                        <th>当前投注金额</th></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="zhuihao-box3">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr>
                        <th>追号期次</th>
                        <th>倍数</th>
                        <th>金额</th>
                        <th>奖金</th>
                        <th>当前投注金额</th></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td></tr>
                      <tr>
                        <td>第1期</td>
                        <td>
                          <input type="text" style="width:50px;text-align:center;border: 1px solid #A9A9A9;">倍</td>
                        <td>￥18元</td>
                        <td>￥39120元</td>
                        <td>￥18元</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确定</button></div>
        </div>
        <!-- /.modal-content --></div>
      <!-- /.modal-dialog --></div>
    <!-- /.modal -->




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
  body { background: #B2B1B3; } 
  .gameIframeBox { max-width: 960px; margin: 0 auto; }
  </style>
  