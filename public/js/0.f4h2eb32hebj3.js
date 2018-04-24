webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/post/post.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_linkifyjs_html__ = __webpack_require__("./node_modules/linkifyjs/html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_linkifyjs_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_linkifyjs_html__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "post",
    data: function data() {
        return {
            post: this.postData,
            contentStyle: {
                direction: 'ltr'
            }
        };
    },

    props: {
        postData: {
            type: Object
        },
        postId: {
            type: Number
        },
        withComments: {
            type: Boolean,
            default: false
        },
        mode: String
    },
    methods: {
        likePost: function likePost(event) {
            var $target = $(event.target).closest(".Post_action-like");
            var url = "/api/post/like/";
            if ($target.hasClass("liked")) {
                url = "/api/post/unlike/";
                this.post.likes--;
            } else {
                this.post.likes++;
            }
            $target.toggleClass("liked");

            if (this.post && this.post.id) {
                var postId = this.post.id;
                axios.post(url + postId).then(function (res) {
                    if (res.data && !res.data.success) $(event.target).closest(".Post_action-like").toggleClass("liked");
                }).catch(function () {
                    $(event.target).closest(".Post_action-like").toggleClass("liked");
                });
            }
        },
        handlePostMenu: function handlePostMenu(command) {
            switch (command) {
                case "delete":
                    this.deletePost();
                    break;
            }
        },
        deletePost: function deletePost() {
            var _this = this;

            axios.delete("/api/post/" + this.post.id).then(function (res) {
                if (res.data && res.deleted) {
                    _this.$emit("postDeleted", _this.post.id);
                    console.log(res.data);
                    if (_this.withComments) window.location.href = "/";
                }
            }).catch(function (res) {
                console.log(res.data);
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        if (this.postId) axios.get("/api/post/" + this.postId).then(function (res) {
            _this2.post = res.data;
        });else {
            this.post = this.postData;
        }
        var rtlChar = /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/mg;

        var isRTL = this.post.content.match(rtlChar);
        if (isRTL !== null) {
            this.contentStyle.direction = 'rtl';
            this.contentStyle.textAlign = 'right';
        } else {
            this.contentStyle.direction = 'ltr';
            this.contentStyle.textAlign = 'left';
        }

        this.post.content = this.$linkify(this.post.content);
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7b0155b0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/post/post.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: ["posts-group-item", _vm.withComments ? "withComments" : ""] },
    [
      _c(
        "div",
        { staticClass: "post-wrapper Post" },
        [
          _vm.mode === "self"
            ? _c(
                "el-dropdown",
                {
                  attrs: { trigger: "click" },
                  on: { command: _vm.handlePostMenu }
                },
                [
                  _c(
                    "span",
                    { staticClass: "Post_menu-icon el-dropdown-link" },
                    [_c("i", { staticClass: "fas fa-angle-down" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-dropdown-menu",
                    { attrs: { slot: "dropdown" }, slot: "dropdown" },
                    [
                      _c("el-dropdown-item", { attrs: { command: "delete" } }, [
                        _c("i", { staticClass: "fa fa-trash" }),
                        _vm._v(
                          " " +
                            _vm._s(_vm.trans("common.delete")) +
                            "\n                "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "Post_profile-picture" }, [
            _c(
              "a",
              {
                staticClass: "avatar-thumb",
                attrs: { href: _vm.post.user_url }
              },
              [_c("img", { attrs: { src: _vm.post.profile_picture, alt: "" } })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "Post_content" }, [
            _c("div", { staticClass: "Post_content-top" }, [
              _c(
                "a",
                {
                  staticClass: "Post_username",
                  attrs: { href: _vm.post.user_url }
                },
                [_vm._v(_vm._s(_vm.post.name))]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "Post_date" }, [
                _vm._v(" - "),
                _c("a", { attrs: { href: _vm.post.post_url } }, [
                  _vm._v(_vm._s(_vm.post.created_at))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "Post_text",
              style: _vm.contentStyle,
              domProps: { innerHTML: _vm._s(_vm.post.content) }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "Post_actions" }, [
              _c(
                "div",
                {
                  class: [
                    "Post_action",
                    "Post_action-like",
                    _vm.post.liked ? "liked" : ""
                  ]
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn-link btn",
                      on: {
                        click: function($event) {
                          _vm.likePost($event)
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: { src: "/images/like.svg", alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "Post_action-number" }, [
                        _vm._v(_vm._s(_vm.post.likes))
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              !_vm.withComments
                ? _c(
                    "div",
                    { staticClass: "Post_action Post_action-comment" },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "btn-link btn",
                          attrs: { href: _vm.post.post_url }
                        },
                        [_c("i", { staticClass: "far fa-comment-alt" })]
                      )
                    ]
                  )
                : _vm._e()
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.withComments
        ? _c("comments-list", {
            attrs: {
              "comments-data": _vm.post.comments,
              "post-id": _vm.post.id
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b0155b0", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/post/post.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/post/post.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7b0155b0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/post/post.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/post/post.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b0155b0", Component.options)
  } else {
    hotAPI.reload("data-v-7b0155b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWU/YzBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOztBQUVBO1VBRUE7MEJBQ0E7O3VCQUVBOzsyQkFJQTtBQUhBO0FBRkE7QUFNQTs7OztrQkFJQTtBQUZBOztrQkFLQTtBQUZBOztrQkFJQTtxQkFFQTtBQUhBO2NBS0E7QUFaQTs7MkNBY0E7a0RBQ0E7c0JBQ0E7MkNBQ0E7c0JBQ0E7MEJBQ0E7bUJBQ0E7MEJBQ0E7QUFDQTtnQ0FFQTs7MkNBQ0E7dUNBQ0E7aUNBQ0EsNEJBQ0E7OENBQ0Esa0VBQ0E7QUFDQSxxQ0FDQTs2RUFDQTtBQUNBO0FBQ0E7QUFDQTt5REFDQTtvQkFDQTtxQkFDQTt5QkFDQTtBQUVBOztBQUNBOztBQUNBOzswRUFDQTs2Q0FDQTswREFDQTtvQ0FDQTs4QkFDQSxxQ0FDQTtBQUNBO29DQUNBO2dDQUNBO0FBQ0E7QUFFQTtBQTNDQTs7QUE0Q0E7O2lCQUNBLHNDQUNBLDRCQUNBOzhCQUNBO0FBQ0EsZ0JBQ0E7NkJBQ0E7QUFDQTtzQkFFQTs7NENBQ0E7NEJBQ0E7MENBQ0E7MENBQ0E7QUFDQSxlQUNBOzBDQUNBOzBDQUNBO0FBRUE7O29EQUNBO0FBQ0E7QUF6RkEsRzs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNFQUFzRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3Qyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBaUQ7QUFDdEUsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLG1CQUFtQixvQkFBb0I7QUFDckU7QUFDQSw4Q0FBOEMsU0FBUyxvQkFBb0IsRUFBRTtBQUM3RSxpQ0FBaUMsNkJBQTZCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZiwwQkFBMEIsU0FBUyx5Q0FBeUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25ELHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQSx5QkFBeUIsU0FBUywwQkFBMEIsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYjtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0Esb2NBQWdUO0FBQ2hUO0FBQ0EsbVNBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8wLmY0aDJlYjMyaGViajMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJbJ3Bvc3RzLWdyb3VwLWl0ZW0nLCB3aXRoQ29tbWVudHMgPyAnd2l0aENvbW1lbnRzJyA6ICcnXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdC13cmFwcGVyIFBvc3RcIj5cbiAgICAgICAgICAgIDxlbC1kcm9wZG93biB2LWlmPVwibW9kZSA9PT0gJ3NlbGYnXCIgdHJpZ2dlcj1cImNsaWNrXCIgQGNvbW1hbmQ9XCJoYW5kbGVQb3N0TWVudVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiUG9zdF9tZW51LWljb24gZWwtZHJvcGRvd24tbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZWwtZHJvcGRvd24tbWVudSBzbG90PVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGVsLWRyb3Bkb3duLWl0ZW0gY29tbWFuZD1cImRlbGV0ZVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+IHt7IHRyYW5zKFwiY29tbW9uLmRlbGV0ZVwiKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2VsLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9lbC1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9lbC1kcm9wZG93bj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfcHJvZmlsZS1waWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJwb3N0LnVzZXJfdXJsXCIgY2xhc3M9XCJhdmF0YXItdGh1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwicG9zdC5wcm9maWxlX3BpY3R1cmVcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9jb250ZW50LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInBvc3QudXNlcl91cmxcIiBjbGFzcz1cIlBvc3RfdXNlcm5hbWVcIj57eyBwb3N0Lm5hbWUgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiUG9zdF9kYXRlXCI+IC0gPGEgOmhyZWY9XCJwb3N0LnBvc3RfdXJsXCI+e3sgcG9zdC5jcmVhdGVkX2F0IH19PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF90ZXh0XCIgdi1odG1sPVwicG9zdC5jb250ZW50XCIgOnN0eWxlPVwiY29udGVudFN0eWxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnUG9zdF9hY3Rpb24nLCAnUG9zdF9hY3Rpb24tbGlrZScsIHBvc3QubGlrZWQgPyAnbGlrZWQnIDogJyddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWxpbmsgYnRuXCIgQGNsaWNrPVwibGlrZVBvc3QoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9saWtlLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiUG9zdF9hY3Rpb24tbnVtYmVyXCI+e3sgcG9zdC5saWtlcyB9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X2FjdGlvbiBQb3N0X2FjdGlvbi1jb21tZW50XCIgdi1pZj1cIiF3aXRoQ29tbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicG9zdC5wb3N0X3VybFwiIGNsYXNzPVwiYnRuLWxpbmsgYnRuXCI+PGkgY2xhc3M9XCJmYXIgZmEtY29tbWVudC1hbHRcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNvbW1lbnRzLWxpc3Qgdi1pZj1cIndpdGhDb21tZW50c1wiIDpjb21tZW50cy1kYXRhPVwicG9zdC5jb21tZW50c1wiIDpwb3N0LWlkPVwicG9zdC5pZFwiPjwvY29tbWVudHMtbGlzdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGxpbmtpZnlIdG1sIGZyb20gJ2xpbmtpZnlqcy9odG1sJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJwb3N0XCIsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBvc3Q6IHRoaXMucG9zdERhdGEsXG4gICAgICAgICAgICAgICAgY29udGVudFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2x0cidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0RGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RJZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpdGhDb21tZW50czoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlrZVBvc3QoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLlBvc3RfYWN0aW9uLWxpa2VcIik7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IFwiL2FwaS9wb3N0L2xpa2UvXCJcbiAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyhcImxpa2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL2FwaS9wb3N0L3VubGlrZS9cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QubGlrZXMtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QubGlrZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHRhcmdldC50b2dnbGVDbGFzcyhcImxpa2VkXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zdCAmJiB0aGlzLnBvc3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RJZCA9IHRoaXMucG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KHVybCArIHBvc3RJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgIXJlcy5kYXRhLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLlBvc3RfYWN0aW9uLWxpa2VcIikudG9nZ2xlQ2xhc3MoXCJsaWtlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLlBvc3RfYWN0aW9uLWxpa2VcIikudG9nZ2xlQ2xhc3MoXCJsaWtlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZVBvc3RNZW51KGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQb3N0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVBvc3QoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKFwiL2FwaS9wb3N0L1wiICsgdGhpcy5wb3N0LmlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGVsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInBvc3REZWxldGVkXCIsIHRoaXMucG9zdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLndpdGhDb21tZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zdElkKVxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcIi9hcGkvcG9zdC9cIiArIHRoaXMucG9zdElkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5wb3N0RGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJ0bENoYXIgPSAvW1xcdTA1OTAtXFx1MDgzRl18W1xcdTA4QTAtXFx1MDhGRl18W1xcdUZCMUQtXFx1RkRGRl18W1xcdUZFNzAtXFx1RkVGRl0vbWc7XG5cbiAgICAgICAgICAgIHZhciBpc1JUTCA9IHRoaXMucG9zdC5jb250ZW50Lm1hdGNoKHJ0bENoYXIpO1xuICAgICAgICAgICAgaWYgKGlzUlRMICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50U3R5bGUuZGlyZWN0aW9uID0gJ3J0bCdcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZS5kaXJlY3Rpb24gPSAnbHRyJztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wb3N0LmNvbnRlbnQgPSB0aGlzLiRsaW5raWZ5KHRoaXMucG9zdC5jb250ZW50KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogW1wicG9zdHMtZ3JvdXAtaXRlbVwiLCBfdm0ud2l0aENvbW1lbnRzID8gXCJ3aXRoQ29tbWVudHNcIiA6IFwiXCJdIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zdC13cmFwcGVyIFBvc3RcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLm1vZGUgPT09IFwic2VsZlwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0cmlnZ2VyOiBcImNsaWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbW1hbmQ6IF92bS5oYW5kbGVQb3N0TWVudSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9tZW51LWljb24gZWwtZHJvcGRvd24tbGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtYW5nbGUtZG93blwiIH0pXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlbC1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJkcm9wZG93blwiIH0sIHNsb3Q6IFwiZHJvcGRvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbC1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgY29tbWFuZDogXCJkZWxldGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRyYW5zKFwiY29tbW9uLmRlbGV0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X3Byb2ZpbGUtcGljdHVyZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucG9zdC5wcm9maWxlX3BpY3R1cmUsIGFsdDogXCJcIiB9IH0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfY29udGVudC10b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIlBvc3RfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wb3N0Lm5hbWUpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiAtIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucG9zdC5wb3N0X3VybCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBvc3QuY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiUG9zdF90ZXh0XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uY29udGVudFN0eWxlLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucG9zdC5jb250ZW50KSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcIlBvc3RfYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUG9zdF9hY3Rpb24tbGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdC5saWtlZCA/IFwibGlrZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWxpbmsgYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpa2VQb3N0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9saWtlLnN2Z1wiLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9hY3Rpb24tbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucG9zdC5saWtlcykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS53aXRoQ29tbWVudHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfYWN0aW9uIFBvc3RfYWN0aW9uLWNvbW1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWxpbmsgYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnBvc3RfdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNvbW1lbnQtYWx0XCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS53aXRoQ29tbWVudHNcbiAgICAgICAgPyBfYyhcImNvbW1lbnRzLWxpc3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJjb21tZW50cy1kYXRhXCI6IF92bS5wb3N0LmNvbW1lbnRzLFxuICAgICAgICAgICAgICBcInBvc3QtaWRcIjogX3ZtLnBvc3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2IwMTU1YjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiMDE1NWIwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtN2IwMTU1YjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wb3N0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2IwMTU1YjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wb3N0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjAxNTViMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiMDE1NWIwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9