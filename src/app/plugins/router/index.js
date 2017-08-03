import Vue from 'vue'
import VueRouter from 'vue-router'
import afterEach from './AfterEach'
import beforeEach from './BeforeEach'
import { routes as app } from '@/app/domains'

Vue.use(VueRouter)

const routes = [...app]

// import { routes as app } from '@/app/domains'

Vue.use(VueRouter)

// const routes = [...app]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  hashbang: false,
  history: true,
  saveScrollPosition: true

})

router.afterEach(afterEach)
router.beforeEach(beforeEach)

export default router
