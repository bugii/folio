export const state = () => {
  return {
    initialLoadFinished: false
  }
}

export const mutations = {
  initialLoadFinished(state) {
    state.initialLoadFinished = true
  }
}

export const actions = {
  initialLoadFinished(context) {
    context.commit('initialLoadFinished')
  }
}

export const getters = {
  hasInitialPageLoaded: state => {
    return state.initialLoadFinished
  }
}
