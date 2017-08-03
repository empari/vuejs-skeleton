<template lang="html">
  <div id="app">
    <router-view></router-view>
    <footer class="footer ">
      <div class="container">
        <p class="text-muted text-center">
          {{ app.name }} &copy; {{ now.getFullYear() }} -
          <small>
            Desenvolvido com <i class="material-icons" style="font-size: 14px; color: red">favorite</i> por
            <a href="http://www.empari.com.br" target="_blank">Empari Global Innovation</a>.
          </small>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { app } from '@configs'

export default {
  name: 'CoreMain',
  data () {
    return {
      app,
      now: new Date()
    }
  }
}
</script>

<style lang="scss" src="@/assets/sass/style.scss"/>
