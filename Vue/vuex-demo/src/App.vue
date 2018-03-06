<template>
  <div id="app">
    <one></one>
    <two></two>
  </div>
</template>

<script>
import One from './components/One'
import Two from './components/Two'
export default {
  components: {
    'one':One,
    'two':Two
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
