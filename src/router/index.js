import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由数据
import routes from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({
    y: 0
  }),
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.matched.some(record => record.meta.requiresAuths)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!localStorage['token']) {
  //     next({
  //       path: '/login'
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next() // 确保一定要调用 next()
  // }
})
export default router
