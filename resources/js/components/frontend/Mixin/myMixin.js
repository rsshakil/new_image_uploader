export default {
    data() {
        return {
            global_user_id: '',
            myLang: Globals,
            BASE_URL: `${process.env.MIX_APP_URL}`,
            alert_icon: 'error',
            alert_title: 'Oops...',
            alert_text: 'Something went wrong!',
            alert_footer: 'May be internet or url problem',
        }
    },
    methods: {

        sweet_normal_alert() {
            Swal.fire({
                icon: this.alert_icon,
                title: this.alert_title,
                text: this.alert_text
            })
        },
        sweet_advance_alert() {
            Swal.fire({
                icon: this.alert_icon,
                title: this.alert_title,
                text: this.alert_text,
                footer: this.alert_footer
            })
        },
        delete_sweet() {
            this.alert_icon = 'warning'
            this.alert_title = 'Are you sure?'
            this.alert_text = "You won't be able to revert this!"
            var status = Swal.fire({
                icon: this.alert_icon,
                title: this.alert_title,
                text: this.alert_text,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            return status;
        },
        is_disabled(is_system = 0) {
            if (is_system == 0) {
                return false;
            } else {
                return true;
            }
        },
        logout() {
            localStorage.removeItem("user")
            localStorage.removeItem("Permissions")
            localStorage.removeItem("token")
            this.$router.push({ name: 'login' })
            Fire.$emit('header_nav');

        }
    }
};
