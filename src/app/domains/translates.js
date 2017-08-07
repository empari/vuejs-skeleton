import { translates as core } from './core'
import { translates as home } from './home'

let syncLang = (lang) => {
  return {
    ...core[lang],
    ...home[lang]
  }
}

export default {
  en: syncLang('en'),
  ptBR: syncLang('ptBR')
}
