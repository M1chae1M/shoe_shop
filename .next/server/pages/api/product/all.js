"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/product/all";
exports.ids = ["pages/api/product/all"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvZV9zaG9wLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzP2Q3YzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./pages/api/connectionWithDB.js":
/*!***************************************!*\
  !*** ./pages/api/connectionWithDB.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connection\": () => (/* binding */ connection)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_DATABASE\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmVjdGlvbldpdGhEQi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFFcEIsTUFBTUMsYUFBV0QsOERBQXNCLENBQUM7SUFDN0NHLE1BQUtDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztJQUN4QkMsTUFBS0gsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0lBQ3hCQyxVQUFTTCxRQUFRQyxHQUFHLENBQUNLLFdBQVc7SUFDaENDLFVBQVNQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztBQUNsQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvZV9zaG9wLy4vcGFnZXMvYXBpL2Nvbm5lY3Rpb25XaXRoREIuanM/YmZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0aW9uPW15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6cHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICB1c2VyOnByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuREJfREFUQUJBU0VcclxufSk7Il0sIm5hbWVzIjpbIm15c3FsIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX0RBVEFCQVNFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/connectionWithDB.js\n");

/***/ }),

/***/ "(api)/./pages/api/product/all.js":
/*!**********************************!*\
  !*** ./pages/api/product/all.js ***!
  \**********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mysql2 = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mysql2 */ \"mysql2\"));\nconst _connectionWithDB = __webpack_require__(/*! ../connectionWithDB */ \"(api)/./pages/api/connectionWithDB.js\");\nmodule.exports = (req, res)=>{\n    const query = `SELECT * FROM products`;\n    _connectionWithDB.connection.query(query, (err, resp)=>{\n        if (err) {\n            console.error(err);\n        } else {\n            res.status(200).json({\n                resp\n            });\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9hbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7eUVBQWtCOzhDQUNPO0FBRXpCQSxPQUFPQyxPQUFPLEdBQUMsQ0FBQ0MsS0FBS0MsTUFBTTtJQUN6QixNQUFNQyxRQUFNLENBQUMsc0JBQXNCLENBQUM7SUFDcENDLDRCQUFVLENBQUNELEtBQUssQ0FBQ0EsT0FBTyxDQUFDRSxLQUFJQyxPQUFPO1FBQ2xDLElBQUdELEtBQUk7WUFDTEUsUUFBUUMsS0FBSyxDQUFDSDtRQUNoQixPQUNJO1lBQ0ZILElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNKO1lBQUk7UUFDNUIsQ0FBQztJQUNIO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9lX3Nob3AvLi9wYWdlcy9hcGkvcHJvZHVjdC9hbGwuanM/ODk5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCB7Y29ubmVjdGlvbn0gZnJvbSAnLi4vY29ubmVjdGlvbldpdGhEQic7XG5cbm1vZHVsZS5leHBvcnRzPShyZXEsIHJlcyk9PntcbiAgY29uc3QgcXVlcnk9YFNFTEVDVCAqIEZST00gcHJvZHVjdHNgO1xuICBjb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5LCAoZXJyLHJlc3ApPT57XG4gICAgaWYoZXJyKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtyZXNwfSk7XG4gICAgfVxuICB9KTtcbn07Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImNvbm5lY3Rpb24iLCJlcnIiLCJyZXNwIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/all.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/all.js"));
module.exports = __webpack_exports__;

})();