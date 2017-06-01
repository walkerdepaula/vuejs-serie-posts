import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'

// Components
Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  state
  // modules: {
  //   DocumentsTable
  // }
})
