/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import 'es6-promise/auto'
import axios from 'axios'
require('../../../bootstrap');
// import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
// import auth from './auth'

window.Vue = require('vue');
window.Fire = new Vue();
import VueRouter from 'vue-router';
// import vueselect from 'vue-select2';
//Routes
import { routes } from '../Routes/routes';
//Import Sweetalert2
import Swal from 'sweetalert2'
//Import v-from
import { Form, HasError, AlertError } from 'vform';
//Import vue multi select
import Multiselect from 'vue-multiselect';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import myMixin from '../Mixin/myMixin'
// import FlagIcon from 'vue-flag-icon'
import store from "../store/store";
// NlyTemplate
import "nly-adminlte-vue/dist/adminlte/css/adminlte.css";
import "nly-adminlte-vue/dist/adminlte/fontawesome-free/css/all.css";
import "nly-adminlte-vue/dist/adminlte/icon/iconfont.css";
import "nly-adminlte-vue/dist/nly-adminlte-vue.css";
import { NlyAdminlteVue, NlyAdminlteVueIcons } from "nly-adminlte-vue";
Vue.use(NlyAdminlteVue);
Vue.use(NlyAdminlteVueIcons);
// import { NlyBadge } from "nly-adminlte-vue";
// Vue.component("nly-badge", NlyBadge);
// import { badgePlugin } from "nly-adminlte-vue";
// Vue.use(badgePlugin);


Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue)
    //     // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
    // Vue.use(FlagIcon);
    // register globally
Vue.component('multiselect', Multiselect)
    // Vue.use(vueselect);
    //Pagination laravel-vue-pagination
Vue.component('pagination', require('laravel-vue-pagination'));
// spinner register
Vue.component('spinner', require('vue-simple-spinner'));

Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}api`
axios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.status == 419) {
        return router.push({ name: 'admin_login' });
    }
    return response;
}, function(error) {
    return router.push({ name: 'admin_login' });
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

Vue.config.baseurl = process.env.BASE_URL
    // Vue.use(VueAuth, auth)

window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError);
// define a mixin object for global function
var vm = new Vue({
    mixins: [myMixin]
})
Vue.mixin(myMixin)

// Permission check directive
Vue.directive('can', function(el, binding, vnode) {
    var given_permission = binding.value;
    var localStoragePermissions = localStorage.getItem("Permissions")

    var Permissions = localStoragePermissions ? JSON.parse(localStoragePermissions) : [];
    if (Permissions.length > 0) {
        if (typeof given_permission == 'string') {
            given_permission = [given_permission]
        }
        if (given_permission) {
            var true_array = [];
            var false_array = [];
            for (let i = 0; i < given_permission.length; i++) {
                if (Permissions.indexOf(given_permission[i]) !== -1) {
                    true_array.push(true);
                } else {
                    false_array.push(false);
                }

            }
            if (true_array.length) {
                return vnode.elm.hidden = false;
            } else {
                return vnode.elm.hidden = true;
            }
        }
    }
});
var router = new VueRouter({
    routes: routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active", // active class for *exact* links.
    mode: 'history',
    base: '/new_image_uploader/admin'
});

router.beforeEach((to, from, next) => {
        // var localStoragePermissions = localStorage.getItem("Permissions")
        // var Permissions = localStoragePermissions ? JSON.parse(localStoragePermissions) : [];
        // console.log(Permissions)
        var localStorageToken = vm.getWithExpiry('token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorageToken}`;
        var loggedIn = (localStorageToken == null ? false : true);

        if (loggedIn) {
            if (to.name === 'admin_login') {
                return next({ name: 'admin_home' })
            }
        } else {
            if (to.name === 'admin_home') {
                return next({ name: 'admin_login' })
            }
        }
        next();
    })
    // const App = () =>
    //     import ( /* webpackChunkName: "App" */ '../Default/app.vue')
import App from '../Default/app.vue'
new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount("#app");