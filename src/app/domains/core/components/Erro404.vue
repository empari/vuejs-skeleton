<template lang="html">
  <div class="jumbotron">
    <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object img img-rounded" src="/static/images/erro404.jpg">
        </a>
      </div>
      <div class="media-body">
        <h1>Oops! Erro 404</h1>
        <p>Página não foi encontrada</p>
        <div><span>Desculpe, a página que você solicitou não foi encontrada. Confira o endereço ou tente novamente depois.</span></div>
        <router-link :to="{name: 'home.view'}" class="btn btn-primary">Voltar</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'erro404'
}
</script>

<style lang="scss">
</style>
