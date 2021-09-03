import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = new VueRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
