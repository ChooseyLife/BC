import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const AppMain = (resolve) => {
  import('@/components/layout/AppMain').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'header'
    },
    {
      path: '/header',
      component: AppMain
    }
  ]
})
