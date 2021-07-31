(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm_menu"],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/Menu/adm_menu.vue?vue&type=template&id=22064c00&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/Menu/adm_menu.vue?vue&type=template&id=22064c00& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "nav-item" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("ul", { staticClass: "nav nav-treeview" }, [
      _c(
        "li",
        {
          directives: [
            {
              name: "can",
              rawName: "v-can",
              value: ["role_menu"],
              expression: "['role_menu']"
            }
          ],
          staticClass: "nav-item"
        },
        [
          _c(
            "router-link",
            { staticClass: "nav-link", attrs: { to: "/role" } },
            [
              _c("b-icon", {
                attrs: { icon: "person-check-fill", "font-scale": "1.2" }
              }),
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.myLang.role_management) +
                  "\n                "
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          directives: [
            {
              name: "can",
              rawName: "v-can",
              value: ["permission_menu"],
              expression: "['permission_menu']"
            }
          ],
          staticClass: "nav-item"
        },
        [
          _c(
            "router-link",
            { staticClass: "nav-link", attrs: { to: "/permission" } },
            [
              _c("b-icon", {
                attrs: { icon: "person-bounding-box", "font-scale": "1.2" }
              }),
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.myLang.permission_management) +
                  "\n                "
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          directives: [
            {
              name: "can",
              rawName: "v-can",
              value: ["assign_role_to_user_menu"],
              expression: "['assign_role_to_user_menu']"
            }
          ],
          staticClass: "nav-item"
        },
        [
          _c(
            "router-link",
            { staticClass: "nav-link", attrs: { to: "/assign_role_to_user" } },
            [
              _c("b-icon", {
                attrs: { icon: "folder-symlink-fill", "font-scale": "1.2" }
              }),
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.myLang.assign_role_to_user) +
                  "\n                "
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          directives: [
            {
              name: "can",
              rawName: "v-can",
              value: ["assign_permission_to_user_menu"],
              expression: "['assign_permission_to_user_menu']"
            }
          ],
          staticClass: "nav-item"
        },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link",
              attrs: { to: "/assign_permission_to_user" }
            },
            [
              _c("b-icon", {
                attrs: { icon: "unlock-fill", "font-scale": "1.2" }
              }),
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.myLang.assign_permission_to_user) +
                  "\n                "
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          directives: [
            {
              name: "can",
              rawName: "v-can",
              value: ["manage_user_menu"],
              expression: "['manage_user_menu']"
            }
          ],
          staticClass: "nav-item"
        },
        [
          _c(
            "router-link",
            { staticClass: "nav-link", attrs: { to: "/users" } },
            [
              _c("b-icon", {
                attrs: { icon: "person-circle", "font-scale": "1.2" }
              }),
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.myLang.manage_users) +
                  "\n                "
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
      _c("i", { staticClass: "nav-icon fas fa-copy" }),
      _vm._v(" "),
      _c("p", [
        _vm._v("\n                Admin Setup\n                "),
        _c("i", { staticClass: "fas fa-angle-left right" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/Default/Menu/adm_menu.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/backend/Default/Menu/adm_menu.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adm_menu_vue_vue_type_template_id_22064c00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adm_menu.vue?vue&type=template&id=22064c00& */ "./resources/js/components/backend/Default/Menu/adm_menu.vue?vue&type=template&id=22064c00&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _adm_menu_vue_vue_type_template_id_22064c00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adm_menu_vue_vue_type_template_id_22064c00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Default/Menu/adm_menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Default/Menu/adm_menu.vue?vue&type=template&id=22064c00&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/Menu/adm_menu.vue?vue&type=template&id=22064c00& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adm_menu_vue_vue_type_template_id_22064c00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./adm_menu.vue?vue&type=template&id=22064c00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/Menu/adm_menu.vue?vue&type=template&id=22064c00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adm_menu_vue_vue_type_template_id_22064c00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adm_menu_vue_vue_type_template_id_22064c00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);