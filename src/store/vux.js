// initial state
const state = {
    isShowDrawer: false,
    isLoading: false,
    showDialog: false,
    store: {
        storeId: 0,
        posNo: ''
    }
}

// mutations
const mutations = {
    loadingStatus(state1, payload) {
        state.isLoading = payload.isLoading
    },
    setStore(state1, result) {
        state.store = result
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