<template>
  <SignUp />
</template>

<script>
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  font-family: 'Roboto', sans-serif;
  color: #474747;
}

h1, h2, h3, h4 {
  font-weight: 700;
  color: #333333;
  margin-top: 0;
}

.flex {
  display: flex;
}

.list-default {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.list-default > li {
  font-size: 16px;
  margin-bottom: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 40px;
}
</style>
