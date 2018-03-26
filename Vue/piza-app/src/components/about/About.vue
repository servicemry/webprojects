<template>
  <div class="about">
    <div class="row mb-5">
        <!-- 导航 -->
        <div class="col-4">
          <div class="list-group mb-5">
            <router-link to="/about/history" class="nav-link">
              <a class="list-group-item list-group-item-action">历史订单</a>
            </router-link>

            <router-link to="/about/concat" class="nav-link">
              <a class="list-group-item list-group-item-action">联系我们</a>
            </router-link>

            <router-link to="/about/document" class="nav-link">
              <a class="list-group-item list-group-item-action">订餐文档</a>
            </router-link>

            <router-link to="/about/express" class="nav-link">
              <a class="list-group-item list-group-item-action">快递信息</a>
            </router-link>
          </div>
        </div>
        <!-- 显示内容 -->
        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>
