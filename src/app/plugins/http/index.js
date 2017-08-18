// import { app } from '@configs'
import axios from 'axios'
const SUBDOMAIN = process.env.SUBDOMAIN
const API = process.env.BASE_URL
const PROTOCOL = process.env.PROTOCOL
const API_VERSION = process.env.API_VERSION
// allow use http client without Vue instance
export const http = axios.create({
  baseURL: `${PROTOCOL}${SUBDOMAIN}.${API}${API_VERSION}`
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
