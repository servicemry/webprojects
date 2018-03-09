<template>
  <div class="adduser container">
    <Info v-if="msg" v-bind:message="msg"></Info>
    <h1 class=" header">添加用户</h1>
  <form v-on:submit="addUser">
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
import Info from './Info'
export default {
  name: 'adduser',
  data () {
    return {
      msg: '',
      user:{}
    }
  },
  methods: {
    addUser:function(e){
      e.preventDefault();//阻止表单提交
      if(!this.user.name||!this.user.phone||!this.user.age||!this.user.email)
      {
        this.msg="请输入相关信息";
      }else{
        this.$axios.post('https://wd1904176496xtlzpc.wilddogio.com/users.json',this.user)
        .then((result)=>{
          this.$store.commit('operationStatus',"添加成功！")
          this.$store.commit('addUser',this.user)
          this.$router.push({path:'/'})
          this.user={};
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
