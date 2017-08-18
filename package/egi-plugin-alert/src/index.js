import Vue from 'vue'
import Noty from './noty'
export default {
  install(Vue, defaultOptions = {}) {
    const CONSTRUCTOR = Vue.extend(Noty)
    const CACHE = {}
    Object.assign(Noty.DEFAULT_OPT, defaultOptions)
    function noty(msg, options = {}) {
      options.message = msg
      let noty = CACHE[options.id] || (CACHE[options.id] = new CONSTRUCTOR)
      if (!noty.$el) {
        let vm = noty.$mount()
        document.querySelector(options.parent || 'body').appendChild(vm.$el)
      }
      noty.queue.push(options)
    }
    Vue.noty = Vue.prototype.$noty = noty
  }
}
