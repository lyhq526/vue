import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userInfo:JSON.parse(sessionStorage.getItem('userInfo')),
    },
})