const state = {
  visitedViews: [],
<<<<<<< HEAD
  cachedViews: [],
  iframeViews: []
}

const mutations = {
  ADD_IFRAME_VIEW: (state, view) => {
    if (state.iframeViews.some(v => v.path === view.path)) return
    state.iframeViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
=======
  cachedViews: []
}

const mutations = {
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) return
<<<<<<< HEAD
    if (view.meta && !view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },
=======
    if (!view.meta.noCache) {
      state.cachedViews.push(view.name)
    }
  },

>>>>>>> 46444bd (RuoYi-Vue 1.0)
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
<<<<<<< HEAD
    state.iframeViews = state.iframeViews.filter(item => item.path !== view.path)
  },
  DEL_IFRAME_VIEW: (state, view) => {
    state.iframeViews = state.iframeViews.filter(item => item.path !== view.path)
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
=======
  },
  DEL_CACHED_VIEW: (state, view) => {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews.splice(index, 1)
        break
      }
    }
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  },

  DEL_OTHERS_VISITED_VIEWS: (state, view) => {
    state.visitedViews = state.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path
    })
<<<<<<< HEAD
    state.iframeViews = state.iframeViews.filter(item => item.path === view.path)
  },
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1)
    } else {
      state.cachedViews = []
    }
  },
=======
  },
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i)
        state.cachedViews = state.cachedViews.slice(index, index + 1)
        break
      }
    }
  },

>>>>>>> 46444bd (RuoYi-Vue 1.0)
  DEL_ALL_VISITED_VIEWS: state => {
    // keep affix tags
    const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
    state.visitedViews = affixTags
<<<<<<< HEAD
    state.iframeViews = []
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  },
  DEL_ALL_CACHED_VIEWS: state => {
    state.cachedViews = []
  },
<<<<<<< HEAD
=======

>>>>>>> 46444bd (RuoYi-Vue 1.0)
  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
<<<<<<< HEAD
  },
  DEL_RIGHT_VIEWS: (state, view) => {
    const index = state.visitedViews.findIndex(v => v.path === view.path)
    if (index === -1) {
      return
    }
    state.visitedViews = state.visitedViews.filter((item, idx) => {
      if (idx <= index || (item.meta && item.meta.affix)) {
        return true
      }
      const i = state.cachedViews.indexOf(item.name)
      if (i > -1) {
        state.cachedViews.splice(i, 1)
      }
      if(item.meta.link) {
        const fi = state.iframeViews.findIndex(v => v.path === item.path)
        state.iframeViews.splice(fi, 1)
      }
      return false
    })
  },
  DEL_LEFT_VIEWS: (state, view) => {
    const index = state.visitedViews.findIndex(v => v.path === view.path)
    if (index === -1) {
      return
    }
    state.visitedViews = state.visitedViews.filter((item, idx) => {
      if (idx >= index || (item.meta && item.meta.affix)) {
        return true
      }
      const i = state.cachedViews.indexOf(item.name)
      if (i > -1) {
        state.cachedViews.splice(i, 1)
      }
      if(item.meta.link) {
        const fi = state.iframeViews.findIndex(v => v.path === item.path)
        state.iframeViews.splice(fi, 1)
      }
      return false
    })
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  }
}

const actions = {
  addView({ dispatch }, view) {
    dispatch('addVisitedView', view)
    dispatch('addCachedView', view)
  },
<<<<<<< HEAD
  addIframeView({ commit }, view) {
    commit('ADD_IFRAME_VIEW', view)
  },
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  addVisitedView({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  addCachedView({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  },
<<<<<<< HEAD
=======

>>>>>>> 46444bd (RuoYi-Vue 1.0)
  delView({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delVisitedView', view)
      dispatch('delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delVisitedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  },
<<<<<<< HEAD
  delIframeView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_IFRAME_VIEW', view)
      resolve([...state.iframeViews])
    })
  },
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  delCachedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_CACHED_VIEW', view)
      resolve([...state.cachedViews])
    })
  },
<<<<<<< HEAD
=======

>>>>>>> 46444bd (RuoYi-Vue 1.0)
  delOthersViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delOthersVisitedViews', view)
      dispatch('delOthersCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delOthersVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delOthersCachedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_CACHED_VIEWS', view)
      resolve([...state.cachedViews])
    })
  },
<<<<<<< HEAD
=======

>>>>>>> 46444bd (RuoYi-Vue 1.0)
  delAllViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delAllVisitedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_VISITED_VIEWS')
      resolve([...state.visitedViews])
    })
  },
  delAllCachedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  },
<<<<<<< HEAD
  updateVisitedView({ commit }, view) {
    commit('UPDATE_VISITED_VIEW', view)
  },
  delRightTags({ commit }, view) {
    return new Promise(resolve => {
      commit('DEL_RIGHT_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delLeftTags({ commit }, view) {
    return new Promise(resolve => {
      commit('DEL_LEFT_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
=======

  updateVisitedView({ commit }, view) {
    commit('UPDATE_VISITED_VIEW', view)
  }
>>>>>>> 46444bd (RuoYi-Vue 1.0)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
