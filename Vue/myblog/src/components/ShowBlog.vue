<template>
  <div id="showBlog">
   <h1>我的博客</h1>
   <input type="text" v-model="seach" placeholder="请输入要查找的内容">
   <div id="blog" v-for="blog in filterBlogs" :key="blog.title">
     <div id="content">
       <h3 changeColor><router-link v-bind:to="'/blog/'+blog.id">{{blog.title}}</router-link></h3>
        <article>{{blog.content|snippet}}</article>
     </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'showBlog',
  data () {
    return {
      seach:'',
      blogs:[]
    }
  },
  created () {
      this.$axios.get('posts.json')
      .then((response)=>{
      var result= response.data;
        var blogsArray = [];
        for(let key in result){
          result[key].id = key;
          blogsArray.push(result[key]);
        }
        this.blogs = blogsArray;
      })
  },
  computed:{
    filterBlogs:function(){
      return this.blogs.filter((blog) =>{
  			return blog.title.match(this.seach);
  		})
    }
  }
}
</script>

<style scoped>
#showBlog *{
  box-sizing: border-box;
}
#showBlog {
  max-width: 800px;
  margin: auto;
}
input{
  width: 100%;
  border-radius: 5px;
  border: solid 1px;
  padding: 10px;
}
#blog{
  width: 100%;
  height: 150px;
  background: rgb(247, 244, 244);
  border:solid 1px #ccc;
  border-radius: 5px;
  margin: 20px 0;
}
#content{
  margin: 0 20px;
}
a{
  text-decoration: none;
}
</style>
