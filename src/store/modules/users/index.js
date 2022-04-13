export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
            state.loggedIn = true
        },
        LOGOUT(state, user) {
            state.user = {
                name: '',
                email: '',
            }

            state.loggedIn = false
        },
    },

    actions: {
    },
}