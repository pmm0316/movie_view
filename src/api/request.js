/**
 * CREATED DATE: 2019/1/30 10:02:25
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

// 创建axios实例
const service = axios.create({
  timeout: 1000 * 30,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
// service.interceptors.request.use(config => {
//   config.headers['token'] = Vue.cookie.get('token')
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// response拦截器
service.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    Vue.cookie.delete('token')
    router.push({ name: 'LoginPage' })
  }
  response = response.data
  return response
}, error => {
  return Promise.reject(error)
})

export default service
