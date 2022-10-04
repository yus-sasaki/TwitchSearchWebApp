<template>
  <div id="app">
    <TwitchApp msg="TwitchApp"/>
  </div>
</template>

<script>
import TwitchApp from './components/TwitchApp.vue'

export default {
  name: 'App',
  components: {
    TwitchApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 5vh;
}
</style>
