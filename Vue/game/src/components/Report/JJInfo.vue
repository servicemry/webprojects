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
            <a href="#tab-con1" class="btn active">时时彩</a>
            <a href="#tab-con2" class="btn">11选5</a>
            <a href="#tab-con3" class="btn">江苏快3</a>
            <a href="#tab-con4" class="btn">北京快乐8</a>
            <a href="#tab-con5" class="btn">北京PK10</a>
            <a href="#tab-con6" class="btn">福彩3D/排列3</a>
            <a href="#tab-con7" class="btn">PC蛋蛋</a></div>
          <h3>奖金详情</h3></div>
        <div class="main-bd bonus-Details">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>彩种</th>
                  <th>玩法组</th>
                  <th>类别</th>
                  <th>奖金</th></tr>
              </thead>
              <!-- ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">五星直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">195,600.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="5" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="5" class="ng-binding ng-scope">五星组合</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">一等奖:五星</td>
                  <td class="ng-binding">195,600.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">二等奖:四星</td>
                  <td class="ng-binding">19,560.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">三等奖:三星</td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">四等奖:二星</td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">五等奖:一星</td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="6" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="6" class="ng-binding ng-scope">五星组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">组选120</td>
                  <td class="ng-binding">1,630.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选60</td>
                  <td class="ng-binding">3,260.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选30</td>
                  <td class="ng-binding">6,520.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选20</td>
                  <td class="ng-binding">9,780.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选10</td>
                  <td class="ng-binding">19,560.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选5</td>
                  <td class="ng-binding">39,120.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="19" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="19" class="ng-binding ng-scope">五星特殊</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">四季发财</td>
                  <td class="ng-binding">4,252.17</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">三星报喜</td>
                  <td class="ng-binding">228.50</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">好事成双</td>
                  <td class="ng-binding">24.01</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">一帆风顺</td>
                  <td class="ng-binding">4.78</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">龙</td>
                  <td class="ng-binding">4.35</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">虎</td>
                  <td class="ng-binding">4.35</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">和</td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">总和大、小、单、双</td>
                  <td class="ng-binding">3.91</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">没牛</td>
                  <td class="ng-binding">5.46</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">牛牛、牛一、牛二、牛三、牛四、牛五、牛六、牛七、牛八、牛九</td>
                  <td class="ng-binding">30.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">牛单、牛双、牛大、牛小</td>
                  <td class="ng-binding">6.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">五条</td>
                  <td class="ng-binding">195.62</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">四条</td>
                  <td class="ng-binding">173.89</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">三条</td>
                  <td class="ng-binding">27.17</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">两对</td>
                  <td class="ng-binding">17.93</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">一对</td>
                  <td class="ng-binding">3.80</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">葫芦</td>
                  <td class="ng-binding">151.88</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">顺子</td>
                  <td class="ng-binding">130.42</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">散号</td>
                  <td class="ng-binding">6.25</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">四星直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">19,560.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="4" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="4" class="ng-binding ng-scope">四星组合</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">一等奖:四星</td>
                  <td class="ng-binding">19,560.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">二等奖:三星</td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">三等奖:二星</td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">四等奖:一星</td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="4" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="4" class="ng-binding ng-scope">四星组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">组选24</td>
                  <td class="ng-binding">815.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选12</td>
                  <td class="ng-binding">1,630.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选6</td>
                  <td class="ng-binding">3,260.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选4</td>
                  <td class="ng-binding">4,890.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">后三直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="3" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="3" class="ng-binding ng-scope">后三组合</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">一等奖:三星</td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">二等奖:二星</td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">三等奖:一星</td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="2" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="2" class="ng-binding ng-scope">后三组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">组三</td>
                  <td class="ng-binding">652.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组六</td>
                  <td class="ng-binding">326.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">后三和值尾数</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="5" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="5" class="ng-binding ng-scope">后三特殊</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">豹子</td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">顺子</td>
                  <td class="ng-binding">32.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">对子</td>
                  <td class="ng-binding">7.17</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">半顺</td>
                  <td class="ng-binding">5.41</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">杂六</td>
                  <td class="ng-binding">3.78</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">前三直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="3" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="3" class="ng-binding ng-scope">前三组合</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">一等奖:三星</td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">二等奖:二星</td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">三等奖:一星</td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="2" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="2" class="ng-binding ng-scope">前三组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">组三</td>
                  <td class="ng-binding">652.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组六</td>
                  <td class="ng-binding">326.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">前三和值尾数</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="5" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="5" class="ng-binding ng-scope">前三特殊</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">豹子</td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">顺子</td>
                  <td class="ng-binding">32.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">对子</td>
                  <td class="ng-binding">7.17</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">半顺</td>
                  <td class="ng-binding">5.41</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">杂六</td>
                  <td class="ng-binding">3.78</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">后二直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">后二组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">97.80</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">前二直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">前二组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">97.80</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">定位胆</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">19.56</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">三星一码不定位</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">7.22</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">三星二码不定位</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">36.22</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">四星一码不定位</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">5.69</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">四星二码不定位</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">20.08</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">五星二码不定位</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">13.33</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">五星三码不定位</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">44.97</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">二星大小单双</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">7.82</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">三星大小单双</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">15.65</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">任二直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">195.60</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">任二组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">97.80</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">任三直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">1,956.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="2" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="2" class="ng-binding ng-scope">任三组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">组三</td>
                  <td class="ng-binding">652.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组六</td>
                  <td class="ng-binding">326.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="1" class="ng-binding ng-scope">任四直选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding"></td>
                  <td class="ng-binding">19,560.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata -->
              <tbody ng-repeat="m in acdata" class="ng-scope">
                <!-- ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="4" class="ng-scope">
                    <a class="ng-binding">时时彩</a></td>
                  <!-- end ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td ng-if="$index==0" rowspan="4" class="ng-binding ng-scope">任四组选</td>
                  <!-- end ngIf: $index==0 -->
                  <td class="ng-binding">组选24</td>
                  <td class="ng-binding">815.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选12</td>
                  <td class="ng-binding">1,630.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选6</td>
                  <td class="ng-binding">3,260.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss -->
                <tr ng-repeat="n in m.bonuss" class="ng-scope">
                  <!-- ngIf: $index==0 -->
                  <!-- ngIf: $index==0 -->
                  <td class="ng-binding">组选4</td>
                  <td class="ng-binding">4,890.00</td></tr>
                <!-- end ngRepeat: n in m.bonuss --></tbody>
              <!-- end ngRepeat: m in acdata --></table>
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

<style scoped>
@media (max-width:999px){ .main-hd{ height: auto;padding: 5px; } .main-hd h3{ display: none; } .main-hd .pull-right{ position: relative; top: 0;float: none!important; -webkit-transform: translateY(0); -moz-transform: translateY(0); -ms-transform: translateY(0); -o-transform: translateY(0); transform: translateY(0); } .main-hd .pull-right a{ margin: 5px; } }
</style>

