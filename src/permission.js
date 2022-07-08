import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const userInfo = store.getters.userInfo
      const navData = store.getters.nav
      if (userInfo && navData) {
        next()
      } else {
        const response = await store.dispatch('user/getInfo')
        const { authoritys } = await store.dispatch('user/getNav')
        if (response && authoritys) {
          const routes = await store.dispatch(
            'permission/filterRoutes',
            authoritys
          )
          if (routes) {
            routes.forEach((item) => {
              router.addRoute(item)
            })
            return next(to.path)
          }
          next()
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
