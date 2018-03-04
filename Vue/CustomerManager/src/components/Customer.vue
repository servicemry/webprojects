<template>
  <div class="Customer container">
    <Alert v-if="alert" v-bind:msg="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input class="form-control" placeholder="搜索" v-model="filterValue"></input>
    <br> 
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in filterBy(customers,filterValue)">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>
            <router-link v-bind:to="'/customer/'+item.id" class="btn btn-default">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Customer',
  data () {
    return {
      customers:[],
      alert:"",
      filterValue:""
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get("http://localhost:3000/users")
          .then(function(response){
            this.customers = response.body;
          })
    },
    filterBy(customers,value){//搜索过滤方法
      return customers.filter(function(customer) {
        if(customer.name.match(value)){
          return customer.name.match(value);
        }
        if(customer.phone.match(value)){
          return customer.phone.match(value);
        }
        if(customer.email.match(value)){
          return customer.email.match(value);
        }

      });
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert
    }
    this.fetchCustomers();
  },
  updated(){
    this.fetchCustomers();
  },
  components:{
    Alert
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
