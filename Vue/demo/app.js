new Vue({
    el:'#app',
    data:{
        health:100,
        isend:false
    },
    methods:{
        punch:function(){
            this.health-=10;
            if(this.health<=0){
                this.isend=true;
            }
        },
        restart:function(){
            this.health=100;
            this.isend=false;
        }
    },
    computed:{

    }
})