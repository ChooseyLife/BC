import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Header = (resolve) => {
  import('@/components/header/header').then((module) => {
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
      component: Header
    }
  ]
})
