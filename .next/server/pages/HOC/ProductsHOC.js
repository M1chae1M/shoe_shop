"use strict";
(() => {
var exports = {};
exports.id = 2415;
exports.ids = [2415,1861,149];
exports.modules = {

/***/ 4143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProductsHOC = (ToWrap)=>{
    return class HOC extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        componentDidMount() {
            fetch(`${"http://localhost:3000/api/"}product/all`).then((res)=>res.json()).then(({ resp  })=>this.setState({
                    products: resp
                }, console.log(this.state.products)));
        }
        render() {
            const { products  } = this.state;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToWrap, {
                products: products,
                ...this.props
            });
        }
        constructor(...args){
            super(...args);
            this.state = {
                products: []
            };
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsHOC);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4143));
module.exports = __webpack_exports__;

})();