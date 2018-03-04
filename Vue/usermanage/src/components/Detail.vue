<template>
  <div class="detail container">
    <router-link to="/" class=" btn btn-default">返回</router-link>
    <h1 class="page-header">{{user.name}}
      <span class=" pull-right">
        <router-link v-bind:to="'/edit/'+user.id" class="btn btn-primary">编辑</router-link>
        <button type="button" class="btn btn-danger" v-on:click="removeUser(user.id)">删除</button>
      </span>
    <br>
    </h1>

    <div class="well">
      <ul class=" list-group">
        <li class=" list-group-item"><span class="glyphicon glyphicon-unchecked">{{user.age}}  </span></li>
        <li class=" list-group-item"><span class="glyphicon glyphicon-phone">{{user.phone}}</span></li>
        <li class=" list-group-item"><span class="glyphicon glyphicon-record">{{user.email}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      alert: "",
      user:{}
    }
  },
  methods: {
    getUserById(id){
      this.$http.get("http://localhost:3000/users/"+id)
      .then(function(response){
        this.user=response.body
      })
    },
    removeUser(id){
      this.$http.delete("http://localhost:3000/users/"+id)
      .then(function(response){
        this.$router.push({path:'/',query:{msg:"用户删除成功"}})
      })
    }
  },
  created(){
    this.getUserById(this.$route.params.id)
  }
}
</script>