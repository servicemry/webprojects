<template>
  <div class="Add container">
    <Alert v-if="alert" v-bind:msg="alert"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addCustomer">
    	<div class="well">
    		<h4>用户信息</h4>
    		<div class="form-group">
    			<label>姓名</label>
    			<input type="text" class="form-control" placeholder="name" v-model="customer.name"></input>
    		</div>

    		<div class="form-group">
    			<label>电话</label>
    			<input type="text" class="form-control" placeholder="phone" v-model="customer.phone"></input>
    		</div>

    		<div class="form-group">
    			<label>年龄</label>
    			<input type="text" class="form-control" placeholder="age" v-model="customer.age"></input>
    		</div>

    		<div class="form-group">
    			<label>邮箱</label>
    			<input type="text" class="form-control" placeholder="email" v-model="customer.email"></input>
    		</div>

    		<button type="submit" class="btn btn-primary">添加</button>
    	</div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'//引入组件
export default {
  name: 'Add',
  data () {
    return {
    	customer:{},
      alert:""
    }
  },
  methods: {
  	addCustomer(e){
  		if(!this.customer.name || !this.customer.phone || !this.customer.email){
  			this.alert="请输入对应信息";
  		}else{
  			let newCustomer={
  				name:this.customer.name,
  				phone:this.customer.phone,
  				email:this.customer.email,
  				age:this.customer.age
  			}

  			this.$http.post('http://localhost:3000/users', newCustomer)
  			.then(function(response){
  				this.$router.push({path:"/",query:{alert:"用户添加成功！"}})//设置路由跳转
  			})
  		}
  		e.preventDefault();
  	}

  },
  components:{//使用组件
    Alert
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
