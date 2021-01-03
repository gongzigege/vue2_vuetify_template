const state = {
  visitedTabViews: []
}
const mutations = {
  ADD_VISITED_TAB_VIEW: (state, view) => {
    if (state.visitedTabViews.some((v) => v.path === view.path)) return
    state.visitedTabViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  }
}
const actions = {
  addTabView({ dispatch }, view) {
    dispatch('addVisitedTabView', view)
  },
  addVisitedTabView({ commit }, view) {
    commit('ADD_VISITED_TAB_VIEW', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
