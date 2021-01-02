import { getCookie, setCookie } from '@/utils/jsCookie'
const state = {
  appbar: {
    opened: getCookie('appbarStatus') ? !!+getCookie('appbarStatus') : true
  }
}
const mutations = {
  TOGGLE_APPBAR: (state) => {
    state.appbar.opened = !state.appbar.opened

    if (state.appbar.opened) {
      setCookie('appbarStatus', 1)
    } else {
      setCookie('appbarStatus', 0)
    }
  }
}
const actions = {
  toggleAppBar({ commit }) {
    commit('TOGGLE_APPBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
