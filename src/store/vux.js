// initial state
const state = {
    isShowDrawer: false,
    isLoading: false,
    showDialog: false,
    index: 1,
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
    setShowDialog(state1, payload) {
        state.showDialog = payload.showDialog
    }
}

export default {
    state,
    mutations
}