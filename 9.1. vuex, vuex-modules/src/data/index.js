import { createStore } from 'vuex';
import reactionModule from './reactions'

export default createStore({
    modules: [reactionModule]
})