// import Home from './pages/Home'
// import Register from './pages/Register'
import Login from '../Login/login_body.vue'
// import Login from './components/backend/Login/login_body.vue'
// import Dashboard from './pages/user/Dashboard'
// import AdminDashboard from './pages/admin/Dashboard'

import Home from '../Admin/home_component.vue'
import Role from '../Admin/role_component.vue'
import permission from '../Admin/permission_component.vue'
import assign_role_model from '../Admin/assign_role_model.vue'
import assign_permission_model from '../Admin/assign_permission_model.vue'
import users from '../Admin/users.vue'
import user_update from '../Admin/user_update.vue'
import password_reset from '../Admin/password_reset.vue'
// import login_body from './components/login/login_body.vue'

export const routes = [{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            auth: true
        }
    },
    { path: '/role', component: Role },
    { path: '/permission', component: permission },
    { path: '/assign_role_to_user', component: assign_role_model },
    { path: '/assign_permission_to_user', component: assign_permission_model },
    { path: '/users', name: 'users', component: users },
    { path: '/users/user_update', name: 'user_update', component: user_update },
    { path: '/users/password_reset', name: 'password_reset', component: password_reset },
    // { path: '/login', name: 'login', component: login_body },
];
