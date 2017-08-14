// https://github.com/dkfbasel/vuex-i18n

// load vue and vuex instance
import Vue from 'vue'
import store from '@plugins/store'

// load vuex i18n module
import vuexI18n from 'vuex-i18n'

// load translates js
import { translates as messages } from '@/app/domains'

// initialize the internationalization plugin on the vue instance. note that
// the store must be passed to the plugin. the plugin will then generate some
// helper functions for components (i.e. this.$i18n.set, this.$t) and on the vue
// instance (i.e. Vue.i18n.set).
Vue.use(vuexI18n.plugin, store)

// add translations directly to the application
Vue.i18n.add('en', messages.en)
Vue.i18n.add('ptBR', messages.ptBR)

// set the start locale to use
Vue.i18n.set(process.env.LOCALE)

// set a fallback locale if translation for current locale does not exist
Vue.i18n.fallback('ptBR')

export default Vue.i18n
