<template>
  <div class="add container">
    <Alert v-if="this.msg" v-bind:msg="this.msg"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addUser">
     <div class="well">
       <h4>用户信息</h4>
       <div class="form-group">
         <label for="">姓名</label>
         <input type="text" class=" form-control" placeholder="name" v-model="user.name"/>
       </div>
       <div class="form-group">
         <label for="">年龄</label>
         <input type="text" class=" form-control" placeholder="age"  v-model="user.age"/>
       </div>
       <div class="form-group">
         <label for="">电话</label>
         <input type="text" class=" form-control" placeholder="phone"  v-model="user.phone"/>
       </div>
       <div class="form-group">
         <label for="">邮箱</label>
         <input type="text" class=" form-control" placeholder="email"  v-model="user.email"/>
       </div>
       <div class="form-group">
         <button type="submit" class="btn btn-primary">提交</button>
       </div>
     </div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data () {
    return {
      user:{},
      newuser:{},
      msg:""
    }
  },
  methods: {
    addUser(){
      if(!this.user.phone||!this.user.name||!this.user.age||!this.user.email){
        this.msg="请输入对应信息"
      }else{
        this.newuser={ name:this.user.name,age:this.user.age,phone:this.user.phone,email:this.user.email}
        this.$http.post("http://localhost:3000/users",this.newuser)
        .then(function(response){
          this.$router.push({path:'/',query:{msg:"用户添加成功！"}})
        })
      }
      
    }
  },
  components: {
    Alert
  }
}
</script>