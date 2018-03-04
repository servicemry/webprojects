<template>
  <div class="users container">
    <Alert v-if="alert" v-bind:msg="alert"></Alert>
    <h1 class="page-header">用户管理</h1>

      <div class="input-group input-group col-lg-6">
     <input type="text" class="form-control" placeholder="键入内容" v-model="seachValue" aria-describedby="basic-addon2">
  <span class=" input-group-addon" id="basic-addon2">输入关键字自动查询</span>
      </div>
      <br>  

    <table class=" table table-bordered table-responsive">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in filterBy(items,seachValue)" :key="item.id">

          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td><router-link v-bind:to="'/detail/'+item.id" class="btn btn-default">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'//引入提示组件
export default {
  name: 'users',
  data () {
    return {
      alert:"",
      items:[],
      seachValue:""
    }
  },
  methods:{
    getUsers(){
      this.$http.get("http://localhost:3000/users")
      .then(function(response){
        this.items=response.body
      })
      // axios.get("http://localhost:3000/users")
      //   .then(function (response) {
      //   this.items=response.body;
      // }).catch(function (error) {
      //   console.log(error);
      // });
    },
    filterBy(items,value){//搜索过滤方法
      return items.filter(function(item) {
        if(item.name.match(value)){
          return item.name.match(value);
        }
        if(item.phone.match(value)){
          return item.phone.match(value);
        }
        if(item.email.match(value)){
          return item.email.match(value);
        }

      });
    }
  },
  created(){
   if(this.$route.query.msg){
      this.alert=this.$route.query.msg
    }
    this.getUsers();
  },
  updated(){
     this.getUsers();
  },
  components: {//在此页面注册提示组件
    Alert
  }
}
</script>