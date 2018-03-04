<template>
  <div id="singleBlog">
    <h1>{{blog.title}}</h1>
     <p>内容:{{blog.content}}</p>
     <p>作者:{{blog.author}}</p>
    类型:<ul>
     <li v-for="item in blog.types" :key="item">{{item}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'singleBlog',
  data () {
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created () {
    this.$axios.get('posts/' + this.id + ".json")
    .then((response)=>{
      this.blog=response.data;
      console.log(response.data)
    })
  }
}
</script>

<style scoped>
#singleBlog{
  max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: #eee;
		border: 1px solid #aaa;
    border-radius: 5px;
}
ul li{
  list-style-type: none;
  display:inline-block;
  margin-left: 10px;
}
</style>
