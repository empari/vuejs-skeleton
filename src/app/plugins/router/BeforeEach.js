import store from '@plugins/store'

export default (to, from, next) => {
  if (store.state.auth.isLoggedIn === false && to.meta.requiresAuth === true) {
    next({name: 'auth.login'})
  }

  next()
}
