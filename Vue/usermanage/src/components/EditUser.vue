<template>
  <div class="editUser container">
    <h1 class=" header">添加用户</h1>
  <form v-on:submit="editUser">
    <div class="well">
      <h3>用户信息</h3>
      <div class="form-group">
         <label for="">姓名</label>
         <input type="text" class=" form-control" placeholder="name" v-model="user.name"/>
       </div>

       <div class="form-group">
         <label for="">年龄</label>
         <input type="text" class=" form-control" placeholder="age" v-model="user.age"/>
       </div>

       <div class="form-group">
         <label for="">电话</label>
         <input type="text" class=" form-control" placeholder="phone" v-model="user.phone"/>
       </div>

       <div class="form-group">
         <label for="">邮件</label>
         <input type="text" class=" form-control" placeholder="email" v-model="user.email"/>
       </div>

       <div class="form-group">
         <label for="">备注</label>
         <textarea type="text" class=" form-control" placeholder="remark" rows="5" v-model="user.remark"/>
       </div>

       <div class="from-group">
         <button type="submit" class="btn btn-primary">提交</button>
       </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  name: 'editUser',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:{}
    }
  },
  methods: {
    editUser:function(e){
      e.preventDefault();//阻止表单提交
      if(!this.user.name||!this.user.phone||!this.user.age||!this.user.email)
      {
        console.log("请输入相关信息")
      }else{
        this.$axios.put("https://wd1904176496xtlzpc.wilddogio.com/users/"+this.$route.params.id+".json",this.user)
        .then((result)=>{
          this.user={};
          this.$router.push({path:'/',query:{msg:"修改成功！"}})
        }).catch((result)=>{
          console.log('修改失败')
        })
      }
    }
  },
  created(){
    this.$axios.get("https://wd1904176496xtlzpc.wilddogio.com/users/"+this.$route.params.id+".json")
    .then((response)=>{
      this.user=response.data;
    })
  }
}
</script>

<style scoped>

</style>
