// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from '@plugins/store'
import router from '@plugins/router'
import httpPlugin from '@plugins/http'
import translate from '@plugins/translate'
import Main from '@domains/core/components/Main'
import initMaterial from '@plugins/material'
import pluginAlert from '../package/egi-plugin-alert/src/index'

Vue.config.productionTip = false

const Material = {}
Material.install = function (Vue, options) {
  Vue.mixin({
    mounted: () => {
      initMaterial()
    }
  })
}

Vue.use(Material)
Vue.use(pluginAlert)
Vue.use(httpPlugin, {store, router})

require('./vendor')

// Effortlessly keep vue-router and vuex store in sync.
sync(store, router) // https://github.com/vuejs/vuex-router-sync/tree/next

/* eslint-disable no-new */
new Vue({
  store,
  router,
  translate,
  el: '#app',
  render: h => h(Main)
})
