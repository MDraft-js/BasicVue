<template>
    <div v-if="user" class="user">
        <h1>{{ `Пользователь ${user.name}`}}</h1>
    </div>
</template>

<script>
export default {
    validate({ params }) {
        return /^\d+$/.test(params.id)
    },
    async asyncData({ params }) {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res => res.json())

        return { user }
    },
    data() {
        return {
            user: null
        }
    },

}
</script>