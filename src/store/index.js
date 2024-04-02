import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: true,
    theme: 'light',
    loginpop: false,
    loginpopmini: false,
    isAuthenticated: false,
    token: '',
    isLoading: false,
    collapse: true,
    isDark: true,
    showloginindex: false,
    showloginnavbar: false,
    registerpop: false

  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('isDark')) {
        if (localStorage.getItem('isDark') === 'false') {
          state.isDark = false
        } else {
          state.isDark = true
        }

      }
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      }
      else {
        state.token = ''
        state.isAuthenticated = false
      }
      if (window.innerWidth > 600) {
        state.collapse = false
      } else {
        state.collapse = true
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {},
})
