<template>
  <div class="used-card">
    <h1>Научу зарабатывать от 50 000р. в час</h1>
    <img src="../assets/man.jpg">
    <div class="main-information">
      <div class="info"> 
        <h2>{{ getAuthorFullName }}</h2>
        <strong>Бизнес-клоун</strong>
        <ul>
          <li>Учу людей делать РЕАЛЬНЫЕ бабки, на себя просто не хватило времени Х)</li>
          <li>Не знаю, что такое "Успешный успех", но знаю, что нужно ТЕБЕ!</li>
          <li>Пообещал, что побреюсь, когда кого-нибудь ОБМАНУ.</li>
        </ul>
      </div>
    </div>
    <p>Участников: {{ users.length }}</p>
    <ul>
      <li v-for="(user, index) in users" :key="index"> {{ `${index + 1} ${getFullName(user)}` }}</li>
    </ul>
    <button @click="pageDown(currentPage)">Пред.</button>
    <button v-for="page in pages" :key="page" @click="currentPage = page">{{ page }}</button>
    <button @click="pageUp(currentPage)">След.</button>
    <p>Страница {{ currentPage }} из {{ pages }}</p>
  </div>
</template>

<script>
export default {
  name: 'userCard',
  data() {
    return {
      firstName: "Игнатий",
      secondName: "Иларионович",
      lastName: "Богатов",
      currentPage: 1,
      pages: 3,
      users: [
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        } 
      ]
    }
  },
  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`
    },
    loadUsers(page) {
      console.log(`Загрузка пользователей: страница ${page}`);
    },
    pageUp(page) {
      if (page == this.pages) return this.currentPage;
      this.currentPage++
    },
    pageDown(page) {
      if (page == 1) return this.currentPage;
      this.currentPage--
    }
  },
  computed: {
    getAuthorFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
    }
  },
  watch: {
    currentPage(page) {
      this.loadUsers(page)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
