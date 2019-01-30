/**
 * CREATED DATE: 2019/1/30 10:03:46
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import request from './request'

function requestUrl (path) {
  // let url = process.NODE_ENV !== 'production' ? 'http://localhost:3000' : '/api'
  let url = 'http://localhost:3000'
  return `${url}${path}`
}
// 登录
export function login (params) {
  return request({
    url: requestUrl('/users/login'),
    method: 'post',
    data: params
  })
}

// 注册
export function register (params) {
  return request({
    url: requestUrl('/users/register'),
    method: 'post',
    data: params
  })
}
