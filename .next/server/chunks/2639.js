"use strict";
exports.id = 2639;
exports.ids = [2639];
exports.modules = {

/***/ 2639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GreenBTN)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6004);



class GreenBTN extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { value , onClick , className , hidden  } = this.props;
        const styles = {
            BTN: {
                cursor: "pointer",
                fontWeight: "bold",
                color: _app__WEBPACK_IMPORTED_MODULE_2__.glbl._yellow_color,
                bottom: "0%",
                padding: "5px 0px",
                boxShadow: "0px -2px grey, 2px 0px grey,-2px 0px grey,0px 2px grey",
                border: "none",
                width: "100%",
                textAlign: "center",
                backgroundColor: _app__WEBPACK_IMPORTED_MODULE_2__.glbl._green_color,
                background: _app__WEBPACK_IMPORTED_MODULE_2__.glbl._gradient,
                opacity: hidden ? 0 : 1,
                position: hidden ? "absolute" : "relative",
                transition: "all 0.125s ease-in-out"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "button",
            value: value,
            style: styles.BTN,
            onClick: onClick,
            className: className
        });
    }
}


/***/ })

};
;