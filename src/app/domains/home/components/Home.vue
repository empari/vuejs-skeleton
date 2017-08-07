<template lang="html">
  <div class="container">
    <img src="static/images/core_logo.png" class="img-responsive text-center center-block" :alt="app.name">
    <div class="text-center">
      <p>{{ $t("new_geneation") }}</p>
      <h3>{{ $t("titles.essencial_links") }}</h3>
      <router-link :to="{ name: 'home.documentation-ux'}">{{ $t("documentation_ux") }}</router-link>
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

<style lang="scss">
</style>
