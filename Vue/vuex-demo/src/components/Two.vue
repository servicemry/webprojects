<template>
  <div class="two">
    <h2>Two</h2>
    <ul>
        <li v-for="user in users" :key="user.name">
            <span class="name">{{user.name}}</span>
            <span class="money">${{user.money}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
      users(){
          return this.$store.getters.saleMoney;
      }
  }
}
</script>

<style scoped>
.two{
    background: #dddddd;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    margin-bottom: 20px;
}
ul{
    list-style-type: none;
    padding: 0;
}
li{
    margin-top:10px;
    margin-left: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8)
}
.money{
  font-weight: bold;
  color:#860ce8;
  display:block;
}
</style>
