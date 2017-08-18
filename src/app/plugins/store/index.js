import Vue from 'vue'
import Vuex from 'vuex'
import { default as modules } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})

