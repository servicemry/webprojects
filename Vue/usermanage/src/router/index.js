import Vue from 'vue'
import Router from 'vue-router'
import UserManage from '@/components/UserManage'
import AddUser from '@/components/AddUser'
import Detail from '@/components/Detail'
import EditUser from '@/components/EditUser'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',component: UserManage},
    {path: '/add',component: AddUser},
    {path:'/user/:id',component: Detail},
    {path:'/edit/:id',component: EditUser}
  ]
})
