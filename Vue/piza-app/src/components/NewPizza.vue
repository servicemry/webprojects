<template>
   <form>
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
        <label class="col-sm-1">品种</label>
        <div class="col-sm-11">
            <input type="text"  class="form-control" v-model="newPizza.name">
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-1">描述</label>
        <div class="col-sm-11">
            <textarea type="text"  class="form-control" rows="5" v-model="newPizza.description"></textarea>
        </div>
    </div>

    <p><strong>选项1</strong></p>
     <div class="form-group row">
        <label class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
            <input type="text"  class="form-control" v-model="newPizza.size1">
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-1">价格</label>
        <div class="col-sm-11">
            <input type="text"  class="form-control" v-model="newPizza.price1">
        </div>
    </div>

    <p><strong>选项2</strong></p>
     <div class="form-group row">
        <label class="col-sm-1">尺寸</label>
        <div class="col-sm-11">
            <input type="text"  class="form-control" v-model="newPizza.size2">
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-1">价格</label>
        <div class="col-sm-11">
            <input type="text"  class="form-control" v-model="newPizza.price2">
        </div>
    </div>

    <div class="form-group row">
        <button @click="AddPizza" type="button" class="btn btn-success btn-block">添加</button>
    </div>
   </form>
</template>
<script>
    export default{
        data () {
            return {
                newPizza:{}
            }
        },
        methods:{
            AddPizza(){
                if(!this.newPizza.name||!this.newPizza.price1||!this.newPizza.size1||!this.newPizza.price2||!this.newPizza.size2){
                    console.log("请输入相关信息！")
                }else{
                let data={
                    name:this.newPizza.name,
                    options:
                    [
                        {size:this.newPizza.size1,price:this.newPizza.price1},
                        {size:this.newPizza.size2,price:this.newPizza.price2}
                    ],
                    description:this.newPizza.description 

                }
                this.$axios.post("/products.json",data)
                .then(response=>{
                    this.$store.commit('addMenuItems',data)
                    // 清空表单
                    this.newPizza={}
                })
                }
            }
        }
    }
</script>

