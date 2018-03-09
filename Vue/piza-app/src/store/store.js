import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export const store=new Vuex.Store({
    // 设置属性
    state: {
        menuItems:[],
        currentUser:null,
        isLogin:false
    },
    // 获取属性状态
    getters: {
       getMenuItems:state=>state.menuItems,
       currentUser:state=>state.currentUser,
       isLogin:state=>state.isLogin
    },
    // 改变属性状态
    mutations: {
        // 将数据库中读取的数据保存到vuex中的state中的menuItems属性中
        setMenuItems(state,data){
            state.menuItems=data
        },
        // 添加新的pizza到menuItems数组属性中
        addMenuItems(state,data){
            state.menuItems.push(data)
        },
        // 删除pizza数据
        removeMenuItems(state,data){
            state.menuItems.forEach((item,index) => {
                if(item == data){
                  state.menuItems.splice(index,1)
                }
            })
        },
        // 设置用户登录状态
        setUserStatus(state,data){
            if(data){
                state.currentUser=data
                state.isLogin=true
            }else{
                state.currentUser=null
                state.isLogin=false
            }
        }
    },
    // 应用mutations
    actions:{
        
    }
})