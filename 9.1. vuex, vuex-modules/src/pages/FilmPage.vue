<template>
<div class="film-page">
  <div class="container" v-if="film">
    <h1>{{ film.title }}</h1>
    <img :src="film.img" :alt="film.title">
    <div class="section">
      <p class="section__title">Немного о сюжете:</p>
      <p class="section__description">{{ film.description }}</p>
    </div>
    <div class="section">
      <p class="section__title">Рейтинг:</p>
      <p class="section__description">{{ film.rating }}</p>
    </div>
    <div class="section">
      <p class="section__title">Актерский состав:</p>
      <p class="section__description">{{ film.actors.join(', ') }}</p>
    </div>
    <div class="section">
      <p class="section__title">Режисеры:</p>
      <p class="section__description">{{ film.directors.join(', ') }}</p>
    </div>
    <div class="line" />
      <div class="review">
        <h3>Смотрели данный фильм ?</h3>
        <p>Оставьте отзыв:</p>
        <ul>
          <li v-for="reaction in reactions" :key="reaction.id"><button type="button" class="btn btn-outline-light">{{ reaction.title }}</button></li>
        </ul>
    </div>
  </div>
  <div class="container" v-else>
    <h1>Такого фильма не существует</h1>
  </div>
</div>
</template>

<script>
import films from '../mocks/films'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      film: null
    }
  },
  created() {
    const film = films.find(film => film.id == this.$route.params.id)
    if (film) {
      this.film = film
    }
  },
  computed: {
    ...mapGetters(['getReactions']),
    reactions() {
      return this.getReactions
    }
  }
}
</script>

<style scoped>
.film-page {
  padding-bottom: 100px;
}
.film-page__title {
  color: #EB5804;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
}
.film-page__description {
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
}
.film-page .back {
  color: #ffffff;
  margin-left: 30px;
  margin-top: 30px;
}
.film-page h1 {
  color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 15px;
  position: relative;
}
.film-page::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
}
.film-page img {
  object-fit: cover;
  border-radius: 10px;
  width: 1160px;
  height: 600px;
  margin-bottom: 30px;
}
.line {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
  margin-bottom: 45px;
}
.review h3 {
  color: #ffffff;
}
.review p {
  font-weight: 600;
  font-size: 18px;
  color: #EB5804;
}
.review ul {
  padding-left: 0;
  list-style: none;
  display: flex;
}
.review li {
  margin-right: 15px;
}
</style>