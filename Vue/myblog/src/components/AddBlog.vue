<template>
  <div id="addBlog">
   <h3>添加博客</h3>
   <form v-if="!issubmit">
     <label>博客标题</label>
     <input type="text" v-model="blog.title">
     <label>博客内容</label>
     <textarea v-model="blog.content"></textarea>

     <label>分类</label>
     <div id="checkboxes">
       <label>Vue.js</label>
       <input type="checkbox" value="Vue.js" v-model="blog.types">
        <label>Node.js</label>
       <input type="checkbox" value="Node.js" v-model="blog.types">
        <label>React.js</label>
      <input type="checkbox" value="React.js" v-model="blog.types">
        <label>Angurla.js</label>
       <input type="checkbox" value="Angurla.js" v-model="blog.types">
     </div>

    <label>作者:</label>
    <select v-model="blog.author">
      <option v-for="author in authors" :key="author">{{author}}</option>
    </select>
    <button v-on:click.prevent="AddBlog">发布博客</button>
   </form>
  
   <hr>

    <div v-if="issubmit">
      <h3>您的博客发布成功!</h3>
    </div>
    <div id="priview">
      <h3>博客预览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>类别:</p>
      
      <ul>
        <li v-for="type in blog.types" :key="type">{{type}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'addBlog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
        author:'',
        types:[]
      },
      authors:['thomas','jack','harry'],
      issubmit:false
    }
  },
  methods: {
    AddBlog:function(){
      if(!this.blog.title||!this.blog.content||!this.blog.author||!this.blog.types){
        console.log("请键入相关细信息")
      }else{
        this.$axios.post("posts.json",this.blog)
      .then((response)=>{
        this.issubmit=true;
      })
      }
    }
  }
}
</script>

<style scoped>
#addBlog *{
  box-sizing: border-box;
}
#addBlog{
  margin:auto;
  max-width: 800px;
}
label{
  display: block;
  margin: 0 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
textarea{
  height: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
#checkboxes label{
  display:inline-block;
  margin: 0;
}
#checkboxes input{
  display:inline-block;
  margin: 10px;
}
button{
  margin: 5px;
  background:crimson;
  color: #fff;
  padding: 14px;
  font-size: 18px;
  border-radius: 5px;
}
#priview{
  background: rgb(247, 244, 244);
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 20px 10px;
}
#priview ul{
  list-style-type: none;
}
#priview li{
  display:inline-block;
  margin: 0px 5px;
}


</style>
