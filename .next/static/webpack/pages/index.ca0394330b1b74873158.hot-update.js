webpackHotUpdate_N_E("pages/index",{

/***/ "./src/containers/SearchRepoContainer.js":
/*!***********************************************!*\
  !*** ./src/containers/SearchRepoContainer.js ***!
  \***********************************************/
/*! exports provided: SearchRepoContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchRepoContainer\", function() { return SearchRepoContainer; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_repos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/repos */ \"./src/actions/repos.js\");\n/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SearchResults */ \"./src/components/SearchResults.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/ilyakaminsky/Downloads/frontend_test_ikaminskii-master/src/containers/SearchRepoContainer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar SearchRepoContainer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SearchRepoContainer, _Component);\n\n  var _super = _createSuper(SearchRepoContainer);\n\n  function SearchRepoContainer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, SearchRepoContainer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"_goToAbout\", function () {\n      _this.props.router.push('/about');\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SearchRepoContainer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var getTopRepos = this.props.getTopRepos;\n      getTopRepos({\n        lang: 'ruby'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var repos = this.props.repos;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(\"div\", {\n        onClick: this._goToAbout,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 9\n        }\n      }, \"GO TO ABOUT (with \", __jsx(\"code\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 29\n        }\n      }, \"router\"), \")\"), __jsx(_components_SearchResults__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        repos: repos,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var store, query, lang;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                store = _ref.store, query = _ref.query;\n                lang = query.lang || '';\n                _context.next = 4;\n                return store.dispatch(Object(_actions_repos__WEBPACK_IMPORTED_MODULE_13__[\"getTopRepos\"])({\n                  lang: lang\n                }));\n\n              case 4:\n                return _context.abrupt(\"return\", {\n                  lang: lang\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return SearchRepoContainer;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\nfunction mapStateToProps(state) {\n  return {\n    repos: state.repos\n  };\n}\n\nSearchRepoContainer.propTypes = {\n  repos: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_11__[\"Map\"]).isRequired,\n  getTopRepos: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[\"connect\"])(mapStateToProps, {\n  getTopRepos: _actions_repos__WEBPACK_IMPORTED_MODULE_13__[\"getTopRepos\"]\n})(SearchRepoContainer));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvU2VhcmNoUmVwb0NvbnRhaW5lci5qcz9kMjhjIl0sIm5hbWVzIjpbIlNlYXJjaFJlcG9Db250YWluZXIiLCJwcm9wcyIsInJvdXRlciIsInB1c2giLCJnZXRUb3BSZXBvcyIsImxhbmciLCJyZXBvcyIsIl9nb1RvQWJvdXQiLCJzdG9yZSIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJNYXAiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0lBRU1BLG1COzs7Ozs7Ozs7Ozs7Ozs7O3FOQXdCUyxZQUFNO0FBQ2pCLFlBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsUUFBdkI7QUFDRCxLOzs7Ozs7O3dDQW5Cb0I7QUFBQSxVQUNYQyxXQURXLEdBQ0ssS0FBS0gsS0FEVixDQUNYRyxXQURXO0FBRW5CQSxpQkFBVyxDQUFDO0FBQUVDLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBWDtBQUNEOzs7NkJBRVM7QUFBQSxVQUNBQyxLQURBLEdBQ1UsS0FBS0wsS0FEZixDQUNBSyxLQURBO0FBRVIsYUFDRSxtRUFDRTtBQUFLLGVBQU8sRUFBRSxLQUFLQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURwQixNQURGLEVBSUUsTUFBQyxrRUFBRDtBQUFlLGFBQUssRUFBRUQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLENBREY7QUFRRDs7Ozs7Ozs7OztBQXJCK0JFLHFCLFFBQUFBLEssRUFBT0MsSyxRQUFBQSxLO0FBQy9CSixvQixHQUFPSSxLQUFLLENBQUNKLElBQU4sSUFBYyxFOzt1QkFDckJHLEtBQUssQ0FBQ0UsUUFBTixDQUFlTixtRUFBVyxDQUFDO0FBQUVDLHNCQUFJLEVBQUpBO0FBQUYsaUJBQUQsQ0FBMUIsQzs7O2lEQUNDO0FBQUVBLHNCQUFJLEVBQUpBO0FBQUYsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKdUJNLCtDOztBQTZCbEMsU0FBU0MsZUFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsU0FBTztBQUNMUCxTQUFLLEVBQUVPLEtBQUssQ0FBQ1A7QUFEUixHQUFQO0FBR0Q7O0FBRUROLG1CQUFtQixDQUFDYyxTQUFwQixHQUFnQztBQUM5QlIsT0FBSyxFQUFFUyxrREFBUyxDQUFDQyxVQUFWLENBQXFCQyw4Q0FBckIsRUFBMEJDLFVBREg7QUFFOUJkLGFBQVcsRUFBRVcsa0RBQVMsQ0FBQ0ksSUFBVixDQUFlRDtBQUZFLENBQWhDO0FBS0E7QUFDZUUsMkhBQU8sQ0FBQ1IsZUFBRCxFQUFrQjtBQUN0Q1IsYUFBVyxFQUFYQSwyREFBV0E7QUFEMkIsQ0FBbEIsQ0FBUCxDQUVaSixtQkFGWSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRhaW5lcnMvU2VhcmNoUmVwb0NvbnRhaW5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IGdldFRvcFJlcG9zIH0gZnJvbSAnYWN0aW9ucy9yZXBvcydcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJ2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cydcblxuY2xhc3MgU2VhcmNoUmVwb0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgc3RvcmUsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCBsYW5nID0gcXVlcnkubGFuZyB8fCAnJ1xuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldFRvcFJlcG9zKHsgbGFuZyB9KSlcbiAgICByZXR1cm4geyBsYW5nIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCB7IGdldFRvcFJlcG9zIH0gPSB0aGlzLnByb3BzXG4gICAgZ2V0VG9wUmVwb3MoeyBsYW5nOiAncnVieScgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyByZXBvcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuX2dvVG9BYm91dH0+XG4gICAgICAgICAgR08gVE8gQUJPVVQgKHdpdGggPGNvZGU+cm91dGVyPC9jb2RlPilcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIHJlcG9zPXtyZXBvc30gLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIF9nb1RvQWJvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Fib3V0JylcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcmVwb3M6IHN0YXRlLnJlcG9zXG4gIH1cbn1cblxuU2VhcmNoUmVwb0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHJlcG9zOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNYXApLmlzUmVxdWlyZWQsXG4gIGdldFRvcFJlcG9zOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCB7IFNlYXJjaFJlcG9Db250YWluZXIgfVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgZ2V0VG9wUmVwb3Ncbn0pKFNlYXJjaFJlcG9Db250YWluZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/SearchRepoContainer.js\n");

/***/ })

})