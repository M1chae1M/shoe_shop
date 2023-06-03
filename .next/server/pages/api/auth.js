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
exports.id = "pages/api/auth";
exports.ids = ["pages/api/auth"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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

/***/ "(api)/./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _authPromise = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! ./authPromise */ \"(api)/./pages/api/authPromise.js\"));\nmodule.exports = (req, res)=>{\n    (0, _authPromise.default)(req, res).then(({ data , login , token  })=>{\n        if (data?.length > 0) {\n            const { img  } = data[0];\n            res.status(200).json({\n                login,\n                logged: true,\n                img,\n                token\n            });\n        } else res.status(200).json({\n            logged: false\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs4RUFBaUI7QUFFakJBLE9BQU9DLE9BQU8sR0FBQyxDQUFDQyxLQUFLQyxNQUFNO0lBQ3pCQyxJQUFBQSxvQkFBSSxFQUFDRixLQUFLQyxLQUNURSxJQUFJLENBQUMsQ0FBQyxFQUFDQyxLQUFJLEVBQUNDLE1BQUssRUFBQ0MsTUFBSyxFQUFDLEdBQUc7UUFDMUIsSUFBR0YsTUFBTUcsU0FBTyxHQUFFO1lBQ2hCLE1BQU0sRUFBQ0MsSUFBRyxFQUFDLEdBQUNKLElBQUksQ0FBQyxFQUFFO1lBQ25CSCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDTDtnQkFBT00sUUFBTyxJQUFJO2dCQUFFSDtnQkFBS0Y7WUFBSztRQUN0RCxPQUNLTCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFFBQU8sS0FBSztRQUFBO0lBQ3pDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9lX3Nob3AvLi9wYWdlcy9hcGkvYXV0aC5qcz81YWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gJy4vYXV0aFByb21pc2UnO1xyXG5cclxubW9kdWxlLmV4cG9ydHM9KHJlcSwgcmVzKT0+e1xyXG4gIGF1dGgocmVxLCByZXMpXHJcbiAgLnRoZW4oKHtkYXRhLGxvZ2luLHRva2VufSk9PntcclxuICAgIGlmKGRhdGE/Lmxlbmd0aD4wKXtcclxuICAgICAgY29uc3Qge2ltZ309ZGF0YVswXTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2xvZ2luLCBsb2dnZWQ6dHJ1ZSwgaW1nLCB0b2tlbn0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSByZXMuc3RhdHVzKDIwMCkuanNvbih7bG9nZ2VkOmZhbHNlfSlcclxuICB9KVxyXG59Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXEiLCJyZXMiLCJhdXRoIiwidGhlbiIsImRhdGEiLCJsb2dpbiIsInRva2VuIiwibGVuZ3RoIiwiaW1nIiwic3RhdHVzIiwianNvbiIsImxvZ2dlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth.js\n");

/***/ }),

/***/ "(api)/./pages/api/authPromise.js":
/*!**********************************!*\
  !*** ./pages/api/authPromise.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var _connectionWithDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connectionWithDB */ \"(api)/./pages/api/connectionWithDB.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _verificationKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verificationKey */ \"(api)/./pages/api/verificationKey.js\");\n/* harmony import */ var _loginQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginQuery */ \"(api)/./pages/api/loginQuery.js\");\n\n\n\n\nfunction auth(req, res) {\n    const { body  } = req;\n    const { token  } = body;\n    if (token) {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token, _verificationKey__WEBPACK_IMPORTED_MODULE_2__.verificationKey);\n        const { login , password  } = decoded ?? \"\";\n        const query = (0,_loginQuery__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(login, password);\n        return new Promise((resolve, reject)=>{\n            _connectionWithDB__WEBPACK_IMPORTED_MODULE_0__.connection.query(query, (err, data)=>{\n                if (err) reject(err);\n                else if (data?.length > 0) resolve({\n                    data,\n                    login,\n                    token\n                });\n                else resolve({\n                    data: [],\n                    login,\n                    token\n                });\n            });\n        });\n    } else return Promise.resolve([]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aFByb21pc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFDbUI7QUFDWjtBQUV2QixTQUFTSSxLQUFLQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUNwQyxNQUFNLEVBQUNDLEtBQUksRUFBQyxHQUFDRjtJQUNiLE1BQU0sRUFBQ0csTUFBSyxFQUFDLEdBQUNEO0lBRWQsSUFBR0MsT0FBTTtRQUNQLE1BQU1DLFVBQVFSLDBEQUFVLENBQUNPLE9BQU9OLDZEQUFlQTtRQUMvQyxNQUFNLEVBQUNTLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQUNILFdBQVM7UUFDakMsTUFBTUksUUFBTVYsdURBQVVBLENBQUNRLE9BQU1DO1FBRTdCLE9BQU8sSUFBSUUsUUFBUSxDQUFDQyxTQUFTQyxTQUFTO1lBQ3BDaEIsK0RBQWdCLENBQUNhLE9BQU8sQ0FBQ0ksS0FBS0MsT0FBTztnQkFDbkMsSUFBR0QsS0FBS0QsT0FBT0M7cUJBQ1YsSUFBR0MsTUFBTUMsU0FBUyxHQUFHSixRQUFRO29CQUFDRztvQkFBTVA7b0JBQU9IO2dCQUFLO3FCQUNoRE8sUUFBUTtvQkFBQ0csTUFBSyxFQUFFO29CQUFFUDtvQkFBT0g7Z0JBQUs7WUFDckM7UUFDRjtJQUNGLE9BQ0ssT0FBT00sUUFBUUMsT0FBTyxDQUFDLEVBQUU7QUFDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob2Vfc2hvcC8uL3BhZ2VzL2FwaS9hdXRoUHJvbWlzZS5qcz8wY2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdGlvbn0gZnJvbSAnLi9jb25uZWN0aW9uV2l0aERCJztcclxuaW1wb3J0IEpXVCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQge3ZlcmlmaWNhdGlvbktleX0gZnJvbSAnLi92ZXJpZmljYXRpb25LZXknO1xyXG5pbXBvcnQgbG9naW5RdWVyeSBmcm9tICcuL2xvZ2luUXVlcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aChyZXEsIHJlcyl7XHJcbiAgY29uc3Qge2JvZHl9PXJlcTtcclxuICBjb25zdCB7dG9rZW59PWJvZHk7XHJcblxyXG4gIGlmKHRva2VuKXtcclxuICAgIGNvbnN0IGRlY29kZWQ9SldULmRlY29kZSh0b2tlbiwgdmVyaWZpY2F0aW9uS2V5KTtcclxuICAgIGNvbnN0IHtsb2dpbiwgcGFzc3dvcmR9PWRlY29kZWQ/PycnO1xyXG4gICAgY29uc3QgcXVlcnk9bG9naW5RdWVyeShsb2dpbixwYXNzd29yZCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgIGNvbm5lY3Rpb24ucXVlcnkocXVlcnksIChlcnIsIGRhdGEpPT57XHJcbiAgICAgICAgaWYoZXJyKSByZWplY3QoZXJyKTtcclxuICAgICAgICBlbHNlIGlmKGRhdGE/Lmxlbmd0aCA+IDApIHJlc29sdmUoe2RhdGEsIGxvZ2luLCB0b2tlbn0pO1xyXG4gICAgICAgIGVsc2UgcmVzb2x2ZSh7ZGF0YTpbXSwgbG9naW4sIHRva2VufSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGVsc2UgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdGlvbiIsIkpXVCIsInZlcmlmaWNhdGlvbktleSIsImxvZ2luUXVlcnkiLCJhdXRoIiwicmVxIiwicmVzIiwiYm9keSIsInRva2VuIiwiZGVjb2RlZCIsImRlY29kZSIsImxvZ2luIiwicGFzc3dvcmQiLCJxdWVyeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiZGF0YSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/authPromise.js\n");

/***/ }),

/***/ "(api)/./pages/api/connectionWithDB.js":
/*!***************************************!*\
  !*** ./pages/api/connectionWithDB.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connection\": () => (/* binding */ connection)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_DATABASE\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29ubmVjdGlvbldpdGhEQi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkI7QUFFcEIsTUFBTUMsYUFBV0QsOERBQXNCLENBQUM7SUFDN0NHLE1BQUtDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztJQUN4QkMsTUFBS0gsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0lBQ3hCQyxVQUFTTCxRQUFRQyxHQUFHLENBQUNLLFdBQVc7SUFDaENDLFVBQVNQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztBQUNsQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvZV9zaG9wLy4vcGFnZXMvYXBpL2Nvbm5lY3Rpb25XaXRoREIuanM/YmZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0aW9uPW15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGhvc3Q6cHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICB1c2VyOnByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuREJfREFUQUJBU0VcclxufSk7Il0sIm5hbWVzIjpbIm15c3FsIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX0RBVEFCQVNFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/connectionWithDB.js\n");

/***/ }),

/***/ "(api)/./pages/api/loginQuery.js":
/*!*********************************!*\
  !*** ./pages/api/loginQuery.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginQuery)\n/* harmony export */ });\nfunction loginQuery(login, password) {\n    return `SELECT * FROM users WHERE login=\"${login}\" AND password=SHA2(\"${password}\",256)`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5RdWVyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsV0FBV0MsS0FBSyxFQUFDQyxRQUFRLEVBQUM7SUFDaEQsT0FBTyxDQUFDLGlDQUFpQyxFQUFFRCxNQUFNLHFCQUFxQixFQUFFQyxTQUFTLE1BQU0sQ0FBQztBQUMxRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvZV9zaG9wLy4vcGFnZXMvYXBpL2xvZ2luUXVlcnkuanM/NzE4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblF1ZXJ5KGxvZ2luLHBhc3N3b3JkKXtcclxuICByZXR1cm4gYFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgbG9naW49XCIke2xvZ2lufVwiIEFORCBwYXNzd29yZD1TSEEyKFwiJHtwYXNzd29yZH1cIiwyNTYpYDtcclxufSJdLCJuYW1lcyI6WyJsb2dpblF1ZXJ5IiwibG9naW4iLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/loginQuery.js\n");

/***/ }),

/***/ "(api)/./pages/api/verificationKey.js":
/*!**************************************!*\
  !*** ./pages/api/verificationKey.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verificationKey\": () => (/* binding */ verificationKey)\n/* harmony export */ });\nconst verificationKey = process.env.VERIFICATION_KEY;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmVyaWZpY2F0aW9uS2V5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxrQkFBZ0JDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9lX3Nob3AvLi9wYWdlcy9hcGkvdmVyaWZpY2F0aW9uS2V5LmpzPzgwM2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZlcmlmaWNhdGlvbktleT1wcm9jZXNzLmVudi5WRVJJRklDQVRJT05fS0VZOyJdLCJuYW1lcyI6WyJ2ZXJpZmljYXRpb25LZXkiLCJwcm9jZXNzIiwiZW52IiwiVkVSSUZJQ0FUSU9OX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/verificationKey.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth.js"));
module.exports = __webpack_exports__;

})();