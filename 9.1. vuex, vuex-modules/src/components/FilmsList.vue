<template>
  <div class="film-list">
    <FilmCard class="film-card" v-for="film in films" :key="film.id" :film="film" />
  </div>
</template>

<script>
import FilmCard from './FilmCard'

export default {
  components: { FilmCard },
  props: {
    films: {
      type: Array,
      default: []
    } 
  }
}
</script>

<style scoped>
.film-card {
  margin-bottom: 40px;
}
</style>