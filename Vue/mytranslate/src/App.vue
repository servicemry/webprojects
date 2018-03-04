<template>
  <div id="app">
    <h1>在线翻译！</h1>
    <h4 class=" text-muted">简单/易用/便捷</h4>
    <translate v-on:formSubmit="textTotranslate"></translate>
    <translate-out-put v-text="translatedText"></translate-out-put>
    <!-- v-text="translatedText" 传递一个值到子组件  -->
  </div>
</template>

<script>
import Translate from './components/Translate'
import TranslateOutPut from './components/TranslateOutPut'
export default {
  name: 'App',
  data:function(){
    return{
      translatedText:''
    }
  },
  components:{
  Translate,
  TranslateOutPut
  },
  methods: {
    textTotranslate:function(value,languageParams){
      this.$axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180302T082525Z.a37c9045884a9241.5940c0014a2a1edb708c32e102420306028b8740&lang='+languageParams+'&text='+value)
      .then((response)=>{
        this.translatedText=response.data.text[0];
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
