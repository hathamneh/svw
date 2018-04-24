webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/comments/comment.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "comment-item",
    data: function data() {
        return {
            comment: this.commentData
        };
    },

    props: {
        commentData: Object,
        commentId: Number
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-472fc95b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/comments/comment.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "comments-group-item Comment" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "Comment_profile-picture" }, [
      _c(
        "a",
        { staticClass: "avatar-thumb", attrs: { href: _vm.comment.user_url } },
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
      _c(
        "div",
        { staticClass: "Comment_text" },
        [_c("nl2br", { attrs: { tag: "p", text: _vm.comment.content } })],
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
    return _c("a", { staticClass: "Comment_menu-icon", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-angle-down" })
    ])
  }
]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZT9iODA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtVQUVBOzBCQUNBOzswQkFHQTtBQUZBO0FBR0E7OztxQkFFQTttQkFFQTtBQUhBO0FBUEEsRzs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBNkM7QUFDakU7QUFDQTtBQUNBLGVBQWUseUNBQXlDO0FBQ3hEO0FBQ0E7QUFDQSxTQUFTLHNDQUFzQyw2QkFBNkIsRUFBRTtBQUM5RSxvQkFBb0IsU0FBUyw0Q0FBNEMsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlDQUFpQztBQUNoRCxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0EsbUJBQW1CLFNBQVMsWUFBWSxFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw4QkFBOEI7QUFDdkMsc0JBQXNCLFNBQVMsc0NBQXNDLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQTJDLFlBQVksRUFBRTtBQUM3RSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQSwyY0FBZ1Q7QUFDaFQ7QUFDQSwwU0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWdyb3VwLWl0ZW0gQ29tbWVudFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiQ29tbWVudF9tZW51LWljb25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiQ29tbWVudF9wcm9maWxlLXBpY3R1cmVcIj5cbiAgICAgICAgICAgIDxhIDpocmVmPVwiY29tbWVudC51c2VyX3VybFwiIGNsYXNzPVwiYXZhdGFyLXRodW1iXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiY29tbWVudC5wcm9maWxlX3BpY3R1cmVcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJDb21tZW50X2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJDb21tZW50X2NvbnRlbnQtdG9wXCI+XG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJjb21tZW50LnVzZXJfdXJsXCIgY2xhc3M9XCJDb21tZW50X3VzZXJuYW1lXCI+e3sgY29tbWVudC5uYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiQ29tbWVudF9kYXRlXCI+IC0gPGEgaHJlZj1cIiNcIj57eyBjb21tZW50LmNyZWF0ZWRfYXQgfX08L2E+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQ29tbWVudF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgPG5sMmJyIHRhZz1cInBcIiA6dGV4dD1cImNvbW1lbnQuY29udGVudFwiPjwvbmwyYnI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJjb21tZW50LWl0ZW1cIixcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29tbWVudDogdGhpcy5jb21tZW50RGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29tbWVudERhdGE6IE9iamVjdCxcbiAgICAgICAgICAgIGNvbW1lbnRJZDogTnVtYmVyXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudHMtZ3JvdXAtaXRlbSBDb21tZW50XCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiQ29tbWVudF9wcm9maWxlLXBpY3R1cmVcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXZhdGFyLXRodW1iXCIsIGF0dHJzOiB7IGhyZWY6IF92bS5jb21tZW50LnVzZXJfdXJsIH0gfSxcbiAgICAgICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uY29tbWVudC5wcm9maWxlX3BpY3R1cmUsIGFsdDogXCJcIiB9IH0pXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJDb21tZW50X2NvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIkNvbW1lbnRfY29udGVudC10b3BcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIkNvbW1lbnRfdXNlcm5hbWVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5jb21tZW50LnVzZXJfdXJsIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jb21tZW50Lm5hbWUpKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiQ29tbWVudF9kYXRlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIiAtIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbW1lbnQuY3JlYXRlZF9hdCkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIkNvbW1lbnRfdGV4dFwiIH0sXG4gICAgICAgIFtfYyhcIm5sMmJyXCIsIHsgYXR0cnM6IHsgdGFnOiBcInBcIiwgdGV4dDogX3ZtLmNvbW1lbnQuY29udGVudCB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJDb21tZW50X21lbnUtaWNvblwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1hbmdsZS1kb3duXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NzJmYzk1YlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDcyZmM5NWJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDcyZmM5NWJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY29tbWVudC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ3MmZjOTViXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY29tbWVudC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3MmZjOTViXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDcyZmM5NWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tZW50cy9jb21tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==