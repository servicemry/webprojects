import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin'
import Menu from '@/components/Menu'
import About from '@/components/about/About'

//二级路由
import Express from '@/components/about/Express'
import History from '@/components/about/History'
import Concat from '@/components/about/Concat'
import DocumentHelp from '@/components/about/DocumentHelp'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/login',component: Login},
    {path: '/register',component: Register},
    {path: '/admin',component: Admin},
    {path: '/menu',component: Menu},
    //设置二级路由
    {path: '/about',component: About,redirect:'/about/history',children:[
      {path:'/about/history',component:History},
      {path:'/about/concat',component:Concat},
      {path:'/about/express',component:Express},
      {path:'/about/document',component:DocumentHelp}
    ]},
    {path: '*',redirect:'/'}//当用户访问的地址不存在，跳转到根目录
  ]
})
