"use strict";
(() => {
var exports = {};
exports.id = 7752;
exports.ids = [7752,1861,149];
exports.modules = {

/***/ 7505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Background extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { children , bgc , zidx  } = this.props;
        const styles = {
            Bground: {
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                position: "fixed",
                top: "0%",
                left: "0%",
                background: bgc,
                width: "100vw",
                height: "100vh",
                zIndex: "2000",
                zIndex: zidx
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "Background",
            style: styles.Bground,
            ...this.props,
            children: children
        });
    }
}


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
var __webpack_exports__ = (__webpack_exec__(7505));
module.exports = __webpack_exports__;

})();