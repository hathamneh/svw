webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/comments/commentsList.vue":
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



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "comments-list",
    components: {
        CommentItem: function CommentItem() {
            return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./resources/assets/js/components/comments/comment.vue"));
        },
        NewComment: function NewComment() {
            return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./resources/assets/js/components/comments/newComment.vue"));
        }
    },
    data: function data() {
        return {
            comments: this.commentsData || []
        };
    },

    props: {
        commentsData: Array,
        postId: Number
    },
    methods: {
        appendComment: function appendComment(val) {
            this.comments.push(val);
        },
        deleteComment: function deleteComment(id) {
            console.log(id);
            this.comments = this.comments.filter(function (n) {
                return n.id !== id;
            });
        },
        loadComments: function loadComments() {
            var _this = this;

            var url = '/api/post/' + this.postId + '/comment';
            axios.get(url).then(function (res) {
                console.log(res.data);
                _this.comments = res.data;
            });
        }
    },
    mounted: function mounted() {
        this.loadComments();
        __WEBPACK_IMPORTED_MODULE_0__event_bus__["a" /* EventBus */].$on('commentDeleted', this.deleteComment);
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-06a1d0e6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/comments/commentsList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "comments-wrapper" }, [
    _c(
      "div",
      { staticClass: "comments-group" },
      [
        _c(
          "transition-group",
          { attrs: { name: "fade" } },
          _vm._l(_vm.comments, function(comment, i) {
            return _c("comment-item", {
              key: comment.id,
              attrs: { "comment-data": comment }
            })
          })
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "comments-group-item new-comment-wrapper" },
          [
            _c("new-comment", {
              attrs: { "post-id": _vm.postId },
              on: { newCommentAdded: _vm.appendComment }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06a1d0e6", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/comments/commentsList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/comments/commentsList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-06a1d0e6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/comments/commentsList.vue")
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
Component.options.__file = "resources/assets/js/components/comments/commentsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06a1d0e6", Component.options)
  } else {
    hotAPI.reload("data-v-06a1d0e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzTGlzdC52dWU/OTY1NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudHNMaXN0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7O0FBRUE7VUFFQTs7O3VKQUVBOzs7MEpBRUE7O0FBSEE7MEJBSUE7OzJDQUdBO0FBRkE7QUFHQTs7O3NCQUVBO2dCQUVBO0FBSEE7O21EQUtBOytCQUNBO0FBQ0E7a0RBQ0E7d0JBQ0E7OERBQ0E7Z0NBQ0E7QUFDQTtBQUNBOztBQUNBOzttREFDQTtzQkFDQSx5QkFDQTtnQ0FDQTtxQ0FDQTtBQUNBO0FBRUE7QUFsQkE7Z0NBbUJBO2FBQ0E7Z0dBQ0E7QUFDQTtBQXJDQSxHOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0EsT0FBTyxnQ0FBZ0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTLGVBQWUsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseURBQXlEO0FBQ3BFO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0EsZ2RBQWdUO0FBQ2hUO0FBQ0EsK1NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1ncm91cFwiPlxuICAgICAgICAgICAgPHRyYW5zaXRpb24tZ3JvdXAgbmFtZT1cImZhZGVcIj5cbiAgICAgICAgICAgICAgICA8Y29tbWVudC1pdGVtIHYtZm9yPVwiKGNvbW1lbnQsIGkpIGluIGNvbW1lbnRzXCIgOmtleT1cImNvbW1lbnQuaWRcIiA6Y29tbWVudC1kYXRhPVwiY29tbWVudFwiPjwvY29tbWVudC1pdGVtPlxuICAgICAgICAgICAgPC90cmFuc2l0aW9uLWdyb3VwPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWdyb3VwLWl0ZW0gbmV3LWNvbW1lbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxuZXctY29tbWVudCA6cG9zdC1pZD1cInBvc3RJZFwiIEBuZXdDb21tZW50QWRkZWQ9XCJhcHBlbmRDb21tZW50XCI+PC9uZXctY29tbWVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtFdmVudEJ1c30gZnJvbSBcIi4uLy4uL2V2ZW50LWJ1c1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcImNvbW1lbnRzLWxpc3RcIixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgQ29tbWVudEl0ZW06ICgpID0+IGltcG9ydCgnLi9jb21tZW50JyksXG4gICAgICAgICAgICBOZXdDb21tZW50OiAoKSA9PiBpbXBvcnQoJy4vbmV3Q29tbWVudCcpXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbW1lbnRzRGF0YSB8fCBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY29tbWVudHNEYXRhOiBBcnJheSxcbiAgICAgICAgICAgIHBvc3RJZDogTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFwcGVuZENvbW1lbnQodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cy5wdXNoKHZhbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGVDb21tZW50KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50cyA9IHRoaXMuY29tbWVudHMuZmlsdGVyKG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5pZCAhPT0gaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRDb21tZW50cygpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gJy9hcGkvcG9zdC8nK3RoaXMucG9zdElkKycvY29tbWVudCdcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZENvbW1lbnRzKClcbiAgICAgICAgICAgIEV2ZW50QnVzLiRvbignY29tbWVudERlbGV0ZWQnLCB0aGlzLmRlbGV0ZUNvbW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudHNMaXN0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21tZW50cy13cmFwcGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudHMtZ3JvdXBcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInRyYW5zaXRpb24tZ3JvdXBcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvbW1lbnRzLCBmdW5jdGlvbihjb21tZW50LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJjb21tZW50LWl0ZW1cIiwge1xuICAgICAgICAgICAgICBrZXk6IGNvbW1lbnQuaWQsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiY29tbWVudC1kYXRhXCI6IGNvbW1lbnQgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudHMtZ3JvdXAtaXRlbSBuZXctY29tbWVudC13cmFwcGVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcIm5ldy1jb21tZW50XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJwb3N0LWlkXCI6IF92bS5wb3N0SWQgfSxcbiAgICAgICAgICAgICAgb246IHsgbmV3Q29tbWVudEFkZGVkOiBfdm0uYXBwZW5kQ29tbWVudCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDZhMWQwZTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTA2YTFkMGU2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDZhMWQwZTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbWVudHMvY29tbWVudHNMaXN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb21tZW50c0xpc3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNmExZDBlNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvbW1lbnRzTGlzdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzTGlzdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDZhMWQwZTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNmExZDBlNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1lbnRzL2NvbW1lbnRzTGlzdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==