import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'
import ShowBlog from '@/components/ShowBlog'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/add',name: 'AddBlog',component: AddBlog},
    {path: '/blog/:id',name: 'SingleBlog',component: SingleBlog},
    {path: '/',name: 'ShowBlog',component: ShowBlog}
  ]
})
