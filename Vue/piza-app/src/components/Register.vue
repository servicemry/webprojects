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

           <div class="form-group">
             <label for="comfirmPassword">确认密码</label>
             <input v-model="comfirmPassword" type="password"  class="form-control"/>
           </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
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
        email:'',password:'',comfirmPassword:''
      }
    },
    methods: {
      onSubmit:function(){
        if(this.password===this.comfirmPassword){
          let user={
            email:this.email,
            password:this.password,
            comfirmPassword:this.comfirmPassword
          }

          this.$axios.post("/users.json",user)
          .then(res=>{
            this.$router.push({path:'/login'})
          })
        }else{
          alert("两次密码不一致")
        }
      }
    }
  }
</script>

