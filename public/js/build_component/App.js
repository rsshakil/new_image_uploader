(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["App"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/app.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/app.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./resources/js/components/backend/Default/navbar.vue");
/* harmony import */ var _backend_Login_login_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../backend/Login/login_nav */ "./resources/js/components/backend/Login/login_nav.vue");
/* harmony import */ var _side_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side_bar */ "./resources/js/components/backend/Default/side_bar.vue");
/* harmony import */ var _project_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project_footer */ "./resources/js/components/backend/Default/project_footer.vue");
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
  name: 'app',
  components: {
    navbar: _navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    login_navbar: _backend_Login_login_nav__WEBPACK_IMPORTED_MODULE_1__["default"],
    sidebar: _side_bar__WEBPACK_IMPORTED_MODULE_2__["default"],
    projectfooter: _project_footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      user: null,
      loading: false,
      initiated: false,
      token: null
    };
  },
  methods: {
    token_set: function token_set() {
      this.token = this.getWithExpiry('token');
    }
  },
  created: function created() {
    var _this = this;

    this.token_set();
    Fire.$on("header_nav", function () {
      _this.token_set();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navbar',
  props: ['app'],
  data: function data() {
    return {
      // local:Globals.local,
      user_data: null,
      local: "en",
      image_url: null
    };
  },
  methods: {
    userDataSet: function userDataSet() {
      this.user_data = JSON.parse(localStorage.getItem('user'));
      this.imageSrc(this.user_data.image); // console.log(this.user_data);
    },
    imageSrc: function imageSrc(image_name) {
      // console.log(image_name);
      if (image_name) {
        return this.image_url = this.BASE_URL + "/storage/app/backend/images/user_images/" + image_name;
      } else {
        return this.image_url = this.BASE_URL + "/storage/app/backend/images/default/no-image.png";
      }
    }
  },
  created: function created() {
    var _this = this;

    this.userDataSet();
    Fire.$on("userDataSet", function () {
      _this.userDataSet();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/project_footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/side_bar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/side_bar.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "sidebar",
  props: ["app"],
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content")
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.footer {\r\n   position: fixed;\r\n   left: 0;\r\n   bottom: 0;\r\n   width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_footer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/app.vue?vue&type=template&id=4def1c3d&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/app.vue?vue&type=template&id=4def1c3d& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12 p-0" },
        [
          _vm.token
            ? _c("navbar", { attrs: { app: this } })
            : _c("login_navbar", { attrs: { app: this } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-2 px-0" },
        [_vm.token ? _c("sidebar", { attrs: { app: this } }) : _vm._e()],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10" }, [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-12",
          staticStyle: { "margin-top": "70px", padding: "0px" }
        },
        [_c("projectfooter", { attrs: { app: this } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/navbar.vue?vue&type=template&id=06333024&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/navbar.vue?vue&type=template&id=06333024& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("main", { staticClass: "main-content p-0 " }, [
    _c("div", { staticClass: "main-navbar sticky-top bg-white" }, [
      _c(
        "nav",
        {
          staticClass:
            "navbar align-items-stretch navbar-light flex-md-nowrap p-0"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("ul", { staticClass: "navbar-nav border-left flex-row " }, [
            _c("li", { staticClass: "nav-item dropdown" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle text-nowrap px-3",
                  attrs: {
                    href: "#",
                    id: "navbarDropdown",
                    role: "button",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _vm.local == "ja"
                    ? _c("span", { staticClass: "flag-icon flag-icon-jp" })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.local == "en"
                    ? _c("span", { staticClass: "flag-icon flag-icon-us" })
                    : _vm._e(),
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.local == "en" ? "English" : "日本語") +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dropdown-menu dropdown-menu-small",
                  attrs: { "aria-labelledby": "navbarDropdown" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: _vm.BASE_URL + "language/en" }
                    },
                    [
                      _c("span", { staticClass: "flag-icon flag-icon-us" }),
                      _vm._v(" English")
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: _vm.BASE_URL + "language/ja" }
                    },
                    [
                      _c("span", { staticClass: "flag-icon flag-icon-jp" }),
                      _vm._v(" 日本語")
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item dropdown" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link dropdown-toggle text-nowrap px-3",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    role: "button",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                  }
                },
                [
                  _vm.user_data
                    ? _c("img", {
                        staticClass: "user-avatar rounded-circle mr-2",
                        staticStyle: { "max-height": "46px !important" },
                        attrs: { src: _vm.image_url, alt: "" }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-none d-md-inline-block" }, [
                    _vm._v(_vm._s(_vm.user_data ? _vm.user_data.name : ""))
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dropdown-menu dropdown-menu-small",
                  staticStyle: { "margin-left": "-60px" }
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item",
                      attrs: { to: { name: "user_update" } }
                    },
                    [
                      _c("b-icon", {
                        attrs: { icon: "person", "font-scale": "1.2" }
                      }),
                      _vm._v(" " + _vm._s(_vm.myLang.profile_text))
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item pc",
                      attrs: { to: { name: "password_reset" } }
                    },
                    [
                      _c("b-icon", {
                        attrs: { icon: "pencil-square", "font-scale": "1.2" }
                      }),
                      _vm._v(" " + _vm._s(_vm.myLang.change_password))
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dropdown-item text-danger",
                      on: {
                        click: function($event) {
                          return _vm.logout()
                        }
                      }
                    },
                    [
                      _c("b-icon", {
                        attrs: { icon: "box-arrow-right", "font-scale": "1.2" }
                      }),
                      _vm._v(" Logout ")
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        staticClass: "main-navbar__search w-100 d-none d-md-flex d-lg-flex",
        attrs: { action: "#" }
      },
      [
        _c("div", { staticClass: "input-group input-group-seamless ml-3" }, [
          _c("div", { staticClass: "input-group-prepend" }, [
            _c("div", { staticClass: "input-group-text" })
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "navbar-search form-control",
            attrs: {
              type: "hidden",
              placeholder: "Search for something...",
              "aria-label": "Search"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "nav" }, [
      _c(
        "a",
        {
          staticClass:
            "nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left",
          attrs: {
            href: "#",
            "data-toggle": "collapse",
            "data-target": ".header-navbar",
            "aria-expanded": "false",
            "aria-controls": "header-navbar"
          }
        },
        [_c("i", { staticClass: "material-icons" }, [_vm._v("")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=template&id=5c6fbdd6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/project_footer.vue?vue&type=template&id=5c6fbdd6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "footer main-footer d-flex p-2 px-3 bg-white border-top" },
      [
        _c("span", { staticClass: "copyright ml-auto my-auto mr-2" }, [
          _vm._v("Copyright © 2019\n\t\t"),
          _c(
            "a",
            {
              attrs: {
                href: "https://dhakajacos.com.bd",
                rel: "nofollow",
                target: "_blank"
              }
            },
            [_vm._v("Jacos team")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/side_bar.vue?vue&type=template&id=481cb682&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Default/side_bar.vue?vue&type=template&id=481cb682& ***!
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
  return _c(
    "aside",
    {
      staticClass: "main-sidebar",
      staticStyle: { position: "absolute", top: "-60px" }
    },
    [
      _c("div", { staticClass: "main-navbar" }, [
        _c(
          "nav",
          {
            staticClass:
              "navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0"
          },
          [
            _c(
              "router-link",
              {
                staticClass: "nav-link",
                staticStyle: { "line-height": "25px" },
                attrs: { to: "/" }
              },
              [
                _c("div", { staticClass: "d-table m-auto" }, [
                  _c("img", {
                    staticClass: "d-inline-block align-top mr-1",
                    staticStyle: { "max-width": "25%" },
                    attrs: {
                      id: "main-logo",
                      src:
                        "/my_template/public/backend/images/logo/jacos_logo.png",
                      alt: "Jacos Dashboard"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-none d-md-inline ml-1" }, [
                    _vm._v(_vm._s(_vm.myLang.heading))
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm._m(0)
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "nav-wrapper" }, [
        _c("ul", { staticClass: "nav flex-column" }, [
          _c(
            "li",
            {
              directives: [
                {
                  name: "can",
                  rawName: "v-can",
                  value: ["dashboard_menu"],
                  expression: "['dashboard_menu']"
                }
              ],
              staticClass: "nav-item"
            },
            [
              _c(
                "a",
                {
                  staticClass: "nav-link collapsed",
                  attrs: {
                    href: "#dashboardmenu1",
                    "data-toggle": "collapse",
                    "data-target": "#dashboardmenu1"
                  }
                },
                [
                  _c("b-icon", {
                    attrs: { icon: "gear-fill", "font-scale": "1.2" }
                  }),
                  _vm._v("\n          Admin Setup")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "collapse",
                  attrs: { id: "dashboardmenu1", "aria-expanded": "false" }
                },
                [
                  _c("ul", { staticClass: "flex-column pl-2 nav" }, [
                    _c(
                      "li",
                      {
                        directives: [
                          {
                            name: "can",
                            rawName: "v-can",
                            value: ["dashboard_menu"],
                            expression: "['dashboard_menu']"
                          }
                        ],
                        staticClass: "nav-item"
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "admin_home" } }
                          },
                          [
                            _c("b-icon", {
                              attrs: { icon: "house-fill", "font-scale": "1.2" }
                            }),
                            _vm._v(
                              " " +
                                _vm._s(_vm.myLang.dashboard_text) +
                                "\n              "
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
                            value: ["role_menu"],
                            expression: "['role_menu']"
                          }
                        ],
                        staticClass: "nav-item"
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "role" } }
                          },
                          [
                            _c("b-icon", {
                              attrs: {
                                icon: "person-check-fill",
                                "font-scale": "1.2"
                              }
                            }),
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.myLang.role_management) +
                                "\n              "
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
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "permission" } }
                          },
                          [
                            _c("b-icon", {
                              attrs: {
                                icon: "person-bounding-box",
                                "font-scale": "1.2"
                              }
                            }),
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.myLang.permission_management) +
                                "\n              "
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
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "assign_role_to_user" } }
                          },
                          [
                            _c("b-icon", {
                              attrs: {
                                icon: "folder-symlink-fill",
                                "font-scale": "1.2"
                              }
                            }),
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.myLang.assign_role_to_user) +
                                "\n              "
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
                            attrs: { to: { name: "assign_permission_to_user" } }
                          },
                          [
                            _c("b-icon", {
                              attrs: {
                                icon: "unlock-fill",
                                "font-scale": "1.2"
                              }
                            }),
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.myLang.assign_permission_to_user) +
                                "\n              "
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
                          {
                            staticClass: "nav-link",
                            attrs: { to: { name: "users" } }
                          },
                          [
                            _c("b-icon", {
                              attrs: {
                                icon: "person-circle",
                                "font-scale": "1.2"
                              }
                            }),
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.myLang.manage_users) +
                                "\n              "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ]
          )
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
    return _c(
      "a",
      { staticClass: "toggle-sidebar d-sm-inline d-md-none d-lg-none" },
      [_c("i", { staticClass: "material-icons" }, [_vm._v("")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        staticClass:
          "main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none",
        attrs: { action: "#" }
      },
      [
        _c("div", { staticClass: "input-group input-group-seamless ml-3" }, [
          _c("div", { staticClass: "input-group-prepend" }, [
            _c("div", { staticClass: "input-group-text" }, [
              _c("i", { staticClass: "fas fa-search" })
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "navbar-search form-control",
            attrs: {
              type: "text",
              placeholder: "Search for something...",
              "aria-label": "Search"
            }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_nav.vue?vue&type=template&id=929c37de&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Login/login_nav.vue?vue&type=template&id=929c37de& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "nav",
    { staticClass: "navbar navbar-expand-lg navbar-light bg-light rounded" },
    [
      _c(
        "div",
        {
          staticClass: "collapse navbar-collapse",
          attrs: { id: "navbarsExample09" }
        },
        [
          _c("ul", { staticClass: "navbar-nav border-left flex-row " }, [
            _c("li", { staticClass: "nav-item dropdown" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dropdown-menu dropdown-menu-small",
                  attrs: { "aria-labelledby": "navbarDropdown" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: _vm.BASE_URL + "language/en" }
                    },
                    [
                      _c("span", { staticClass: "flag-icon flag-icon-us" }),
                      _vm._v(" English")
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dropdown-divider" }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: _vm.BASE_URL + "language/ja" }
                    },
                    [
                      _c("span", { staticClass: "flag-icon flag-icon-jp" }),
                      _vm._v(" 日本語")
                    ]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle text-nowrap px-3",
        attrs: {
          href: "#",
          id: "navbarDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("span", { staticClass: "flag-icon flag-icon-jp" }),
        _vm._v(" 日本語\n                                          "),
        _c("span", { staticClass: "flag-icon flag-icon-us" }),
        _vm._v(" English\n                                      ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/backend/Default/app.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/backend/Default/app.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_vue_vue_type_template_id_4def1c3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=4def1c3d& */ "./resources/js/components/backend/Default/app.vue?vue&type=template&id=4def1c3d&");
/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Default/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_vue_vue_type_template_id_4def1c3d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_vue_vue_type_template_id_4def1c3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Default/app.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Default/app.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/backend/Default/app.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/app.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Default/app.vue?vue&type=template&id=4def1c3d&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/app.vue?vue&type=template&id=4def1c3d& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_4def1c3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=4def1c3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/app.vue?vue&type=template&id=4def1c3d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_4def1c3d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_4def1c3d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Default/navbar.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/backend/Default/navbar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_vue_vue_type_template_id_06333024___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.vue?vue&type=template&id=06333024& */ "./resources/js/components/backend/Default/navbar.vue?vue&type=template&id=06333024&");
/* harmony import */ var _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Default/navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navbar_vue_vue_type_template_id_06333024___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navbar_vue_vue_type_template_id_06333024___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Default/navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Default/navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Default/navbar.vue?vue&type=template&id=06333024&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/navbar.vue?vue&type=template&id=06333024& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_06333024___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./navbar.vue?vue&type=template&id=06333024& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/navbar.vue?vue&type=template&id=06333024&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_06333024___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navbar_vue_vue_type_template_id_06333024___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Default/project_footer.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/backend/Default/project_footer.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_footer_vue_vue_type_template_id_5c6fbdd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_footer.vue?vue&type=template&id=5c6fbdd6& */ "./resources/js/components/backend/Default/project_footer.vue?vue&type=template&id=5c6fbdd6&");
/* harmony import */ var _project_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_footer.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Default/project_footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_footer.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _project_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _project_footer_vue_vue_type_template_id_5c6fbdd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _project_footer_vue_vue_type_template_id_5c6fbdd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Default/project_footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Default/project_footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/project_footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_footer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/backend/Default/project_footer.vue?vue&type=template&id=5c6fbdd6&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/project_footer.vue?vue&type=template&id=5c6fbdd6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_template_id_5c6fbdd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_footer.vue?vue&type=template&id=5c6fbdd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/project_footer.vue?vue&type=template&id=5c6fbdd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_template_id_5c6fbdd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_footer_vue_vue_type_template_id_5c6fbdd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Default/side_bar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/backend/Default/side_bar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_bar_vue_vue_type_template_id_481cb682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side_bar.vue?vue&type=template&id=481cb682& */ "./resources/js/components/backend/Default/side_bar.vue?vue&type=template&id=481cb682&");
/* harmony import */ var _side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side_bar.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Default/side_bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _side_bar_vue_vue_type_template_id_481cb682___WEBPACK_IMPORTED_MODULE_0__["render"],
  _side_bar_vue_vue_type_template_id_481cb682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Default/side_bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Default/side_bar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/side_bar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./side_bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/side_bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Default/side_bar.vue?vue&type=template&id=481cb682&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/backend/Default/side_bar.vue?vue&type=template&id=481cb682& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_481cb682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./side_bar.vue?vue&type=template&id=481cb682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Default/side_bar.vue?vue&type=template&id=481cb682&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_481cb682___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_481cb682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Login/login_nav.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/backend/Login/login_nav.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_nav_vue_vue_type_template_id_929c37de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_nav.vue?vue&type=template&id=929c37de& */ "./resources/js/components/backend/Login/login_nav.vue?vue&type=template&id=929c37de&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _login_nav_vue_vue_type_template_id_929c37de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_nav_vue_vue_type_template_id_929c37de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Login/login_nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Login/login_nav.vue?vue&type=template&id=929c37de&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/backend/Login/login_nav.vue?vue&type=template&id=929c37de& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_nav_vue_vue_type_template_id_929c37de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login_nav.vue?vue&type=template&id=929c37de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Login/login_nav.vue?vue&type=template&id=929c37de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_nav_vue_vue_type_template_id_929c37de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_nav_vue_vue_type_template_id_929c37de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);