<template>
  <div class="alert alert-success alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>提示信息:{{message}}!</strong> 
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['message'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
