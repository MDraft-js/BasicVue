<template>
    <div>
        <h1>Пользователи</h1>
        <ul>
            <li v-for="user in users" :key="user.id"><NuxtLink :to="`users/${user.id}`">{{ user.name }}</NuxtLink></li>
        </ul>
    </div>
</template>

<script>
export default {
    async asyncData(context) {
        const res = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

        return { users: res }
    },
    data() {
        return {
            users: []
        }
    }
}
</script>