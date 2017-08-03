<template lang="html">
  <router-view></router-view>
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
