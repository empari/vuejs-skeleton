import { app } from '@/app/configs'

export default (to, from) => {
  window.document.title = app.name
  if (to.meta.title !== undefined) {
    window.document.title = to.meta.title + ' | ' + app.name
  }
}
