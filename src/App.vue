<template>
  <div>
    {{ pokemon }}
  </div>
</template>

<script>
//  import http from '@plugins/http'
  export default {
    data () {
      return {
        pokemon: {}
      }
    },
    methods: {
      getPokemon () {
        this.$http.get('/pokemon/2').then((response) => {
          console.log(response.data)
          this.pokemon = response.data
        })
      }
    },
    mounted () {
      this.getPokemon()
    }
  }
</script>
