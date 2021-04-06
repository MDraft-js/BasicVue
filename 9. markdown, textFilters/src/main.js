import { createApp } from 'vue'
import App from './App.vue'

import markdown from 'vue3-markdown-it'

createApp(App).use(markdown).mount('#app')