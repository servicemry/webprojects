<template>
  <div class="CustomerDetail container">
    <router-link to="/" class="btn btn-default">返回</router-link>
	<h1 class="page-header">
    {{customer.name}}
    <span class="pull-right">
      <router-link class="btn btn-default" v-bind:to="'/edit/'+customer.id">编辑</router-link>
      <button class="btn btn-primary" v-on:click="deleteCustomer(customer.id)">删除</button>
    </span>
  </h1>
  <ul class="list-group">
    <li class="list-group-item"><span class="glyphicon glyphicon-unchecked">{{customer.email}}</span></li>
    <li class="list-group-item"><span class="glyphicon glyphicon-phone">{{customer.phone}}</span></li>
    <li class="list-group-item"><span class="glyphicon glyphicon-record">{{customer.age}}</span></li>
  </ul>
  </div>
</template>

<script>

export default {
  name: 'CustomerDetail',
  data () {
    return {
      customer:{}
    }
  },
  methods:{
    fetchCustomerDetail(id){
      this.$http.get("http://localhost:3000/users/"+id)
      .then(function(response){
        this.customer=response.body
      })
    },
    deleteCustomer(id){
      this.$http.delete("http://localhost:3000/users/"+id)
      .then(function(response){
        this.$router.push({path:"/",query:{alert:"用户删除成功!"}});
      })
    }
  },
  created(){
      this.fetchCustomerDetail(this.$route.params.id)
    }
}

</script>

<style scoped>

</style>
