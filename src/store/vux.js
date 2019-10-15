// initial state
const state = {
    isShowDrawer: false,
    isLoading: false,
    index: 1,
    listLayout: 1
}

// mutations
const mutations = {
    loadingStatus(state1, payload) {
        state.isLoading = payload.isLoading
    },
    indexStatus(state1, payload) {
        state.index = payload.index
    },
    loadingDrawer(state1, payload) {
        state.isShowDrawer = payload.isShowDrawer
    },
    setListLayout(state1, payload) {
        state.listLayout = payload.listLayout
    }
}

export default {
    state,
    mutations
}