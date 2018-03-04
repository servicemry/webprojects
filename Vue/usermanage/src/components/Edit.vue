<template>
  <div class="edit container">
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="editUser">
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
export default {
  name: 'edit',
  data () {
    return {
      user:{},
      alert:""
    }
  },
  methods: {
    getUserById(id){
      this.$http.get("http://localhost:3000/users/"+id)
      .then(function(response){
        this.user=response.body;
      });
    },
    editUser(){
      if(!this.user.phone||!this.user.name||!this.user.age||!this.user.email){
        this.msg="请输入对应信息"
      }else{
        this.newuser={ name:this.user.name,age:this.user.age,phone:this.user.phone,email:this.user.email}
        this.$http.put("http://localhost:3000/users/"+this.$route.params.id,this.newuser)
        .then(function(response){
          this.$router.push({path:'/',query:{msg:"用户修改成功"}})
          
        })
      }
      
    }
  },
  created(){
    this.getUserById(this.$route.params.id)
  }
}
</script>