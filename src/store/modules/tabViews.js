import webStorage from '@/utils/webStorage'

const state = {
  visitedTabViews: webStorage.GetSessionStorage('tabView') || []
}
const mutations = {
  ADD_VISITED_TAB_VIEW: (state, view) => {
    // ! 直接使用 $route 在 JSON.stringify() 转换时会抛出异常TypeError ("cyclic object value")（循环对象值）
    const views = {
      fullPath: view.fullPath,
      hash: view.hash,
      meta: view.meta,
      name: view.name,
      params: view.params,
      path: view.path,
      query: view.query,
      title: view.title
    }
    if (state.visitedTabViews.some((v) => v.path === views.path)) return
    state.visitedTabViews.push(
      Object.assign({}, views, {
        title: views.meta.title || 'no-name'
      })
    )
    webStorage.SetSessionStorage('tabView', state.visitedTabViews)
  },
  REMOVE_VISITED_TAB_VIEW: (state, view) => {
    for (const [i, v] of state.visitedTabViews.entries()) {
      if (v.path === view.path) {
        state.visitedTabViews.splice(i, 1)
        webStorage.SetSessionStorage('tabView', state.visitedTabViews)
        break
      }
    }
  }
}
const actions = {
  addTabView({ dispatch }, view) {
    dispatch('addVisitedTabView', view)
  },
  addVisitedTabView({ commit }, view) {
    commit('ADD_VISITED_TAB_VIEW', view)
  },
  removeTabView({ dispatch, state }, view) {
    return new Promise((resolve) => {
      dispatch('removeVisitedTabViews', view)
      resolve({
        visitedTabViews: [...state.visitedTabViews]
      })
    })
  },
  removeVisitedTabViews({ commit, state }, view) {
    return new Promise((resolve) => {
      commit('REMOVE_VISITED_TAB_VIEW', view)
      resolve([...state.visitedTabViews])
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
