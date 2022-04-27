const mutations = {
    SET_SUPPORTS(state, supports) {
        //state.supports = supports

        // seta dessa maneira, pois pode receber o supports com ou sem paginacao
        state.supports = Object.assign({}, state.supports, supports)
    },

    SET_RESET_SUPPORTS(state) {
        state.supports = {
            data: [],
            meta: {
                total: 0,
                page: 0,
                last_page: 0
            }
        }
    },

    ADD_NEW_SUPPORTS(state, support) {
        state.supports.data.unshift(support) // adiciona o novo support no começo do array
    },
}

export default mutations
