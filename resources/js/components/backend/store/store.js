import Vue from "vue";
import Vuex from "vuex";
import UserDetailsModule from "./modules/USER/UserDetailsModule"
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        UserDetailsModule,
    }
})
