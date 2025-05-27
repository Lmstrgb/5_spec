<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="@/assets/logoNew.png">
    <ProductDetails/>
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue'


export default {
  name: 'App',
  components: {
    ProductDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo { 
max-width: 180px;
max-height: 180px;
}
</style>
