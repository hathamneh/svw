webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/post/post.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            _c(
              "div",
              { staticClass: "Post_text" },
              [_c("nl2br", { attrs: { tag: "p", text: _vm.post.content } })],
              1
            ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWU/YzBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO1VBRUE7MEJBQ0E7O3VCQUdBO0FBRkE7QUFHQTs7OztrQkFJQTtBQUZBOztrQkFLQTtBQUZBOztrQkFJQTtxQkFFQTtBQUhBO2NBS0E7QUFaQTs7MkNBY0E7a0RBQ0E7c0JBQ0E7MkNBQ0E7c0JBQ0E7MEJBQ0E7bUJBQ0E7MEJBQ0E7QUFDQTtnQ0FFQTs7MkNBQ0E7dUNBQ0E7aUNBQ0EsNEJBQ0E7OENBQ0Esa0VBQ0E7QUFDQSxxQ0FDQTs2RUFDQTtBQUNBO0FBQ0E7QUFDQTt5REFDQTtvQkFDQTtxQkFDQTt5QkFDQTtBQUVBOztBQUNBOztBQUNBOzswRUFDQTs2Q0FDQTswREFDQTtvQ0FDQTs4QkFDQSxxQ0FDQTtBQUNBO29DQUNBO2dDQUNBO0FBQ0E7QUFFQTtBQTNDQTs7QUE0Q0E7O2lCQUNBLHNDQUNBLDRCQUNBOzhCQUNBO0FBQ0EsZ0JBQ0E7NkJBQ0E7QUFDQTtBQUNBO0FBekVBLEc7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzRUFBc0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0MsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFLDhCQUE4QixtQ0FBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUyxtQkFBbUIsb0JBQW9CO0FBQ3JFO0FBQ0EsOENBQThDLFNBQVMsb0JBQW9CLEVBQUU7QUFDN0UsaUNBQWlDLDZCQUE2QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2YsMEJBQTBCLFNBQVMseUNBQXlDLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRCx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0EseUJBQXlCLFNBQVMsMEJBQTBCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQyw0QkFBNEIsU0FBUyxtQ0FBbUMsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQSxrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QixrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBLG9jQUFnVDtBQUNoVDtBQUNBLG1TQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMC5mNGgyZWIzMmhlYmozLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiWydwb3N0cy1ncm91cC1pdGVtJywgd2l0aENvbW1lbnRzID8gJ3dpdGhDb21tZW50cycgOiAnJ11cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc3Qtd3JhcHBlciBQb3N0XCI+XG4gICAgICAgICAgICA8ZWwtZHJvcGRvd24gdi1pZj1cIm1vZGUgPT09ICdzZWxmJ1wiIHRyaWdnZXI9XCJjbGlja1wiIEBjb21tYW5kPVwiaGFuZGxlUG9zdE1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlBvc3RfbWVudS1pY29uIGVsLWRyb3Bkb3duLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGVsLWRyb3Bkb3duLW1lbnUgc2xvdD1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIDxlbC1kcm9wZG93bi1pdGVtIGNvbW1hbmQ9XCJkZWxldGVcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPiB7eyB0cmFucyhcImNvbW1vbi5kZWxldGVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9lbC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgIDwvZWwtZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgIDwvZWwtZHJvcGRvd24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJQb3N0X3Byb2ZpbGUtcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicG9zdC51c2VyX3VybFwiIGNsYXNzPVwiYXZhdGFyLXRodW1iXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInBvc3QucHJvZmlsZV9waWN0dXJlXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfY29udGVudC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJwb3N0LnVzZXJfdXJsXCIgY2xhc3M9XCJQb3N0X3VzZXJuYW1lXCI+e3sgcG9zdC5uYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlBvc3RfZGF0ZVwiPiAtIDxhIDpocmVmPVwicG9zdC5wb3N0X3VybFwiPnt7IHBvc3QuY3JlYXRlZF9hdCB9fTwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmwyYnIgdGFnPVwicFwiIDp0ZXh0PVwicG9zdC5jb250ZW50XCI+PC9ubDJicj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUG9zdF9hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydQb3N0X2FjdGlvbicsICdQb3N0X2FjdGlvbi1saWtlJywgcG9zdC5saWtlZCA/ICdsaWtlZCcgOiAnJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tbGluayBidG5cIiBAY2xpY2s9XCJsaWtlUG9zdCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xpa2Uuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJQb3N0X2FjdGlvbi1udW1iZXJcIj57eyBwb3N0Lmxpa2VzIH19PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlBvc3RfYWN0aW9uIFBvc3RfYWN0aW9uLWNvbW1lbnRcIiB2LWlmPVwiIXdpdGhDb21tZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJwb3N0LnBvc3RfdXJsXCIgY2xhc3M9XCJidG4tbGluayBidG5cIj48aSBjbGFzcz1cImZhciBmYS1jb21tZW50LWFsdFwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y29tbWVudHMtbGlzdCB2LWlmPVwid2l0aENvbW1lbnRzXCIgOmNvbW1lbnRzLWRhdGE9XCJwb3N0LmNvbW1lbnRzXCIgOnBvc3QtaWQ9XCJwb3N0LmlkXCI+PC9jb21tZW50cy1saXN0PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwicG9zdFwiLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwb3N0OiB0aGlzLnBvc3REYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0RGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RJZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpdGhDb21tZW50czoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGlrZVBvc3QoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLlBvc3RfYWN0aW9uLWxpa2VcIik7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IFwiL2FwaS9wb3N0L2xpa2UvXCJcbiAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcyhcImxpa2VkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IFwiL2FwaS9wb3N0L3VubGlrZS9cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QubGlrZXMtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QubGlrZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHRhcmdldC50b2dnbGVDbGFzcyhcImxpa2VkXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zdCAmJiB0aGlzLnBvc3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc3RJZCA9IHRoaXMucG9zdC5pZFxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KHVybCArIHBvc3RJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgIXJlcy5kYXRhLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLlBvc3RfYWN0aW9uLWxpa2VcIikudG9nZ2xlQ2xhc3MoXCJsaWtlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwiLlBvc3RfYWN0aW9uLWxpa2VcIikudG9nZ2xlQ2xhc3MoXCJsaWtlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZVBvc3RNZW51KGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQb3N0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZVBvc3QoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKFwiL2FwaS9wb3N0L1wiICsgdGhpcy5wb3N0LmlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGVsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInBvc3REZWxldGVkXCIsIHRoaXMucG9zdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLndpdGhDb21tZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zdElkKVxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcIi9hcGkvcG9zdC9cIiArIHRoaXMucG9zdElkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5wb3N0RGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogW1wicG9zdHMtZ3JvdXAtaXRlbVwiLCBfdm0ud2l0aENvbW1lbnRzID8gXCJ3aXRoQ29tbWVudHNcIiA6IFwiXCJdIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9zdC13cmFwcGVyIFBvc3RcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLm1vZGUgPT09IFwic2VsZlwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZWwtZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0cmlnZ2VyOiBcImNsaWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbW1hbmQ6IF92bS5oYW5kbGVQb3N0TWVudSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9tZW51LWljb24gZWwtZHJvcGRvd24tbGlua1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtYW5nbGUtZG93blwiIH0pXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJlbC1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJkcm9wZG93blwiIH0sIHNsb3Q6IFwiZHJvcGRvd25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbC1kcm9wZG93bi1pdGVtXCIsIHsgYXR0cnM6IHsgY29tbWFuZDogXCJkZWxldGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRyYW5zKFwiY29tbW9uLmRlbGV0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X3Byb2ZpbGUtcGljdHVyZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImF2YXRhci10aHVtYlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucG9zdC5wcm9maWxlX3BpY3R1cmUsIGFsdDogXCJcIiB9IH0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJQb3N0X2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfY29udGVudC10b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIlBvc3RfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnVzZXJfdXJsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wb3N0Lm5hbWUpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9kYXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIiAtIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucG9zdC5wb3N0X3VybCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBvc3QuY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfdGV4dFwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcIm5sMmJyXCIsIHsgYXR0cnM6IHsgdGFnOiBcInBcIiwgdGV4dDogX3ZtLnBvc3QuY29udGVudCB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcIlBvc3RfYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUG9zdF9hY3Rpb24tbGlrZVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucG9zdC5saWtlZCA/IFwibGlrZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWxpbmsgYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpa2VQb3N0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltYWdlcy9saWtlLnN2Z1wiLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiUG9zdF9hY3Rpb24tbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucG9zdC5saWtlcykpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS53aXRoQ29tbWVudHNcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIlBvc3RfYWN0aW9uIFBvc3RfYWN0aW9uLWNvbW1lbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWxpbmsgYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5wb3N0LnBvc3RfdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNvbW1lbnQtYWx0XCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS53aXRoQ29tbWVudHNcbiAgICAgICAgPyBfYyhcImNvbW1lbnRzLWxpc3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJjb21tZW50cy1kYXRhXCI6IF92bS5wb3N0LmNvbW1lbnRzLFxuICAgICAgICAgICAgICBcInBvc3QtaWRcIjogX3ZtLnBvc3QuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2IwMTU1YjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdiMDE1NWIwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Bvc3QvcG9zdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtN2IwMTU1YjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wb3N0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2IwMTU1YjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wb3N0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YjAxNTViMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdiMDE1NWIwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcG9zdC9wb3N0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9