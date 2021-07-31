const state = {
    users: [],
    roles: [],
    permissions: [],
    form: {

    },

};
const getters = {
    getFormData(state) {
        return state.form
    },
    getUserData(state) {
        return state.users
    },
};
const actions = {};
const mutations = {
    reset: () => {},
    loadUserData() {
        axios.get("users")
            .then(({ data }) => {
                state.users = data.users;
                state.roles = data.roles;
                state.permissions = data.permissions;
            })
            .catch(() => {
                console.log("Error...");
            });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}