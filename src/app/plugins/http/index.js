import { app } from '@configs'
import axios from 'axios'

// allow use http client without Vue instance
export const http = axios.create({
  baseURL: app.apiUrl
})

// receive store and data by options
// https://vuejs.org/v2/guide/plugins.html
export default function install (Vue, { store, router }) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
