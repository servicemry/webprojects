<template>
  <div class="visible-sm visible-xs container-fluid">
        <div class="row btn-row">
          <div class="col-sm-6 text-center">
            <p>余额：
              <b>52133.64</b>冻结：
              <b>52133.64</b>
            </p>
          </div>
          <div class="col-sm-6 text-center">
           <router-link to="/beginpay" class="btn btn-info">充值</router-link>
              <router-link to="/withdraw" class="btn btn-success">提现</router-link>
              <router-link to="/login" class="btn btn-danger">退出</router-link>
              <router-link to="/" class="btn btn-danger">客服</router-link>
          </div>
        </div>
      </div>
</template>
