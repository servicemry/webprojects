<template>
  <div class="row">
    <!-- AdminForm -->
    <div class="col-md-8 col-sm-12">
      <app-piza></app-piza>
    </div>
    <!-- AdminMenu -->
    <div class="col-md-4 col-sm-12">
      <h3 class=" text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="p in getMenuItems">
            <td>{{p.name}}</td>
            <td>
              <button @click="removeMenuItems(p)" class="btn btn-sm btn-outline-danger">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza'
  export default{
    data () {
      return {
      }
    },
    components:{
      'appPiza':NewPizza
    },
    methods:{
      loadPizza(){
          this.$axios.get('/products.json')
          .then(response=>{
          let arr=[]
          for(let key in response.data){
            response.data[key].id=key;
            arr.push(response.data[key])
          }
          // 同步数据到vuex中
          this.$store.commit('setMenuItems',arr)   
        })
      },
      removeMenuItems(item){
        this.$axios.delete("/products/"+item.id+".json")
        .then(res=>this.$store.commit('removeMenuItems',item))
      }
    },
    created () {
      this.loadPizza()
    },
    computed: {
      getMenuItems(){
       return this.$store.getters.getMenuItems
      }
    }
  }
</script>
