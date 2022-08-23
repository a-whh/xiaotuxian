import { createStore } from 'vuex'
import getters from './getters'
import home from './modules/home'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    home
  },
  getters,
  plugins: [createPersistedState()]
})
