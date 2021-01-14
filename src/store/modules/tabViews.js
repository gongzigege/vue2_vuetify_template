import webStorage from '@/utils/webStorage'

const state = {
  visitedTabViews: webStorage.GetSessionStorage('tabView') || []
}
const mutations = {
  ADD_VISITED_TAB_VIEW: (state, view) => {
    if (state.visitedTabViews.some((v) => v.path === view.path)) return
    state.visitedTabViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
    webStorage.SetSessionStorage('tabView', state.visitedTabViews)
  },
  REMOVE_VISITED_TAB_VIEW: (state, view) => {
    state.visitedTabViews.forEach((views, index, self) => {
      if (views.path === view.path) {
        self.splice(index, 1)
      }
    })
    webStorage.SetSessionStorage('tabView', state.visitedTabViews)
  }
}
const actions = {
  addTabView({ dispatch }, view) {
    dispatch('addVisitedTabView', view)
  },
  addVisitedTabView({ commit }, view) {
    commit('ADD_VISITED_TAB_VIEW', view)
  },
  removeVisitedTabViews({ commit }, view) {
    commit('REMOVE_VISITED_TAB_VIEW', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
