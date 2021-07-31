<template>

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/home" class="brand-link">
        <img :src="base_url+'/public/backend/images/AdminLTELogo.png'" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Sakil</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="image_path" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
            <router-link :to="{ name: 'user_update', query: { user_id: user.id } }" class="d-block" v-can="['user_profile_view']">{{user.name}}</router-link>
          <!-- <a href="#" class="d-block">Alexander Pierce</a> -->
        </div>
      </div>


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item" v-can="['dashboard_menu']">
              <router-link to="/home" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
                    {{ myLang.dashboard_text }}
                </router-link>
          </li>
          
          <li class="nav-item">
            <!-- <a href="#" class="nav-link"> -->
              <!-- <i class="nav-icon far fa-circle text-info"></i> -->
              <button class="dropdown-item text-danger" @click="logout()"> <b-icon icon="box-arrow-right" font-scale="1.2"></b-icon> Logout </button>
            <!-- </a> -->
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

</template>

<script>
const adm_menu = () => import ( /* webpackChunkName: "adm_menu" */ './Menu/adm_menu.vue')
export default {
  name: "sidebar",
  props: ["app"],
  components:{
    adm_menu,
},
  data() {
    return {
        user:{},
        image_path:null,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
      base_url:Globals.base_url

    };

  },
  methods: {
userDataSet(){
        this.user=JSON.parse(localStorage.getItem('user'));
        this.imageSrc(this.user.image)
        // console.log(this.user_data);
    },
    imageSrc(image_name) {
            if (image_name) {
                return this.image_path=this.BASE_URL + "/storage/app/backend/images/user_images/" + image_name
            } else {
                return this.image_path=this.BASE_URL + "/storage/app/backend/images/default/no-image.png"
            }
        },
  },
  created(){
    this.userDataSet();
    Fire.$on("userDataSet", () => {
            this.userDataSet();
        });
  }
};
</script>
