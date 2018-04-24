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
            post: this.postData
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
        console.log(this.post.content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWU/YzBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOztBQUVBO1VBRUE7MEJBQ0E7O3VCQUdBO0FBRkE7QUFHQTs7OztrQkFJQTtBQUZBOztrQkFLQTtBQUZBOztrQkFJQTtxQkFFQTtBQUhBO2NBS0E7QUFaQTs7MkNBY0E7a0RBQ0E7c0JBQ0E7MkNBQ0E7c0JBQ0E7MEJBQ0E7bUJBQ0E7MEJBQ0E7QUFDQTtnQ0FFQTs7MkNBQ0E7dUNBQ0E7aUNBQ0EsNEJBQ0E7OENBQ0Esa0VBQ0E7QUFDQSxxQ0FDQTs2RUFDQTtBQUNBO0FBQ0E7QUFDQTt5REFDQTtvQkFDQTtxQkFDQTt5QkFDQTtBQUVBOztBQUNBOztBQUNBOzswRUFDQTs2Q0FDQTswREFDQTtvQ0FDQTs4QkFDQSxxQ0FDQTtBQUNBO29DQUNBO2dDQUNBO0FBQ0E7QUFFQTtBQTNDQTs7QUE0Q0E7O2lCQUNBLHNDQUNBLDRCQUNBOzhCQUNBO0FBQ0EsZ0JBQ0E7NkJBQ0E7QUFDQTs4QkFDQTtvREFDQTtBQUNBO0FBM0VBLEc7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzRUFBc0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0MsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxtQkFBbUIsb0JBQW9CO0FBQ3JFO0FBQ0EsOENBQThDLFNBQVMsb0JBQW9CLEVBQUU7QUFDN0UsaUNBQWlDLDZCQUE2QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2YsMEJBQTBCLFNBQVMseUNBQXlDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRCx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0EseUJBQXlCLFNBQVMsMEJBQTBCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBaUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5QkFBeUI7QUFDekIsa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQSxvY0FBZ1Q7QUFDaFQ7QUFDQSxtU0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzAuZjRoMmViMzJoZWJqMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cIlsncG9zdHMtZ3JvdXAtaXRlbScsIHdpdGhDb21tZW50cyA/ICd3aXRoQ29tbWVudHMnIDogJyddXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LXdyYXBwZXIgUG9zdFwiPlxuICAgICAgICAgICAgPGVsLWRyb3Bkb3duIHYtaWY9XCJtb2RlID09PSAnc2VsZidcIiB0cmlnZ2VyPVwiY2xpY2tcIiBAY29tbWFuZD1cImhhbmRsZVBvc3RNZW51XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJQb3N0X21lbnUtaWNvbiBlbC1kcm9wZG93bi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxlbC1kcm9wZG93bi1tZW51IHNsb3Q9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8ZWwtZHJvcGRvd24taXRlbSBjb21tYW5kPVwiZGVsZXRlXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4ge3sgdHJhbnMoXCJjb21tb24uZGVsZXRlXCIpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZWwtZHJvcGRvd24taXRlbT5cbiAgICAgICAgICAgICAgICA8L2VsLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICA8L2VsLWRyb3Bkb3duPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9wcm9maWxlLXBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInBvc3QudXNlcl91cmxcIiBjbGFzcz1cImF2YXRhci10aHVtYlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJwb3N0LnByb2ZpbGVfcGljdHVyZVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X2NvbnRlbnQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicG9zdC51c2VyX3VybFwiIGNsYXNzPVwiUG9zdF91c2VybmFtZVwiPnt7IHBvc3QubmFtZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJQb3N0X2RhdGVcIj4gLSA8YSA6aHJlZj1cInBvc3QucG9zdF91cmxcIj57eyBwb3N0LmNyZWF0ZWRfYXQgfX08L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X3RleHRcIiB2LWh0bWw9XCJwb3N0LmNvbnRlbnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydQb3N0X2FjdGlvbicsICdQb3N0X2FjdGlvbi1saWtlJywgcG9zdC5saWtlZCA/ICdsaWtlZCcgOiAnJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tbGluayBidG5cIiBAY2xpY2s9XCJsaWtlUG9zdCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJQb3N0X2FjdGlvbi1udW1iZXJcIj57eyBwb3N0Lmxpa2VzIH19PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfYWN0aW9uIFBvc3RfYWN0aW9uLWNvbW1lbnRcIiB2LWlmPVwiIXdpdGhDb21tZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJwb3N0LnBvc3RfdXJsXCIgY2xhc3M9XCJidG4tbGluayBidG5cIj48aSBjbGFzcz1cImZhciBmYS1jb21tZW50LWFsdFwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y29tbWVudHMtbGlzdCB2LWlmPVwid2l0aENvbW1lbnRzXCIgOmNvbW1lbnRzLWRhdGE9XCJwb3N0LmNvbW1lbnRzXCIgOnBvc3QtaWQ9XCJwb3N0LmlkXCI+PC9jb21tZW50cy1saXN0PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgbGlua2lmeUh0bWwgZnJvbSAnbGlua2lmeWpzL2h0bWwnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcInBvc3RcIixcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcG9zdDogdGhpcy5wb3N0RGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3N0SWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aXRoQ29tbWVudHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxpa2VQb3N0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5Qb3N0X2FjdGlvbi1saWtlXCIpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBcIi9hcGkvcG9zdC9saWtlL1wiXG4gICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoXCJsaWtlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9hcGkvcG9zdC91bmxpa2UvXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0Lmxpa2VzLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0Lmxpa2VzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR0YXJnZXQudG9nZ2xlQ2xhc3MoXCJsaWtlZFwiKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc3QgJiYgdGhpcy5wb3N0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3N0SWQgPSB0aGlzLnBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwgKyBwb3N0SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmICFyZXMuZGF0YS5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5Qb3N0X2FjdGlvbi1saWtlXCIpLnRvZ2dsZUNsYXNzKFwibGlrZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5Qb3N0X2FjdGlvbi1saWtlXCIpLnRvZ2dsZUNsYXNzKFwibGlrZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVQb3N0TWVudShjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUG9zdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQb3N0KCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShcIi9hcGkvcG9zdC9cIiArIHRoaXMucG9zdC5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJwb3N0RGVsZXRlZFwiLCB0aGlzLnBvc3QuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53aXRoQ29tbWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc3RJZClcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3Bvc3QvXCIgKyB0aGlzLnBvc3RJZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHRoaXMucG9zdERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zdC5jb250ZW50KVxuICAgICAgICAgICAgdGhpcy5wb3N0LmNvbnRlbnQgPSB0aGlzLiRsaW5raWZ5KHRoaXMucG9zdC5jb250ZW50KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogW1wicG9zdHMtZ3JvdXAtaXRlbVwiLCBfdm0ud2l0aENvbW1lbnRzID8gXCJ3aXRoQ29tbWVudHNcIiA6IFwiXCJdIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zdC13cmFwcGVyIFBvc3RcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLm1vZGUgPT09IFwic2VsZlwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0cmlnZ2VyOiBcImNsaWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbW1hbmQ6IF92bS5oYW5kbGVQb3N0TWVudSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9tZW51LWljb24gZWwtZHJvcGRvd24tbGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtYW5nbGUtZG93blwiIH0pXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlbC1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJkcm9wZG93blwiIH0sIHNsb3Q6IFwiZHJvcGRvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbC1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgY29tbWFuZDogXCJkZWxldGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRyYW5zKFwiY29tbW9uLmRlbGV0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X3Byb2ZpbGUtcGljdHVyZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucG9zdC5wcm9maWxlX3BpY3R1cmUsIGFsdDogXCJcIiB9IH0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfY29udGVudC10b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIlBvc3RfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wb3N0Lm5hbWUpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiAtIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucG9zdC5wb3N0X3VybCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBvc3QuY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiUG9zdF90ZXh0XCIsXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wb3N0LmNvbnRlbnQpIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9hY3Rpb25zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUG9zdF9hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJQb3N0X2FjdGlvbi1saWtlXCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5wb3N0Lmxpa2VkID8gXCJsaWtlZFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tbGluayBidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGlrZVBvc3QoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2VzL2xpa2Uuc3ZnXCIsIGFsdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X2FjdGlvbi1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wb3N0Lmxpa2VzKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLndpdGhDb21tZW50c1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9hY3Rpb24gUG9zdF9hY3Rpb24tY29tbWVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tbGluayBidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnBvc3QucG9zdF91cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY29tbWVudC1hbHRcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLndpdGhDb21tZW50c1xuICAgICAgICA/IF9jKFwiY29tbWVudHMtbGlzdFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImNvbW1lbnRzLWRhdGFcIjogX3ZtLnBvc3QuY29tbWVudHMsXG4gICAgICAgICAgICAgIFwicG9zdC1pZFwiOiBfdm0ucG9zdC5pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03YjAxNTViMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2IwMTU1YjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03YjAxNTViMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wb3N0L3Bvc3QudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bvc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YjAxNTViMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Bvc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wb3N0L3Bvc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdiMDE1NWIwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2IwMTU1YjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wb3N0L3Bvc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wb3N0L3Bvc3QudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=