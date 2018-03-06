<template>
  <div class="usermanage container">
    <Info v-if="msg"  v-bind:message="msg"></Info>
    <div class="well">
       <h1 class="page-header">用户信息</h1> 
       <input type="text" class=" form-control" placeholder="请输入要搜索的内容" v-model="seach"><br>
       <table class=" table table-bordered">
         <thead>
           <tr>
             <th>姓名</th>
             <th>电话</th>
             <th>年龄</th>
             <th>邮箱</th>
             <th>备注</th>
             <th>操作</th>
           </tr>
         </thead>

         <tbody>
           <tr v-for="user in filterUsers(users,seach)" :key="user.id">
             <td>{{user.name}}</td>
             <td>{{user.phone}}</td>
             <td>{{user.age}}</td>
             <td>{{user.email}}</td>
             <td>{{user.remark}}</td>
             <td><router-link v-bind:to="'/user/'+user.id" class="btn btn-default">详情</router-link></td>
           </tr>
         </tbody>
       </table>
    </div>
  </div>
</template>

<script>
import Info from './Info'
export default {
  name: 'usermanage',
  data () {
    return {
      msg: '',
      users:[],
      seach:''
    }
  },
  methods: {
    getUsers:function(){
      this.$axios.get('https://wd1904176496xtlzpc.wilddogio.com/users.json')
      .then((response)=>{
        var arr=[];
        for (const key in response.data) {
          response.data[key].id=key;
          arr.push(response.data[key]);//将数据推送到数组中
        }
        this.users=arr;
      }).catch((response)=>{
        console.log('读取数据失败！')
      })
    },
    //按条件查询
    filterUsers:function(users,value){
      return users.filter(function(user){
        if(user.name.match(value)){
          return user.name.match(value)
        }
        if(user.age.match(value)){
          return user.age.match(value)
        }
        if(user.phone.match(value)){
          return user.phone.match(value)
        }
        if(user.email.match(value)){
          return user.email.match(value)
        }
      })
    }
  },
  created(){
    if(this.$route.query.msg){
      this.msg=this.$route.query.msg;
    }
    
    this.getUsers();
  },
  updated(){
    this.getUsers();
  },
  components:{
    Info
  }
}
</script>

<style scoped>

</style>
