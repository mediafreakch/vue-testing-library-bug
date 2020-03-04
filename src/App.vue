<template>
  <div id="app">
    <GenericView kind="Dashboard"/>
  </div>
</template>

<script>
import Vue from 'vue'
import GenericView from "./components/GenericView";

export default Vue.extend({
  name: "App",
  components: {
    GenericView
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
