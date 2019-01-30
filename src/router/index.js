import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from '../pages/moviesList'
import LoginPage from '../pages/loginPage'
import RegisterPage from '../pages/registerPage'
import FindPassword from '../pages/findPassword'
import UserInfo from '../pages/userInfo'

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
    component: LoginPage
  },
  {
    path: '/registerPage',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/findPassword',
    name: 'FindPassword',
    component: FindPassword
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo
  }
]

export default new Router({
  mode: 'history',
  routes
})
