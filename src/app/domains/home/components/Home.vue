<template lang="html">
  <div class="container">
    <img src="static/images/core_logo.png" class="img-responsive text-center center-block" :alt="app.name">
    <div class="text-center">
      <p>A new generation apps by <a href="http://www.empari.com.br">Empari Global Innovation</a></p>
      <h3>Essencial links</h3>

      <div class="radio">
        <label>
          <input type="radio" name="optionsRadios">
          Radio is off
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optionsRadios" checked="true">
          Radio is on
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optionsRadiosDisabled" disabled>
          Disabled Radio is off
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="optionsRadiosDisabled" checked="true" disabled>
          Disabled Radio is on
        </label>
      </div>

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
  },
  created () {
    window.$.material.init()
  }
}
</script>

<style lang="css">
</style>
