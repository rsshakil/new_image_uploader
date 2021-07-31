export default {
    data() {
        return {
            global_user_id: '',
            myLang: Globals,
            myTTL: 3600,
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
        setWithExpiry(key, value, ttl) {
            const now = new Date()
                // `item` is an object which contains the original value
                // as well as the time when it's supposed to expire
            const item = {
                value: value,
                expiry: now.getTime() + (ttl * 1000),
            }
            localStorage.setItem(key, JSON.stringify(item))
        },
        getWithExpiry(key) {
            const itemStr = localStorage.getItem(key)
                // if the item doesn't exist, return null
            if (!itemStr) {
                return null
            }
            const item = JSON.parse(itemStr)
            const now = new Date()
                // compare the expiry time of the item with the current time
            if (now.getTime() > item.expiry) {
                // If the item is expired, delete the item from storage
                // and return null
                localStorage.removeItem(key)
                return null
            }
            return item.value
        },
        logout() {
            localStorage.removeItem("user")
            localStorage.removeItem("Permissions")
            localStorage.removeItem("token")
            this.$router.push({ name: 'admin_login' })
            Fire.$emit('header_nav');

        }
    },
    filters: {
        subStr: function(string) {
            return string.substring(0, 300) + '...';
        },
        diffForHumans(str) {
            moment.locale('ja');
            return moment(str).from(moment());
        },
        ja_date_time(str) {
            moment.locale('en');
            return moment(str).format('LLL');
        },
        ja_date(str) {
            moment.locale('ja');
            return moment(str).format('LL');
        },
    },
    created(){
        
    }
};
