<template>
  <div class="films-layout">
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import { mapActions } from 'vuex'

export default {
  components: { MainHeader },
  created() {
    // this.$store.dispatch('loadReactions', 1000)
    this.loadReactions(1000)
  },
  methods: {
    ...mapActions(['loadReactions'])
  }
}
</script>

<style scoped>
</style>