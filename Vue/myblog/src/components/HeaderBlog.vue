<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>我的博客</router-link></li>
      <li><router-link to="/add" exact>添加博客</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'headerBlog',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
nav{
  background: crimson;
  padding: 30px;
  margin-bottom: 5px;
}
ul{
  margin: 0;
  text-align: center;
  list-style-type: none;
}
li{
  display:inline-block;
  margin: 0;
}
a{
  padding: 14px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
.router-link-active{
  color:#444;
  background: rgba(255, 255, 255, 0.8)
}
</style>
