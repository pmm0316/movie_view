/**
 * CREATED DATE: 2019/1/29 13:58:33
 * author: mingmingbuzai
 * email: 847679250@qq.com
 * 注册全局组件
 */
import Vue from 'vue'
import MovieIndexHeader from './components/MovieIndexHeader'
import UserMessage from './components/UserMessage'
import CommonFooter from './components/CommonFooter'
import CenterContainer from './components/CenterContainer'
import Comment from './components/Comment'

Vue.component('MovieIndexHeader', MovieIndexHeader)
Vue.component('CommonFooter', CommonFooter)
Vue.component('CenterContainer', CenterContainer)
Vue.component('UserMessage', UserMessage)
Vue.component('Comment', Comment)

Vue.use(MovieIndexHeader)
Vue.use(CommonFooter)
Vue.use(CenterContainer)
Vue.use(UserMessage)
Vue.use(Comment)
