// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store'


axios.defaults.baseURL="https://wd5397363895kaxpel.wilddogio.com/"

Vue.prototype.$axios=axios
Vue.config.productionTip = false

// 路由全局守卫，在没登录的情况下，不让进入任何页面
router.beforeEach((to,from,next)=>{
  if(store.getters.isLogin==false){
    if(to.path=='/login'||to.path=='/register'){
      next()
    } else{
      next('/login')
    }
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  components: { App },
  template: '<App/>'
})
