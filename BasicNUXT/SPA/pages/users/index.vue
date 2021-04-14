<template>
    <div>
        <h1>Пользователи</h1>
        <ul>
            <li v-for="user in users"  :key="user.id"><nuxt-link :to="`/users/${user.id}`">{{ user.name }}</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            users: 'users/getUsers'
        })
    },
}
</script>