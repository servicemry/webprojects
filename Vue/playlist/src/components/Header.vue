<template>
  <div class="v-header">
   <header>
     <h1>{{ msg }}</h1>   
  </header> 
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      msg: 'This is Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: lightcyan;
  padding: 10px;
}
h1{
  color:#222;
  text-align: center;
}
</style>
