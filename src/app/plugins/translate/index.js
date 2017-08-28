// https://github.com/dkfbasel/vuex-i18n

// load vue and vuex instance
import Vue from 'vue'
import store from '@plugins/store'

// load vuex i18n module
import vuexI18n from 'vuex-i18n'

// load translates js
import { translates as transAuth } from '../../../../package/vuejs-auth/src/index'
import { translates as messages } from '@/app/domains'

Vue.use(vuexI18n.plugin, store)

let syncLang = (lang) => {
  return {
    ...transAuth[lang],
    ...messages[lang]
  }
}

Vue.i18n.add('en', syncLang('en'))
Vue.i18n.add('ptBR', syncLang('ptBR'))
//
// Vue.i18n.add('en', transAuth.en)
// Vue.i18n.add('ptBR', transAuth.ptBR)

Vue.i18n.set(process.env.LOCALE)

Vue.i18n.fallback('ptBR')

export default Vue.i18n
