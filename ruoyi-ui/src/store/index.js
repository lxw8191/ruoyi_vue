import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
<<<<<<< HEAD
import dict from './modules/dict'
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
<<<<<<< HEAD
    dict,
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    user,
    tagsView,
    permission,
    settings
  },
  getters
})

export default store
