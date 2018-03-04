<template>
  <div id="translateoutput" class="col-md-6 col-md-offset-3 well">
    {{translatedText}}
  </div>
</template>

<script>
export default {
  name: 'translateoutput',
  props:["translatedText"],//接受从App传递过来的值
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#translateoutput{
  border:1px solid #ccc;
  border-radius: 10px;
  margin-top: 20px;
  padding:20px;
}
</style>
