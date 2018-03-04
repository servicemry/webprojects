<template>
  <div id="app">
    <header-blog></header-blog>
    <router-view/>
  </div>
</template>

<script>
import HeaderBlog from './components/HeaderBlog'
import ShowBlog from './components/ShowBlog'
import SingleBlog from './components/SingleBlog'

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HeaderBlog,ShowBlog,SingleBlog
  }
}
</script>

<style>

</style>
