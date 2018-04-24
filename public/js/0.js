webpackJsonp([0],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWU/YzBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOztBQUVBO1VBRUE7MEJBQ0E7O3VCQUVBOzsyQkFJQTtBQUhBO0FBRkE7QUFNQTs7OztrQkFJQTtBQUZBOztrQkFLQTtBQUZBOztrQkFJQTtxQkFFQTtBQUhBO2NBS0E7QUFaQTs7MkNBY0E7a0RBQ0E7c0JBQ0E7MkNBQ0E7c0JBQ0E7MEJBQ0E7bUJBQ0E7MEJBQ0E7QUFDQTtnQ0FFQTs7MkNBQ0E7dUNBQ0E7aUNBQ0EsNEJBQ0E7OENBQ0Esa0VBQ0E7QUFDQSxxQ0FDQTs2RUFDQTtBQUNBO0FBQ0E7QUFDQTt5REFDQTtvQkFDQTtxQkFDQTt5QkFDQTtBQUVBOztBQUNBOztBQUNBOzswRUFDQTs2Q0FDQTswREFDQTtvQ0FDQTs4QkFDQSxxQ0FDQTtBQUNBO29DQUNBO2dDQUNBO0FBQ0E7QUFFQTtBQTNDQTs7QUE0Q0E7O2lCQUNBLHNDQUNBLDRCQUNBOzhCQUNBO0FBQ0EsZ0JBQ0E7NkJBQ0E7QUFDQTtzQkFFQTs7NENBQ0E7NEJBQ0E7MENBQ0E7MENBQ0E7QUFDQSxlQUNBOzBDQUNBOzBDQUNBO0FBRUE7O29EQUNBO0FBQ0E7QUF6RkEsRzs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNFQUFzRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFtQjtBQUM3Qyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBaUQ7QUFDdEUsOEJBQThCLG1DQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLG1CQUFtQixvQkFBb0I7QUFDckU7QUFDQSw4Q0FBOEMsU0FBUyxvQkFBb0IsRUFBRTtBQUM3RSxpQ0FBaUMsNkJBQTZCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZiwwQkFBMEIsU0FBUyx5Q0FBeUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25ELHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQSx5QkFBeUIsU0FBUywwQkFBMEIsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYjtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0Esb2NBQWdUO0FBQ2hUO0FBQ0EsbVNBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiWydwb3N0cy1ncm91cC1pdGVtJywgd2l0aENvbW1lbnRzID8gJ3dpdGhDb21tZW50cycgOiAnJ11cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc3Qtd3JhcHBlciBQb3N0XCI+XG4gICAgICAgICAgICA8ZWwtZHJvcGRvd24gdi1pZj1cIm1vZGUgPT09ICdzZWxmJ1wiIHRyaWdnZXI9XCJjbGlja1wiIEBjb21tYW5kPVwiaGFuZGxlUG9zdE1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlBvc3RfbWVudS1pY29uIGVsLWRyb3Bkb3duLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGVsLWRyb3Bkb3duLW1lbnUgc2xvdD1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxlbC1kcm9wZG93bi1pdGVtIGNvbW1hbmQ9XCJkZWxldGVcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiB7eyB0cmFucyhcImNvbW1vbi5kZWxldGVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9lbC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvZWwtZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgIDwvZWwtZHJvcGRvd24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X3Byb2ZpbGUtcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicG9zdC51c2VyX3VybFwiIGNsYXNzPVwiYXZhdGFyLXRodW1iXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInBvc3QucHJvZmlsZV9waWN0dXJlXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfY29udGVudC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJwb3N0LnVzZXJfdXJsXCIgY2xhc3M9XCJQb3N0X3VzZXJuYW1lXCI+e3sgcG9zdC5uYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlBvc3RfZGF0ZVwiPiAtIDxhIDpocmVmPVwicG9zdC5wb3N0X3VybFwiPnt7IHBvc3QuY3JlYXRlZF9hdCB9fTwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfdGV4dFwiIHYtaHRtbD1cInBvc3QuY29udGVudFwiIDpzdHlsZT1cImNvbnRlbnRTdHlsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ1Bvc3RfYWN0aW9uJywgJ1Bvc3RfYWN0aW9uLWxpa2UnLCBwb3N0Lmxpa2VkID8gJ2xpa2VkJyA6ICcnXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1saW5rIGJ0blwiIEBjbGljaz1cImxpa2VQb3N0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbGlrZS5zdmdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlBvc3RfYWN0aW9uLW51bWJlclwiPnt7IHBvc3QubGlrZXMgfX08L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9hY3Rpb24gUG9zdF9hY3Rpb24tY29tbWVudFwiIHYtaWY9XCIhd2l0aENvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cInBvc3QucG9zdF91cmxcIiBjbGFzcz1cImJ0bi1saW5rIGJ0blwiPjxpIGNsYXNzPVwiZmFyIGZhLWNvbW1lbnQtYWx0XCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjb21tZW50cy1saXN0IHYtaWY9XCJ3aXRoQ29tbWVudHNcIiA6Y29tbWVudHMtZGF0YT1cInBvc3QuY29tbWVudHNcIiA6cG9zdC1pZD1cInBvc3QuaWRcIj48L2NvbW1lbnRzLWxpc3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBsaW5raWZ5SHRtbCBmcm9tICdsaW5raWZ5anMvaHRtbCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwicG9zdFwiLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwb3N0OiB0aGlzLnBvc3REYXRhLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdsdHInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3N0SWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aXRoQ29tbWVudHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxpa2VQb3N0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5Qb3N0X2FjdGlvbi1saWtlXCIpO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBcIi9hcGkvcG9zdC9saWtlL1wiXG4gICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoXCJsaWtlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBcIi9hcGkvcG9zdC91bmxpa2UvXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0Lmxpa2VzLS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0Lmxpa2VzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR0YXJnZXQudG9nZ2xlQ2xhc3MoXCJsaWtlZFwiKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc3QgJiYgdGhpcy5wb3N0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3N0SWQgPSB0aGlzLnBvc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwgKyBwb3N0SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmICFyZXMuZGF0YS5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5Qb3N0X2FjdGlvbi1saWtlXCIpLnRvZ2dsZUNsYXNzKFwibGlrZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcIi5Qb3N0X2FjdGlvbi1saWtlXCIpLnRvZ2dsZUNsYXNzKFwibGlrZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVQb3N0TWVudShjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUG9zdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVQb3N0KCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShcIi9hcGkvcG9zdC9cIiArIHRoaXMucG9zdC5pZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJwb3N0RGVsZXRlZFwiLCB0aGlzLnBvc3QuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53aXRoQ29tbWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc3RJZClcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3Bvc3QvXCIgKyB0aGlzLnBvc3RJZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHRoaXMucG9zdERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBydGxDaGFyID0gL1tcXHUwNTkwLVxcdTA4M0ZdfFtcXHUwOEEwLVxcdTA4RkZdfFtcXHVGQjFELVxcdUZERkZdfFtcXHVGRTcwLVxcdUZFRkZdL21nO1xuXG4gICAgICAgICAgICB2YXIgaXNSVEwgPSB0aGlzLnBvc3QuY29udGVudC5tYXRjaChydGxDaGFyKTtcbiAgICAgICAgICAgIGlmIChpc1JUTCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFN0eWxlLmRpcmVjdGlvbiA9ICdydGwnXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50U3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50U3R5bGUuZGlyZWN0aW9uID0gJ2x0cidcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wb3N0LmNvbnRlbnQgPSB0aGlzLiRsaW5raWZ5KHRoaXMucG9zdC5jb250ZW50KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogW1wicG9zdHMtZ3JvdXAtaXRlbVwiLCBfdm0ud2l0aENvbW1lbnRzID8gXCJ3aXRoQ29tbWVudHNcIiA6IFwiXCJdIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zdC13cmFwcGVyIFBvc3RcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLm1vZGUgPT09IFwic2VsZlwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0cmlnZ2VyOiBcImNsaWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbW1hbmQ6IF92bS5oYW5kbGVQb3N0TWVudSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9tZW51LWljb24gZWwtZHJvcGRvd24tbGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtYW5nbGUtZG93blwiIH0pXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlbC1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJkcm9wZG93blwiIH0sIHNsb3Q6IFwiZHJvcGRvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbC1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgY29tbWFuZDogXCJkZWxldGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRyYW5zKFwiY29tbW9uLmRlbGV0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X3Byb2ZpbGUtcGljdHVyZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucG9zdC5wcm9maWxlX3BpY3R1cmUsIGFsdDogXCJcIiB9IH0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfY29udGVudC10b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIlBvc3RfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wb3N0Lm5hbWUpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiAtIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucG9zdC5wb3N0X3VybCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBvc3QuY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiUG9zdF90ZXh0XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uY29udGVudFN0eWxlLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucG9zdC5jb250ZW50KSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcIlBvc3RfYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUG9zdF9hY3Rpb24tbGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdC5saWtlZCA/IFwibGlrZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWxpbmsgYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpa2VQb3N0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9saWtlLnN2Z1wiLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9hY3Rpb24tbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucG9zdC5saWtlcykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS53aXRoQ29tbWVudHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfYWN0aW9uIFBvc3RfYWN0aW9uLWNvbW1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWxpbmsgYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnBvc3RfdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNvbW1lbnQtYWx0XCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS53aXRoQ29tbWVudHNcbiAgICAgICAgPyBfYyhcImNvbW1lbnRzLWxpc3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJjb21tZW50cy1kYXRhXCI6IF92bS5wb3N0LmNvbW1lbnRzLFxuICAgICAgICAgICAgICBcInBvc3QtaWRcIjogX3ZtLnBvc3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2IwMTU1YjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiMDE1NWIwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtN2IwMTU1YjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wb3N0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2IwMTU1YjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wb3N0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjAxNTViMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiMDE1NWIwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9