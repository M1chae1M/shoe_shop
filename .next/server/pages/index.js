"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,2888,2197,5101,130,1251,1861,5310,1298,8511,5243,3183,7192,6432,9515,7428,6968,7281,5580,149];
exports.modules = {

/***/ 2500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const URLfilters = (WrappedComponent)=>{
    return (0,next_router__WEBPACK_IMPORTED_MODULE_2__.withRouter)(class WithFilter extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        static async getInitialProps({ query  }) {
            const { sex , type  } = query;
            return {
                sex,
                type
            };
        }
        render() {
            const { router  } = this.props;
            const { query  } = router;
            const { sex , type  } = query;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WrappedComponent, {
                sex: sex,
                type: type,
                ...this.props
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URLfilters);


/***/ }),

/***/ 6616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsList_ProductsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _Filters_TopFilters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1316);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8117);
/* harmony import */ var _HOC_URLfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2500);
/* harmony import */ var _HOC_WithAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8519);
/* harmony import */ var _HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4143);








class App extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const styles = {
            App: {
                justifyItems: "center",
                display: "grid",
                alignContent: "center",
                height: "fit-content",
                overflowY: "scroll",
                padding: "5px",
                width: "70vw"
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "App",
            style: styles.App,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Filters_TopFilters__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductsList_ProductsList__WEBPACK_IMPORTED_MODULE_2__["default"], {})
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_WithAuth__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_HOC_URLfilter__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_HOC_HOC__WEBPACK_IMPORTED_MODULE_4__["default"])(App)))));


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 7865:
/***/ ((module) => {

module.exports = require("react-icons/cg");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,7069,8117,2639,9130,744,8519,4845,9303,11,1316], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();