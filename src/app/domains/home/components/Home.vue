<template lang="html">
  <div class="container">
    <img src="static/images/core_logo.png" class="img-responsive text-center center-block" :alt="app.name">
    <div class="text-center">
      <p>A new generation apps by <a href="http://www.empari.com.br">Empari Global Innovation</a></p>
      <h3>Essencial links</h3>
      <router-link :to="{ name: 'home.documentation-ux'}">Documentation UX</router-link>
    </div>
  </div>
</template>

<script>
import { app } from '@configs'

export default {
  name: 'HomeView',
  data () {
    return {
      app
    }
  }
}
</script>

<style lang="css">
</style>
