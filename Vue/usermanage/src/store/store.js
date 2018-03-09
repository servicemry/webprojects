import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
    state: {
        operationStatus:'',
        users:[]
    },
    getters: {
        
    },
    mutations:{
        operationStatus(state,data){
            state.operationStatus=data
        },
        addUser(state,data){
            state.users.push(data)
        },
        setUsers(state,data){
            state.users=data
        }
    },
    actions:{

    }
})