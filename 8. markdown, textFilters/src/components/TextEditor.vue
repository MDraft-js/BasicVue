<template>
  <div class="text-editor">
    <textarea v-model="text"></textarea>
    <div class="output-text">
      <!-- {{ upperCase(text) && toEmoji(text) }} -->
      <vue3-markdown-it :source="text" :html="true" />
    <button class="button">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextEditor',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    upperCase(text) {
      return text.toUpperCase()
    },
    toEmoji(text) {
      return text.replace(':)', '😀')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 500px;
  height: 200px;
}
</style>
