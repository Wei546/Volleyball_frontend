<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    NavBar
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
  margin-top: 0;
}
</style>
