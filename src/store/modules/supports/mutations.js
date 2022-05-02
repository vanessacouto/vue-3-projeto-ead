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

    ADD_NEW_SUPPORT(state, support) {
        state.supports.data.unshift(support) // adiciona o novo support no começo do array
    },

    ADD_NEW_REPLY_TO_SUPPORT(state, data) {
        const reply = data.reply
        const supportId = data.supportId
        const supports = state.supports.data

        supports.forEach((support, index) => { // percorre os supports
            if (support.id === supportId) {
                supports[index].replies.push(reply) // adiciona a nova resposta
            }
        })
        
        state.supports.data = supports
    },
}

export default mutations
