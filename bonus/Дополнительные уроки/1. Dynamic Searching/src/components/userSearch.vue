<template>
  <div class="conatiner">
    <h2>Я найду тебя!</h2>
    <input type="text" @input="searchText = $event.target.value">
    <p>Всего имен: {{ names.length }}, совпадений: {{ getFilteredNames.length }}</p>
    <ul class="list">
      <li v-for="(name, index) in getFilteredNames" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'userSearch',
  data() {
    return {
      searchText: '',
      names: ['Данил', 'Василий', 'Дмитрий', 'Григорий', 'Максим']
    }
  },
  computed: {
    getFilteredNames() {
      return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-bottom: 14px;
  margin-top: 40px;
}
</style>
