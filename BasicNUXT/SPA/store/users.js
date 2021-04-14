export const state = () => ({
    users: [{
        name: 'User 1',
        id: 1
    },
    {
        name: 'User 2',
        id: 2
    },
    {
        name: 'User 3',
        id: 3
    }]
})

export const getters = {
    getUsers: state => state.users
}