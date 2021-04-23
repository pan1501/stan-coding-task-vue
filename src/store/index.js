import { createStore } from 'vuex'
import { state } from './vuex/state.js'
import { getters } from './vuex/getters.js'
import { mutations } from './vuex/mutations.js'
import { actions } from './vuex/actions.js'


export default createStore({
  actions,
  getters,
  mutations,
  state
})
