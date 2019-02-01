/**
 * CREATED DATE: 2019/2/1 12:56:30
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations
})
