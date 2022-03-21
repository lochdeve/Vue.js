<template>
  <div id="app" class="container">
    <cabecera></cabecera>
    <list></list>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import cabecera from "./components/Header.vue";
import list from "./components/List.vue";

export default {
  name: "App",
  components: {
    cabecera,
    list,
  },
};
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
</style>
