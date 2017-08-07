<template lang="html">
  <div id="app">
    <router-view></router-view>
    <footer class="footer ">
      <h1>{{ $t("hello") }}</h1>
      <div class="container">
        <p class="text-muted text-center">
          {{ app.name }} &copy; {{ now.getFullYear() }} -
          <small v-html="copy"></small>
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
      copy: this.$t('footer.copy'),
      now: new Date()
    }
  }
}
</script>

<style lang="scss" src="@/assets/sass/style.scss"/>
