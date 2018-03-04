<template>
  <div id="translate" class="row">
     <div class="col-md-6 col-md-offset-3">
      <form id="transform" class="well form-inline" v-on:submit="formSubmit">
        <input class=" form-control" type="text" placeholder="请输入要翻译的类容" v-model="textTotranslate">
        <select class=" form-control" v-model="languageParams">
          <option value="en">英语</option>
          <option value="ko">韩语</option>
          <option value="ja">日语</option>
          <option value="de">德语</option>
          <option value="fr">法语</option>
        </select>
        <input class="btn btn-primary" type="submit" value="在线翻译">
      </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'translate',
  data () {
    return {
      textTotranslate:'',
      languageParams:""
    }
  },
  methods: {
    formSubmit:function(e){
    if(!this.textTotranslate){
      this.textTotranslate="请输入要翻译的文字！"
      return;
    }else{
      this.$emit('formSubmit',this.textTotranslate,this.languageParams); //将formSubmit传入到App中
    }
      e.preventDefault();//取消默认事件
    }
  },
  created () {
    this.languageParams="en"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#transform{
  border:1px solid #ccc;
  border-radius: 10px;
}
</style>
