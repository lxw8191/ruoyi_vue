import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
<<<<<<< HEAD
    withoutAnimation: false,
    hide: false
=======
    withoutAnimation: false
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
<<<<<<< HEAD
    if (state.sidebar.hide) {
      return false;
    }
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
<<<<<<< HEAD
  },
  SET_SIDEBAR_HIDE: (state, status) => {
    state.sidebar.hide = status
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
<<<<<<< HEAD
  },
  toggleSideBarHide({ commit }, status) {
    commit('SET_SIDEBAR_HIDE', status)
=======
>>>>>>> 46444bd (RuoYi-Vue 1.0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
