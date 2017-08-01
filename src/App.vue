<template>
  <div>
    {{ pokemon.name }}
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
        this.pokemon = this.$http.get('/pokemon/2').then((response) => {
          return response
        })

        console.log(this.$http.get('/pokemon/4').then((response) => {
          return response
        }))
      }
    },
    mounted () {
      this.getPokemon()
      console.log(this.getPokemon())
    }
  }
</script>
