module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "undefined";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_containers_SearchRepoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/containers/SearchRepoContainer */ \"./src/containers/SearchRepoContainer.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_containers_SearchRepoContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlNlYXJjaFJlcG9Db250YWluZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlQSwwSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaFJlcG9Db250YWluZXIgZnJvbSAnY29udGFpbmVycy9TZWFyY2hSZXBvQ29udGFpbmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXBvQ29udGFpbmVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/actions/repos.js":
/*!******************************!*\
  !*** ./src/actions/repos.js ***!
  \******************************/
/*! exports provided: GET_TOP_REPOS, GET_TOP_REPOS_SUCCESS, getTopRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TOP_REPOS\", function() { return GET_TOP_REPOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TOP_REPOS_SUCCESS\", function() { return GET_TOP_REPOS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTopRepos\", function() { return getTopRepos; });\n/* harmony import */ var _libs_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/github */ \"./src/libs/github.js\");\n\nconst GET_TOP_REPOS = Symbol('GET_TOP_REPOS');\nconst GET_TOP_REPOS_SUCCESS = Symbol('GET_TOP_REPOS_SUCCESS');\nfunction getTopRepos({\n  lang\n}) {\n  return dispatch => {\n    dispatch({\n      type: GET_TOP_REPOS\n    });\n    return _libs_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTopRepos({\n      lang\n    }).then(res => {\n      dispatch(onGetTopRepo(lang, res));\n    });\n  };\n}\n\nfunction onGetTopRepo(lang, payload) {\n  return {\n    type: GET_TOP_REPOS_SUCCESS,\n    lang,\n    payload\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9yZXBvcy5qcz9kNWRkIl0sIm5hbWVzIjpbIkdFVF9UT1BfUkVQT1MiLCJTeW1ib2wiLCJHRVRfVE9QX1JFUE9TX1NVQ0NFU1MiLCJnZXRUb3BSZXBvcyIsImxhbmciLCJkaXNwYXRjaCIsInR5cGUiLCJnaXRodWIiLCJ0aGVuIiwicmVzIiwib25HZXRUb3BSZXBvIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsYUFBYSxHQUFHQyxNQUFNLENBQUMsZUFBRCxDQUE1QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHRCxNQUFNLENBQUMsdUJBQUQsQ0FBcEM7QUFFQSxTQUFTRSxXQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBZ0M7QUFDckMsU0FBT0MsUUFBUSxJQUFJO0FBQ2pCQSxZQUFRLENBQUM7QUFDUEMsVUFBSSxFQUFFTjtBQURDLEtBQUQsQ0FBUjtBQUlBLFdBQU9PLG9EQUFNLENBQUNKLFdBQVAsQ0FBbUI7QUFBRUM7QUFBRixLQUFuQixFQUE2QkksSUFBN0IsQ0FBa0NDLEdBQUcsSUFBSTtBQUM5Q0osY0FBUSxDQUFDSyxZQUFZLENBQUNOLElBQUQsRUFBT0ssR0FBUCxDQUFiLENBQVI7QUFDRCxLQUZNLENBQVA7QUFHRCxHQVJEO0FBU0Q7O0FBRUQsU0FBU0MsWUFBVCxDQUF1Qk4sSUFBdkIsRUFBNkJPLE9BQTdCLEVBQXNDO0FBQ3BDLFNBQU87QUFDTEwsUUFBSSxFQUFFSixxQkFERDtBQUVMRSxRQUZLO0FBR0xPO0FBSEssR0FBUDtBQUtEIiwiZmlsZSI6Ii4vc3JjL2FjdGlvbnMvcmVwb3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2l0aHViIGZyb20gJ2xpYnMvZ2l0aHViJ1xuXG5leHBvcnQgY29uc3QgR0VUX1RPUF9SRVBPUyA9IFN5bWJvbCgnR0VUX1RPUF9SRVBPUycpXG5leHBvcnQgY29uc3QgR0VUX1RPUF9SRVBPU19TVUNDRVNTID0gU3ltYm9sKCdHRVRfVE9QX1JFUE9TX1NVQ0NFU1MnKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wUmVwb3MgKHsgbGFuZyB9KSB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0VUX1RPUF9SRVBPU1xuICAgIH0pXG5cbiAgICByZXR1cm4gZ2l0aHViLmdldFRvcFJlcG9zKHsgbGFuZyB9KS50aGVuKHJlcyA9PiB7XG4gICAgICBkaXNwYXRjaChvbkdldFRvcFJlcG8obGFuZywgcmVzKSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uR2V0VG9wUmVwbyAobGFuZywgcGF5bG9hZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEdFVF9UT1BfUkVQT1NfU1VDQ0VTUyxcbiAgICBsYW5nLFxuICAgIHBheWxvYWRcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/actions/repos.js\n");

/***/ }),

/***/ "./src/components/SearchResults.js":
/*!*****************************************!*\
  !*** ./src/components/SearchResults.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ \"immutable\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ilyakaminsky/Downloads/frontend_test_ikaminskii-master/src/components/SearchResults.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"SearchResults__Container\",\n  componentId: \"sc-1np6st3-0\"\n})([\"width:300px;padding:1em;margin:1em auto;\"]);\nconst Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({\n  displayName: \"SearchResults__Item\",\n  componentId: \"sc-1np6st3-1\"\n})([\"background:#eee;padding:4px 12px;:hover{a{color:#eee;}background:\", \";}\"], props => props.theme.colors.primary);\nconst REPO_COUNT = 10;\n\nconst SearchResults = ({\n  repos\n}) => {\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Top \", REPO_COUNT, \" \", repos.get('lang'), \" repos\"), __jsx(\"small\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, repos.get('totalCount').toLocaleString(), \" repos found\"), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, repos.get('items').take(REPO_COUNT).map(item => __jsx(Item, {\n    key: item.get('id'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: item.get('htmlUrl'),\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, item.get('name'))))));\n};\n\nSearchResults.propTypes = {\n  repos: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_2__[\"Map\"]).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResults);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzP2JhODMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSXRlbSIsImxpIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJSRVBPX0NPVU5UIiwiU2VhcmNoUmVzdWx0cyIsInJlcG9zIiwiZ2V0IiwidG9Mb2NhbGVTdHJpbmciLCJ0YWtlIiwibWFwIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJNYXAiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdEQUFmO0FBS0EsTUFBTUMsSUFBSSxHQUFHRix3REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLGdGQU9RQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxPQVBwQyxDQUFWO0FBV0EsTUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ25DLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVNGLFVBQVQsT0FBc0JFLEtBQUssQ0FBQ0MsR0FBTixDQUFVLE1BQVYsQ0FBdEIsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUQsS0FBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF3QkMsY0FBeEIsRUFBUixpQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUYsS0FBSyxDQUFDQyxHQUFOLENBQVUsT0FBVixFQUFtQkUsSUFBbkIsQ0FBd0JMLFVBQXhCLEVBQW9DTSxHQUFwQyxDQUF3Q0MsSUFBSSxJQUMxQyxNQUFDLElBQUQ7QUFBTSxPQUFHLEVBQUVBLElBQUksQ0FBQ0osR0FBTCxDQUFTLElBQVQsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVJLElBQUksQ0FBQ0osR0FBTCxDQUFTLFNBQVQsQ0FBVDtBQUE4QixVQUFNLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxJQUFJLENBQUNKLEdBQUwsQ0FBUyxNQUFULENBREgsQ0FERixDQURGLENBRkosQ0FIRixDQURGO0FBaUJELENBbEJEOztBQW9CQUYsYUFBYSxDQUFDTyxTQUFkLEdBQTBCO0FBQ3hCTixPQUFLLEVBQUVPLGlEQUFTLENBQUNDLFVBQVYsQ0FBcUJDLDZDQUFyQixFQUEwQkM7QUFEVCxDQUExQjtBQUllWCw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbmBcbmNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICA6aG92ZXIge1xuICAgIGEge1xuICAgICAgY29sb3I6ICNlZWU7XG4gICAgfVxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICB9XG5gXG5cbmNvbnN0IFJFUE9fQ09VTlQgPSAxMFxuY29uc3QgU2VhcmNoUmVzdWx0cyA9ICh7IHJlcG9zIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgyPlRvcCB7UkVQT19DT1VOVH0ge3JlcG9zLmdldCgnbGFuZycpfSByZXBvczwvaDI+XG4gICAgICA8c21hbGw+e3JlcG9zLmdldCgndG90YWxDb3VudCcpLnRvTG9jYWxlU3RyaW5nKCl9IHJlcG9zIGZvdW5kPC9zbWFsbD5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIHJlcG9zLmdldCgnaXRlbXMnKS50YWtlKFJFUE9fQ09VTlQpLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17aXRlbS5nZXQoJ2lkJyl9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmdldCgnaHRtbFVybCcpfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAge2l0ZW0uZ2V0KCduYW1lJyl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cblNlYXJjaFJlc3VsdHMucHJvcFR5cGVzID0ge1xuICByZXBvczogUHJvcFR5cGVzLmluc3RhbmNlT2YoTWFwKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchResults.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  env: process && process.env && \"development\" || \"development\",\n  mode: process && process.env && process.env.MODE || \"development\",\n  githubApiEndpoint: process && process.env && process.env.GITHUB_API_ENDPOINT || \"https://api.github.com\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzP2RiNDkiXSwibmFtZXMiOlsiZW52IiwibW9kZSIsImdpdGh1YkFwaUVuZHBvaW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLEtBQUcsMERBRFU7QUFFYkMsTUFBSSw2REFGUztBQUdiQyxtQkFBaUI7QUFISixDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTU9ERSxcbiAgZ2l0aHViQXBpRW5kcG9pbnQ6IHByb2Nlc3MuZW52LkdJVEhVQl9BUElfRU5EUE9JTlRcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/containers/SearchRepoContainer.js":
/*!***********************************************!*\
  !*** ./src/containers/SearchRepoContainer.js ***!
  \***********************************************/
/*! exports provided: SearchRepoContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchRepoContainer\", function() { return SearchRepoContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ \"immutable\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_repos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/repos */ \"./src/actions/repos.js\");\n/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchResults */ \"./src/components/SearchResults.js\");\nvar _jsxFileName = \"/Users/ilyakaminsky/Downloads/frontend_test_ikaminskii-master/src/containers/SearchRepoContainer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass SearchRepoContainer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"_goToAbout\", () => {\n      this.props.router.push('/about');\n    });\n  }\n\n  static async getInitialProps({\n    store,\n    query\n  }) {\n    // You can add default property 'javascript' in quotes\n    const lang = query.lang || '';\n    await store.dispatch(Object(_actions_repos__WEBPACK_IMPORTED_MODULE_4__[\"getTopRepos\"])({\n      lang\n    }));\n    return {\n      lang\n    };\n  }\n\n  componentDidMount() {\n    const {\n      getTopRepos\n    } = this.props;\n    getTopRepos({\n      lang: 'ruby'\n    });\n  }\n\n  render() {\n    const {\n      repos\n    } = this.props;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      onClick: this._goToAbout,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }\n    }, \"GO TO ABOUT (with \", __jsx(\"code\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 29\n      }\n    }, \"router\"), \")\"), __jsx(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      repos: repos,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\nfunction mapStateToProps(state) {\n  return {\n    repos: state.repos\n  };\n}\n\nSearchRepoContainer.propTypes = {\n  repos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_2__[\"Map\"]).isRequired,\n  getTopRepos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  getTopRepos: _actions_repos__WEBPACK_IMPORTED_MODULE_4__[\"getTopRepos\"]\n})(SearchRepoContainer));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9TZWFyY2hSZXBvQ29udGFpbmVyLmpzP2QyOGMiXSwibmFtZXMiOlsiU2VhcmNoUmVwb0NvbnRhaW5lciIsIkNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwicHVzaCIsImdldEluaXRpYWxQcm9wcyIsInN0b3JlIiwicXVlcnkiLCJsYW5nIiwiZGlzcGF0Y2giLCJnZXRUb3BSZXBvcyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwicmVwb3MiLCJfZ29Ub0Fib3V0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpbnN0YW5jZU9mIiwiTWFwIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxtQkFBTixTQUFrQ0MsK0NBQWxDLENBQTRDO0FBQUE7QUFBQTs7QUFBQSx3Q0F5QjdCLE1BQU07QUFDakIsV0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxJQUFsQixDQUF1QixRQUF2QjtBQUNELEtBM0J5QztBQUFBOztBQUMxQyxlQUFhQyxlQUFiLENBQThCO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxHQUE5QixFQUFnRDtBQUM5QztBQUNBLFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFOLElBQWMsRUFBM0I7QUFDQSxVQUFNRixLQUFLLENBQUNHLFFBQU4sQ0FBZUMsa0VBQVcsQ0FBQztBQUFFRjtBQUFGLEtBQUQsQ0FBMUIsQ0FBTjtBQUNBLFdBQU87QUFBRUE7QUFBRixLQUFQO0FBQ0Q7O0FBRURHLG1CQUFpQixHQUFJO0FBQ25CLFVBQU07QUFBRUQ7QUFBRixRQUFrQixLQUFLUixLQUE3QjtBQUNBUSxlQUFXLENBQUM7QUFBRUYsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFYO0FBQ0Q7O0FBRURJLFFBQU0sR0FBSTtBQUNSLFVBQU07QUFBRUM7QUFBRixRQUFZLEtBQUtYLEtBQXZCO0FBQ0EsV0FDRSxtRUFDRTtBQUFLLGFBQU8sRUFBRSxLQUFLWSxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURwQixNQURGLEVBSUUsTUFBQyxpRUFBRDtBQUFlLFdBQUssRUFBRUQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLENBREY7QUFRRDs7QUF2QnlDOztBQThCNUMsU0FBU0UsZUFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0IsU0FBTztBQUNMSCxTQUFLLEVBQUVHLEtBQUssQ0FBQ0g7QUFEUixHQUFQO0FBR0Q7O0FBRURiLG1CQUFtQixDQUFDaUIsU0FBcEIsR0FBZ0M7QUFDOUJKLE9BQUssRUFBRUssaURBQVMsQ0FBQ0MsVUFBVixDQUFxQkMsNkNBQXJCLEVBQTBCQyxVQURIO0FBRTlCWCxhQUFXLEVBQUVRLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGRSxDQUFoQztBQUtBO0FBQ2VFLDBIQUFPLENBQUNSLGVBQUQsRUFBa0I7QUFDdENMLHlFQUFXQTtBQUQyQixDQUFsQixDQUFQLENBRVpWLG1CQUZZLENBQWYiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9TZWFyY2hSZXBvQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2ltbXV0YWJsZSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgZ2V0VG9wUmVwb3MgfSBmcm9tICdhY3Rpb25zL3JlcG9zJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJ1xuXG5jbGFzcyBTZWFyY2hSZXBvQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBzdG9yZSwgcXVlcnkgfSkge1xuICAgIC8vIFlvdSBjYW4gYWRkIGRlZmF1bHQgcHJvcGVydHkgJ2phdmFzY3JpcHQnIGluIHF1b3Rlc1xuICAgIGNvbnN0IGxhbmcgPSBxdWVyeS5sYW5nIHx8ICcnXG4gICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goZ2V0VG9wUmVwb3MoeyBsYW5nIH0pKVxuICAgIHJldHVybiB7IGxhbmcgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHsgZ2V0VG9wUmVwb3MgfSA9IHRoaXMucHJvcHNcbiAgICBnZXRUb3BSZXBvcyh7IGxhbmc6ICdydWJ5JyB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHJlcG9zIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5fZ29Ub0Fib3V0fT5cbiAgICAgICAgICBHTyBUTyBBQk9VVCAod2l0aCA8Y29kZT5yb3V0ZXI8L2NvZGU+KVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgcmVwb3M9e3JlcG9zfSAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgX2dvVG9BYm91dCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvYWJvdXQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICByZXBvczogc3RhdGUucmVwb3NcbiAgfVxufVxuXG5TZWFyY2hSZXBvQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgcmVwb3M6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1hcCkuaXNSZXF1aXJlZCxcbiAgZ2V0VG9wUmVwb3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IHsgU2VhcmNoUmVwb0NvbnRhaW5lciB9XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuICBnZXRUb3BSZXBvc1xufSkoU2VhcmNoUmVwb0NvbnRhaW5lcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/SearchRepoContainer.js\n");

/***/ }),

/***/ "./src/libs/github.js":
/*!****************************!*\
  !*** ./src/libs/github.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! humps */ \"humps\");\n/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\nconst github = {\n  getTopRepos({\n    lang = 'javascript'\n  }) {\n    const path = `${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].githubApiEndpoint}/search/repositories?q=language:${lang}&sort=stars&order=desc`;\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).then(res => {\n      return humps__WEBPACK_IMPORTED_MODULE_1___default.a.camelizeKeys(res.data);\n    });\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (github);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9naXRodWIuanM/NGZiMCJdLCJuYW1lcyI6WyJnaXRodWIiLCJnZXRUb3BSZXBvcyIsImxhbmciLCJwYXRoIiwiY29uZmlnIiwiZ2l0aHViQXBpRW5kcG9pbnQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJodW1wcyIsImNhbWVsaXplS2V5cyIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxhQUFXLENBQUU7QUFBRUMsUUFBSSxHQUFHO0FBQVQsR0FBRixFQUEyQjtBQUNwQyxVQUFNQyxJQUFJLEdBQUksR0FBRUMsK0NBQU0sQ0FBQ0MsaUJBQWtCLG1DQUFrQ0gsSUFBSyx3QkFBaEY7QUFDQSxXQUFPSSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVKLElBQVYsRUFBZ0JLLElBQWhCLENBQXFCQyxHQUFHLElBQUk7QUFDakMsYUFBT0MsNENBQUssQ0FBQ0MsWUFBTixDQUFtQkYsR0FBRyxDQUFDRyxJQUF2QixDQUFQO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7O0FBTlksQ0FBZjtBQVNlWixxRUFBZiIsImZpbGUiOiIuL3NyYy9saWJzL2dpdGh1Yi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBodW1wcyBmcm9tICdodW1wcydcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xuXG5jb25zdCBnaXRodWIgPSB7XG4gIGdldFRvcFJlcG9zICh7IGxhbmcgPSAnamF2YXNjcmlwdCcgfSkge1xuICAgIGNvbnN0IHBhdGggPSBgJHtjb25maWcuZ2l0aHViQXBpRW5kcG9pbnR9L3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1sYW5ndWFnZToke2xhbmd9JnNvcnQ9c3RhcnMmb3JkZXI9ZGVzY2BcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHBhdGgpLnRoZW4ocmVzID0+IHtcbiAgICAgIHJldHVybiBodW1wcy5jYW1lbGl6ZUtleXMocmVzLmRhdGEpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnaXRodWJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/github.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "humps":
/*!************************!*\
  !*** external "humps" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"humps\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodW1wc1wiPzI4OTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaHVtcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodW1wc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///humps\n");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immutable\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW11dGFibGVcIj83ODdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImltbXV0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbXV0YWJsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///immutable\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });