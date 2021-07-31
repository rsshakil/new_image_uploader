(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Login/login_body.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
      email: null,
      password: null,
      logoSrc: '',
      has_error: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      axios.post('auth/login', {
        email: this.email,
        password: this.password
      }).then(function (_ref) {
        var data = _ref.data;

        _this.setWithExpiry("token", data.access_token, _this.myTTL); //3600 sec or 1 hour


        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("Permissions", JSON.stringify(data.permissions));
        axios.defaults.headers.common['Authorization'] = "Bearer ".concat(_this.getWithExpiry("token"));

        _this.$router.push({
          name: 'admin_home'
        });

        Fire.$emit('header_nav');
      })["catch"](function () {
        _this.alert_icon = 'error', _this.alert_title = 'Ohh!!', _this.alert_text = 'User name or password missmatch';

        _this.sweet_advance_alert();
      }); //   .catch(function (error) {
      //       console.log(error);
      //     if (error.response) {
      //     console.log(error.response.data);
      //     console.log(error.response.status);
      //     console.log(error.response.headers);
      //     }
      // });
    }
  },
  mounted: function mounted() {//
  },
  created: function created() {
    this.logoSrc = '../public/dashboard/logo/cropped-Jacos-main.png';
    Fire.$emit('header_nav');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card {\n    margin-bottom: 20px;\n    border: none\n}\n.box {\n    width: 500px;\n    padding: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background: #191919;\n    ;\n    text-align: center;\n    transition: 0.25s;\n    margin-top: 100px\n}\n.box input[type=\"text\"],\n.box input[type=\"password\"] {\n    border: 0;\n    background: none;\n    display: block;\n    margin: 20px auto;\n    text-align: center;\n    border: 2px solid #3498db;\n    padding: 10px 10px;\n    width: 250px;\n    outline: none;\n    color: white;\n    border-radius: 24px;\n    transition: 0.25s\n}\n.box h1 {\n    color: white;\n    text-transform: uppercase;\n    font-weight: 500\n}\n.box input[type=\"text\"]:focus,\n.box input[type=\"password\"]:focus {\n    width: 300px;\n    border-color: #2ecc71\n}\n.box input[type=\"submit\"] {\n    border: 0;\n    background: none;\n    display: block;\n    margin: 20px auto;\n    text-align: center;\n    border: 2px solid #2ecc71;\n    padding: 14px 40px;\n    outline: none;\n    color: white;\n    border-radius: 24px;\n    transition: 0.25s;\n    cursor: pointer\n}\n.box input[type=\"submit\"]:hover {\n    background: #2ecc71\n}\n.forgot {\n    text-decoration: underline\n}\nul.social-network {\n    list-style: none;\n    display: inline;\n    margin-left: 0 !important;\n    padding: 0\n}\nul.social-network li {\n    display: inline;\n    margin: 0 5px\n}\n.social-network a.icoFacebook:hover {\n    background-color: #3B5998\n}\n.social-network a.icoTwitter:hover {\n    background-color: #33ccff\n}\n.social-network a.icoGoogle:hover {\n    background-color: #BD3518\n}\n.social-network a.icoFacebook:hover i,\n.social-network a.icoTwitter:hover i,\n.social-network a.icoGoogle:hover i {\n    color: #fff\n}\na.socialIcon:hover,\n.socialHoverClass {\n    color: #44BCDD\n}\n.social-circle li a {\n    display: inline-block;\n    position: relative;\n    margin: 0 auto 0 auto;\n    border-radius: 50%;\n    text-align: center;\n    width: 50px;\n    height: 50px;\n    font-size: 20px\n}\n.social-circle li i {\n    margin: 0;\n    line-height: 50px;\n    text-align: center\n}\n.social-circle li a:hover i,\n.triggeredHover {\n    transform: rotate(360deg);\n    transition: all 0.2s\n}\n.social-circle i {\n    color: #fff;\n    transition: all 0.8s;\n    transition: all 0.8s\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login_body.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=template&id=0adcb424&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Login/login_body.vue?vue&type=template&id=0adcb424& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "wrapper fadeInDown" }, [
    _c("div", { attrs: { id: "formContent" } }, [
      _c("div", { staticClass: "fadeIn first" }),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "form",
              {
                staticClass: "box",
                attrs: { method: "POST" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c("h1", [_vm._v("Login")]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v(" Please enter your login and password!")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    }
                  ],
                  attrs: { type: "text", placeholder: "Username" },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password"
                    }
                  ],
                  attrs: { type: "password", placeholder: "Password" },
                  domProps: { value: _vm.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "forgot text-muted", attrs: { href: "#" } },
                  [_vm._v("Forgot password?")]
                ),
                _vm._v(" "),
                _c("input", { attrs: { type: "submit", value: "Login" } }),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("ul", { staticClass: "social-network social-circle" }, [
        _c("li", [
          _c(
            "a",
            {
              staticClass: "icoFacebook",
              attrs: { href: "#", title: "Facebook" }
            },
            [_c("i", { staticClass: "fab fa-facebook-f" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "icoTwitter",
              attrs: { href: "#", title: "Twitter" }
            },
            [_c("i", { staticClass: "fab fa-twitter" })]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "a",
            {
              staticClass: "icoGoogle",
              attrs: { href: "#", title: "Google +" }
            },
            [_c("i", { staticClass: "fab fa-google-plus" })]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "formFooter" } }, [
      _c("a", {
        staticClass: "underlineHover",
        attrs: { href: "template_vue/password/reset" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/backend/Login/login_body.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/backend/Login/login_body.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_body_vue_vue_type_template_id_0adcb424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_body.vue?vue&type=template&id=0adcb424& */ "./resources/js/components/backend/Login/login_body.vue?vue&type=template&id=0adcb424&");
/* harmony import */ var _login_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_body.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Login/login_body.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_body_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_body.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_body_vue_vue_type_template_id_0adcb424___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_body_vue_vue_type_template_id_0adcb424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Login/login_body.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Login/login_body.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/backend/Login/login_body.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login_body.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login_body.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/backend/Login/login_body.vue?vue&type=template&id=0adcb424&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/backend/Login/login_body.vue?vue&type=template&id=0adcb424& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_template_id_0adcb424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login_body.vue?vue&type=template&id=0adcb424& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_body.vue?vue&type=template&id=0adcb424&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_template_id_0adcb424___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_body_vue_vue_type_template_id_0adcb424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);