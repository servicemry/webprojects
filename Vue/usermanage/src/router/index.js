import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import About from '@/components/About'
import Add from '@/components/Add'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Users},
    {path: '/about',component: About},
    {path: '/add',component: Add},
    {path: '/detail/:id',component: Detail},
    {path: '/edit/:id',component: Edit}
    
  ]
})
