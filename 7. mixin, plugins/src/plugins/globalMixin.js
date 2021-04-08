import ScrollHandler from '../mixins/scrollHandler'

export default {
    install(Vue) {
        Vue.mixin(ScrollHandler)

        Vue.config.globalProperties.$log = function (text) {
            console.log(`Был установлен глобальный миксин: ${text}`);
        }
    }
}