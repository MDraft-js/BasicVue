<template>
  <div class="root">
    <input type="email" :value="email" v-on:input="emailInput">
    {{ email }}
    <input type="password" :value="password" v-on:input="passwordInput">
    {{ password }}
  </div>
</template>

<script>
export default {
  name: 'forms',
  data() {
    return {
      email: 'example@example.com',
      password: '12345678'
    }
  },
  methods: {
    emailInput(event) {
      this.email = event.target.value
    },
    passwordInput(event) {
      this.password = event.target.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>