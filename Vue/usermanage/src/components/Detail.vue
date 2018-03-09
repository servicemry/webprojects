<template>
  <div class="detail container">
    <h1 class="page-header">用户详情</h1>
    <div class="well">
      <div class="navbar-right"><router-link to="/" class="btn btn-default btn-lg">返回</router-link></div>
      <h4><i class="glyphicon glyphicon-user"><span>{{user.name}}</span></i></h4>
      <ul>
        <li><i class="glyphicon glyphicon-phone"><span>{{user.phone}}</span></i></li>
        <li><i class="glyphicon glyphicon-record"><span>{{user.age}}</span></i></li>
        <li><i class="glyphicon glyphicon-envelope"><span>{{user.email}}</span></i></li>
        <li><i class="glyphicon glyphicon-modal-window"><span>{{user.remark}}</span></i></li>
      </ul>
      <div class="page-footer text-right">
        <router-link v-bind:to="'/edit/'+id" class="btn btn-primary btn-lg">修改</router-link>
        <button class="btn btn-danger btn-lg" v-on:click="removeUser">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id:'',
      user:{}
    }
  },
  created () {
    this.id=this.$route.params.id;
    this.$axios.get("https://wd1904176496xtlzpc.wilddogio.com/users/"+this.id+".json")
    .then((response)=>{
      this.user=response.data;
    })
  },
  methods:{
    removeUser:function(){
      this.$axios.delete("https://wd1904176496xtlzpc.wilddogio.com/users/"+this.id+".json")
      .then((response)=>{
       this.$store.commit('operationStatus',"删除成功！")
       this.$router.push({path:'/'})
      })
    }
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
  padding: 8px;
}
span{
  margin-left: 1em;
}
button{
  margin-left: 10px;
}
</style>
