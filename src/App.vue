<template>
  <img alt="Vue logo" src="./assets/logo.png">
<show-navigator/>
</template>

<script>
import ShowNavigator from './components/ShowNavigator.vue'

export default {
  name: 'App',
  components: {
    ShowNavigator
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

.button {
  background-color: #009688; /* Green */
  height:  32px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
