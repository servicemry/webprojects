<template>
  <div class="users">
    <ul>
      <li v-for="item in users" v-on:click="item.show=!item.show">
        <h2>{{item.name}}</h2>
        <h3 v-show="item.show">{{item.job}}</h3>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      msg: 'This is Footer ',
      users:[
        {name:'jack',job:'web',show:false},        
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false},
        {name:'jack',job:'web',show:false}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0px 20px;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
