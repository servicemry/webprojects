  <template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>

        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr><td><strong>{{item.name}}</strong></td></tr>
          <tr v-for="opt in item.options" :key="opt.price" >
            <td>{{opt.size}}</td>
            <td>{{opt.price}}</td>
            <td><button @click="addShop(item,opt)" class="btn btn-success btn-outline btn-sm">+</button></td>
          </tr>
        </tbody>

      </table>
    </div>
    <div class="col-sm-12 col-md-4">
        <div v-if="shops.length>0">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>数量</th>
                <th>名称</th>
                <th>单价</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="shop in shops">
                <td>
                  <button @click="decnumber(shop)" class="btn btn-sm">-</button>
                  <span>{{shop.numbers}}</span>
                  <button @click="addnumber(shop)" class="btn btn-sm">+</button>
                </td>
                <td>{{shop.name}}</td>
                <td>{{shop.numbers*shop.price}}</td>
              </tr>
            </tbody>
          </table>
          <p>总价:{{calcMoney+"RMB"}}</p>
          <button class="btn btn-success btn-block">结算</button>  
        </div>
        <div v-else>{{msg}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg:'亲、您还没有添加商品哦！',
        shops:[]
      }
    },
    created () {
      this.loadData()
    },
    computed: {
      getMenuItems(){
        // 从vuex中获取数据
        return this.$store.getters.getMenuItems
      }
      ,
      calcMoney(){
        let sum=0;
        for(let index in this.shops){
          let shop=this.shops[index]
          sum+=shop.numbers*shop.price
        }
        return sum;
      }
    }
    ,
    methods: {
      loadData(){
        this.$axios.get("/products.json")
        .then(res=>{
          this.$store.commit("setMenuItems",res.data)
        }).catch(res=>{
          console.log("加载菜单数据失败")
        })
      }
      ,
      addShop:function(item,opt){
        let shop={
          name:item.name,
          price:opt.price,
          size:opt.size,
          numbers:1
        }
        //判断shops数组里面是否存在数据
        if(this.shops.length>0){
            //过滤存在的数据和即将添加的商品是否有重复的，如果有重复的累加商品数量，否则在追加一条数据到数组中
            let result=this.shops.filter((single)=>{
              return (single.name===item.name && single.price===opt.price);
            })
            
            if(result.length>0 && result!=null){
              result[0].numbers++
            }else{
              this.shops.push(shop)
            }
        }else{
            this.shops.push(shop)
        }
      },
      addnumber(shop){
        shop.numbers++
      },
      decnumber(shop){
        shop.numbers--
        if(shop.numbers<=0){
          this.shops.splice(this.shops.indexOf(shop),1)
        }
      }

    }
  }
</script>

