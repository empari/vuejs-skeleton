import Vue from 'vue'
import VueRouter from 'vue-router'
import afterEach from './AfterEach'
import beforeEach from './BeforeEach'

Vue.use(VueRouter)

const routes = []

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
