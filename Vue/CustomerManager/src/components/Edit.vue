  <template>
  <div class="Edit container">
  	<Alert v-if="alert" v-bind:msg="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form v-on:submit="updateCustomer">
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

    		<button type="submit" class="btn btn-primary">修改</button>
    	</div>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'Edit',
  data () {
    return {
    	customer:{},
    	alert:""
    }
  },
  methods: {
  	fetchCustomerById(id){
  		this.$http.get("http://localhost:3000/users/"+id)
  		.then(function(response){
  			this.customer=response.body;
  		})
  	},
  	updateCustomer(e){
  		if(!this.customer.name || !this.customer.phone || !this.customer.email){
  			this.alert="请输入对应信息";
  		}else{
  			let newCustomer={
  				name:this.customer.name,
  				phone:this.customer.phone,
  				email:this.customer.email,
  				age:this.customer.age
  			}

  			this.$http.put('http://localhost:3000/users/'+this.$route.params.id, newCustomer)
  			.then(function(response){
  				this.$router.push({path:"/",query:{alert:"用户修改成功！"}})//设置路由跳转
  			})
  		}
  		e.preventDefault();
  	}

  },
  	created(){
  		this.fetchCustomerById(this.$route.params.id);
  	},
  	components:{
  		Alert
  	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
