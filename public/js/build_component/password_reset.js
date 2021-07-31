(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password_reset"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Admin/password_reset.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Admin/password_reset.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      password: '',
      confirm_password: '',
      user_update_id: ''
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      if (this.password == '' || this.confirm_password == '') {
        this.alert_text = "All fields are required";
        this.alert_title = "Required!", this.alert_icon = "warning";
        this.sweet_normal_alert();
        return false;
      }

      if (this.password != this.confirm_password) {
        this.alert_text = "Password not matched";
        this.alert_title = "Required!", this.alert_icon = "error";
        this.sweet_normal_alert();
        return false;
      }

      if (this.password.length < 6) {
        this.alert_text = "Password must greater than 6 charecter";
        this.alert_title = "Required!", this.alert_icon = "error";
        this.sweet_normal_alert();
        return false;
      }

      var password_data = {
        user_id: this.user_update_id,
        password: this.password
      };
      axios.post("change_password", password_data).then(function (_ref) {
        var data = _ref.data;

        if (data.message == 'no_permission') {
          _this.alert_text = "You have no permission to change the password";
        } else if (data.message == 'password_changed') {
          _this.alert_text = _this.myLang.password_changed;
        } else if (data.message == 'required') {
          _this.alert_text = "Password length must greater than 6 charecter";
        }

        _this.alert_title = data.title;
        _this.alert_icon = data.class_name;

        _this.sweet_normal_alert();
      })["catch"](function () {
        _this.sweet_advance_alert();
      });
    }
  },
  created: function created() {
    //LoadTableData
    this.user_update_id = JSON.parse(localStorage.getItem('user')).id;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Admin/password_reset.vue?vue&type=template&id=881a061e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Admin/password_reset.vue?vue&type=template&id=881a061e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "main-content-container container-fluid px-4" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row", attrs: { id: "div" } }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card card-small mb-4" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-0 pb-3 text-center" }, [
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-4 col-form-label",
                    attrs: { for: "new_password" }
                  },
                  [_vm._v("New password")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      placeholder: "New password",
                      required: ""
                    },
                    domProps: { value: _vm.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-4 col-form-label",
                    attrs: { for: "new_password_confirm" }
                  },
                  [_vm._v("Confirm password")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.confirm_password,
                        expression: "confirm_password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      placeholder: "Confirm password",
                      required: ""
                    },
                    domProps: { value: _vm.confirm_password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.confirm_password = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("label", {
                  staticClass: "col-md-4 col-form-label",
                  attrs: { for: "" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("input", {
                    staticClass: "btn btn-success",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.changePassword($event)
                      }
                    }
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header row no-gutters py-4" }, [
      _c(
        "div",
        { staticClass: "col-12 col-sm-4 text-center text-sm-left mb-0" },
        [_c("h3", { staticClass: "page-title" }, [_vm._v("Password Reset")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-bottom" }, [
      _c("h6", { staticClass: "m-0" }, [_vm._v("Password Reset form")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/Admin/password_reset.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/backend/Admin/password_reset.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _password_reset_vue_vue_type_template_id_881a061e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password_reset.vue?vue&type=template&id=881a061e& */ "./resources/js/components/backend/Admin/password_reset.vue?vue&type=template&id=881a061e&");
/* harmony import */ var _password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password_reset.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Admin/password_reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _password_reset_vue_vue_type_template_id_881a061e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _password_reset_vue_vue_type_template_id_881a061e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Admin/password_reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Admin/password_reset.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/backend/Admin/password_reset.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./password_reset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Admin/password_reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Admin/password_reset.vue?vue&type=template&id=881a061e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/backend/Admin/password_reset.vue?vue&type=template&id=881a061e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_template_id_881a061e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./password_reset.vue?vue&type=template&id=881a061e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Admin/password_reset.vue?vue&type=template&id=881a061e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_template_id_881a061e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_password_reset_vue_vue_type_template_id_881a061e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);