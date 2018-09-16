import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    introJsGoTo: ''
  },
  mutations: {
    mutationGoTo: (state, i) => {
      state.introJsGoTo = i
    }
  }
})
