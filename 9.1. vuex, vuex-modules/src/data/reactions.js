import reactions from '../mocks/reactions'

const loadReactions = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(reactions)
        }, time)
    })
}

export default {
    state: {
        reactions: []
    },
    getters: {
        getReactions(state) {
            return state.reactions
        }
    },
    mutations: {
        SET_REACTION(state, payload) {
            state.reactions = payload
        }
    },
    actions: {
        async loadReactions({ commit }, payload) {
            try {
                const reactions = await loadReactions(payload)
                commit('SET_REACTION', reactions)
            } catch (error) {
                console.log(error);
            }
        }
    },
}