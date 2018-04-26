webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/comments/comment.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_bus__ = __webpack_require__("./resources/assets/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "comment-item",
    data: function data() {
        return {
            comment: this.commentData,
            editable: false
        };
    },

    props: {
        commentData: Object,
        commentId: Number
    },
    methods: {
        handleCommentMenu: function handleCommentMenu(command) {
            switch (command) {
                case "delete":
                    this.deleteComment();
                    break;
            }
        },
        deleteComment: function deleteComment() {
            var _this = this;

            var postId = this.comment.post_id;
            var url = "/api/post/" + postId + "/comment/" + this.comment.id;
            axios.delete(url).then(function (res) {
                if (res.data && res.data.deleted) {
                    __WEBPACK_IMPORTED_MODULE_0__event_bus__["a" /* EventBus */].$emit("commentDeleted", _this.comment.id);
                    console.log(res.data);
                }
            }).catch(function (res) {
                console.log(res.data);
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.comment.content = this.$linkify(this.comment.content);
        this.$editable(this.comment.user_id, function (result) {
            return _this2.editable = result;
        });
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-472fc95b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/comments/comment.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "comments-group-item Comment" },
    [
      _vm.editable
        ? _c(
            "el-dropdown",
            {
              attrs: { trigger: "click" },
              on: { command: _vm.handleCommentMenu }
            },
            [
              _c(
                "span",
                { staticClass: "Comment_menu-icon el-dropdown-link" },
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
                        "\n            "
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
      _c("div", { staticClass: "Comment_profile-picture" }, [
        _c(
          "a",
          {
            staticClass: "avatar-thumb",
            attrs: { href: _vm.comment.user_url }
          },
          [_c("img", { attrs: { src: _vm.comment.profile_picture, alt: "" } })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "Comment_content" }, [
        _c("div", { staticClass: "Comment_content-top" }, [
          _c(
            "a",
            {
              staticClass: "Comment_username",
              attrs: { href: _vm.comment.user_url }
            },
            [_vm._v(_vm._s(_vm.comment.name))]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "Comment_date" }, [
            _vm._v(" - "),
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.comment.created_at))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "Comment_text",
          domProps: { innerHTML: _vm._s(_vm.comment.content) }
        })
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-472fc95b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/comments/comment.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/comments/comment.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-472fc95b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/comments/comment.vue")
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
Component.options.__file = "resources/assets/js/components/comments/comment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-472fc95b", Component.options)
  } else {
    hotAPI.reload("data-v-472fc95b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZT9iODA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBOztBQUVBO1VBRUE7MEJBQ0E7OzBCQUVBO3NCQUVBO0FBSEE7QUFJQTs7O3FCQUVBO21CQUVBO0FBSEE7OytEQUtBO29CQUNBO3FCQUNBO3lCQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7O3NDQUNBO3lFQUNBO2tEQUNBO2tEQUNBO3VIQUNBO29DQUNBO0FBQ0E7b0NBQ0E7Z0NBQ0E7QUFDQTtBQUVBO0FBcEJBOztBQXFCQTs7MERBQ0E7O3FDQUNBOztBQUNBO0FBcENBLEc7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekMsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQW9EO0FBQ3JFLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxtQkFBbUIsb0JBQW9CO0FBQ2pFO0FBQ0EsMENBQTBDLFNBQVMsb0JBQW9CLEVBQUU7QUFDekUsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlDQUF5QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1gsc0JBQXNCLFNBQVMsNENBQTRDLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxtQkFBbUIscUNBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0EscUJBQXFCLFNBQVMsWUFBWSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQSwyY0FBZ1Q7QUFDaFQ7QUFDQSwwU0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWdyb3VwLWl0ZW0gQ29tbWVudFwiPlxuICAgICAgICA8ZWwtZHJvcGRvd24gdi1pZj1cImVkaXRhYmxlXCIgdHJpZ2dlcj1cImNsaWNrXCIgQGNvbW1hbmQ9XCJoYW5kbGVDb21tZW50TWVudVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJDb21tZW50X21lbnUtaWNvbiBlbC1kcm9wZG93bi1saW5rXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICA8ZWwtZHJvcGRvd24tbWVudSBzbG90PVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8ZWwtZHJvcGRvd24taXRlbSBjb21tYW5kPVwiZGVsZXRlXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4ge3sgdHJhbnMoXCJjb21tb24uZGVsZXRlXCIpIH19XG4gICAgICAgICAgICAgICAgPC9lbC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgPC9lbC1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2VsLWRyb3Bkb3duPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiQ29tbWVudF9wcm9maWxlLXBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxhIDpocmVmPVwiY29tbWVudC51c2VyX3VybFwiIGNsYXNzPVwiYXZhdGFyLXRodW1iXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiY29tbWVudC5wcm9maWxlX3BpY3R1cmVcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJDb21tZW50X2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJDb21tZW50X2NvbnRlbnQtdG9wXCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJjb21tZW50LnVzZXJfdXJsXCIgY2xhc3M9XCJDb21tZW50X3VzZXJuYW1lXCI+e3sgY29tbWVudC5uYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiQ29tbWVudF9kYXRlXCI+IC0gPGEgaHJlZj1cIiNcIj57eyBjb21tZW50LmNyZWF0ZWRfYXQgfX08L2E+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ29tbWVudF90ZXh0XCIgdi1odG1sPVwiY29tbWVudC5jb250ZW50XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQge0V2ZW50QnVzfSBmcm9tIFwiLi4vLi4vZXZlbnQtYnVzXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiY29tbWVudC1pdGVtXCIsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRoaXMuY29tbWVudERhdGEsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb21tZW50RGF0YTogT2JqZWN0LFxuICAgICAgICAgICAgY29tbWVudElkOiBOdW1iZXJcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlQ29tbWVudE1lbnUoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNvbW1lbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlQ29tbWVudCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zdElkID0gdGhpcy5jb21tZW50LnBvc3RfaWRcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gXCIvYXBpL3Bvc3QvXCIrcG9zdElkK1wiL2NvbW1lbnQvXCIgKyB0aGlzLmNvbW1lbnQuaWRcbiAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUodXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5kZWxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudEJ1cy4kZW1pdChcImNvbW1lbnREZWxldGVkXCIsIHRoaXMuY29tbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5jb21tZW50LmNvbnRlbnQgPSB0aGlzLiRsaW5raWZ5KHRoaXMuY29tbWVudC5jb250ZW50KVxuICAgICAgICAgICAgdGhpcy4kZWRpdGFibGUodGhpcy5jb21tZW50LnVzZXJfaWQsIHJlc3VsdCA9PiB0aGlzLmVkaXRhYmxlID0gcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudHMtZ3JvdXAtaXRlbSBDb21tZW50XCIgfSxcbiAgICBbXG4gICAgICBfdm0uZWRpdGFibGVcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZWwtZHJvcGRvd25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHJpZ2dlcjogXCJjbGlja1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNvbW1hbmQ6IF92bS5oYW5kbGVDb21tZW50TWVudSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIkNvbW1lbnRfbWVudS1pY29uIGVsLWRyb3Bkb3duLWxpbmtcIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtYW5nbGUtZG93blwiIH0pXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLWRyb3Bkb3duLW1lbnVcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwiZHJvcGRvd25cIiB9LCBzbG90OiBcImRyb3Bkb3duXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVsLWRyb3Bkb3duLWl0ZW1cIiwgeyBhdHRyczogeyBjb21tYW5kOiBcImRlbGV0ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50cmFucyhcImNvbW1vbi5kZWxldGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJDb21tZW50X3Byb2ZpbGUtcGljdHVyZVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyLXRodW1iXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uY29tbWVudC51c2VyX3VybCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5jb21tZW50LnByb2ZpbGVfcGljdHVyZSwgYWx0OiBcIlwiIH0gfSldXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiQ29tbWVudF9jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIkNvbW1lbnRfY29udGVudC10b3BcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiQ29tbWVudF91c2VybmFtZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0uY29tbWVudC51c2VyX3VybCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnQubmFtZSkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJDb21tZW50X2RhdGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIgLSBcIiksXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudC5jcmVhdGVkX2F0KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJDb21tZW50X3RleHRcIixcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uY29tbWVudC5jb250ZW50KSB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ3MmZjOTViXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NzJmYzk1YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NzJmYzk1YlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb21tZW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDcyZmM5NWJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jb21tZW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDcyZmM5NWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NzJmYzk1YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9