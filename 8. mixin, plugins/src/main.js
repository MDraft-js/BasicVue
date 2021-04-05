import { createApp } from 'vue'
import App from './App.vue'
import globalMixinPlugin from '../plugins/globalMixin'

createApp(App).use(globalMixinPlugin).mount('#app')
