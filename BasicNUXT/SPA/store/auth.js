export const state = () => ({
    auth: true,
})

export const getters = {
    getAuth: state => state.auth
}