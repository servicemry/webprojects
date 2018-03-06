import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state: {
        users:[
            {name:'马云',money:100},
            {name:'马化腾',money:80},
            {name:'马冬梅',money:50},
            {name:'马蓉',money:10}
          ]
    },
    getters: {
        saleMoney:state=>{
            return state.users.map(user=>{
                return {
                    name:'*'+user.name+'*',
                    money: user.money/2
                }
            })
        }
    },
    mutations:{
        lossMoney:(state,payload)=>{
            return state.users.forEach(user=>{
                user.money-=payload;
            })
        }
    },
    actions:{
        lossMoneyAsync:(context,payload)=>{
            setTimeout(() => {
                context.commit('lossMoney',payload)//注册mutations中的lossMoney方法并调用
            }, 2000);//延长2秒执行
        }
    }
})