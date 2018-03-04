<template>
  <div class="v-footer">
    <footer>
     <p>{{ msg }}</p>   
  </footer> 
    
  </div>
</template>

<script>
export default {
  name: 'vue-footer',
  data () {
    return {
      msg: 'This is Footer '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  background:cornflowerblue;
  padding: 6px;
}
p{
  color:#222;
  text-align: center;
}
</style>
