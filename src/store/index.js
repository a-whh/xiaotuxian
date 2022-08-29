import { createStore } from 'vuex'
import getters from './getters'
import home from './modules/home'
import category from './modules/category'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    home,
    category
  },
  getters,
  plugins: [createPersistedState()]
})
