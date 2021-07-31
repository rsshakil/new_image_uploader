<template>
<li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Admin Setup
                <i class="fas fa-angle-left right"></i>
                <!-- <span class="badge badge-info right">6</span> -->
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item" v-can="['role_menu']">
                <router-link to="/role" class="nav-link">
                  <b-icon icon="person-check-fill" font-scale="1.2"></b-icon>
                  {{ myLang.role_management }}
                </router-link>
              </li>
              <li class="nav-item" v-can="['permission_menu']">
                <router-link to="/permission" class="nav-link">
                  <b-icon icon="person-bounding-box" font-scale="1.2"></b-icon>
                  {{ myLang.permission_management }}
                </router-link>
              </li>
              <li class="nav-item" v-can="['assign_role_to_user_menu']">
                <router-link to="/assign_role_to_user" class="nav-link">
                  <b-icon icon="folder-symlink-fill" font-scale="1.2"></b-icon>
                  {{ myLang.assign_role_to_user }}
                </router-link>
              </li>
              <li class="nav-item" v-can="['assign_permission_to_user_menu']">
                <router-link to="/assign_permission_to_user" class="nav-link">
                  <b-icon icon="unlock-fill" font-scale="1.2"></b-icon>
                  {{ myLang.assign_permission_to_user }}
                </router-link>
              </li>
              <li class="nav-item" v-can="['manage_user_menu']">
                <router-link to="/users" class="nav-link">
                  <b-icon icon="person-circle" font-scale="1.2"></b-icon>
                  {{ myLang.manage_users }}
                </router-link>
              </li>
            </ul>
          </li>
          </template>
