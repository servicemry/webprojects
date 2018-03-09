<template>
  <div class="row mt-3">
   <div class="col-md-12 col-lg-12">
     <div class="card">
       <div class="card-body">
         <img src="@/assets/icon.png" class=" mx-auto d-block">
         <form @submit.prevent="onSubmit">
           <div class="form-group">
             <label for="email">邮箱</label>
             <input v-model="email" type="email"  class="form-control"/>
           </div>

           <div class="form-group">
             <label for="password">密码</label>
             <input v-model="password" type="password"  class="form-control"/>
           </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
         </form>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        email:'',password:''
      }
    },
    // 组件内路由安全守卫：只要定向到login页面，就清除用户所有的状态
    beforeRouteEnter: (to, from, next) => {
      next(vm=>vm.$store.commit('setUserStatus',null))
    },
    methods: {
      onSubmit:function(){
        this.$axios.get("/users.json")
        .then(res=>{
          let users=[]
          for(let key in res.data){
            let user=res.data[key];
            users.push(user);
          }

          let result=users.filter(user=>{
            return user.email===this.email && user.password===this.password;
          })
          if(result!=null && result.length>0){
            // 将当前登录用户的信息状态存入vuex中
            this.$store.commit('setUserStatus',result[0].email)
            this.$router.push({path:'/home'})
          }else{
            // 清空当前用户所有信息
            this.$store.commit('setUserStatus',null)
            alert("账号或者密码错误")
          }
        })
      }
    }
  }
</script>

