import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from '../pages/moviesList'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage'
import FindPassword from '../pages/findPassword'
import UserInfo from '../pages/userInfo'
import MovieDetail from '../pages/movieDetail'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['@/pages/index.vue'], resolve),
    name: 'home',
    meta: {
      title: 'home'
    }
  },
  {
    path: '/movieList',
    name: 'MoviesList',
    component: MoviesList
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      guest: true
    }
  },
  {
    path: '/registerPage',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      guest: true
    }
  },
  {
    path: '/findPassword',
    name: 'FindPassword',
    component: FindPassword,
    meta: {
      guest: true
    }
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/movieDetail',
    name: 'MovieDetail',
    component: MovieDetail
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let token = Vue.cookie.get('token')
  console.log(token)
  console.log(to)
  if (!token && !to.meta.guest) {
    next({name: 'LoginPage'})
    return
  }
  next()
})

export default router
