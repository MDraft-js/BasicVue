<template>
    <div>
        <h1>Как router-view обложка</h1>
        <NuxtChild />
    </div>
</template>

<script>
export default {
    middleware: 'checkAuth',
    created() {
        this.$log()
    }
}
</script>