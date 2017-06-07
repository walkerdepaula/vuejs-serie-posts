import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'

// modules import
import insertData from '../components/insert-data/store'

// Components
Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  state,
  modules: {
    insertData
  }
})
