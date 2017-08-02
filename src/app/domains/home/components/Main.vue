<template lang="html">
<div class="container">
  <router-view></router-view>
</div>
</template>

<script>
import { app } from '@configs'

export default {
  name: 'HomeMain',
  data () {
    return {
      app
    }
  }
}
</script>

<style lang="scss">
</style>
