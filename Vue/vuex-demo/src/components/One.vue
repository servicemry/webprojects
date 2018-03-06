<template>
  <div class="one">
      <h2>One</h2>
    <ul>
        <li v-for="user in users" :key="user.name">
            <span class="name">{{user.name}}</span>
            <span class="money">${{user.money}}</span>
        </li>
    </ul>
    <button class="btn" v-on:click="lossMoney(2)">罚款</button>
  </div>
</template>

<script>
export default {
  computed: {
      users(){
          return this.$store.getters.saleMoney;
      }
  },
  methods:{
      lossMoney:function(balance){
          //this.$store.commit('lossMoney')//调用store中的mutations中的lossMoney方法
          this.$store.dispatch('lossMoneyAsync',balance);//调用actions中的lossMoneyAsync方法并传递一个参数
      }
  }
}
</script>

<style scoped>
.one{
    background: #cceeff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    margin-bottom: 20px;
}
ul{
    padding: 0;
    list-style-type: none;
}
li{
    display:inline-block;
    margin-top:10px;
    margin-left: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8)
}
.money{
  font-weight: bold;
  color:#ee800c;
  display:block;
}
.btn{
    padding: 10px;
    background: palevioletred;
    border-radius: 5px;
    width: 50px;
}
</style>
