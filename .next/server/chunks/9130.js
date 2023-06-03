"use strict";
exports.id = 9130;
exports.ids = [9130];
exports.modules = {

/***/ 9130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionC": () => (/* binding */ OptionC),
/* harmony export */   "default": () => (/* binding */ SelectC)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6004);



const styles = {
    select: {
        cursor: "pointer",
        backgroundColor: _app__WEBPACK_IMPORTED_MODULE_2__.glbl._green_color,
        background: _app__WEBPACK_IMPORTED_MODULE_2__.glbl._gradient,
        border: "none",
        boxShadow: "0px -2px grey, 2px 0px grey,-2px 0px grey,0px 2px grey"
    },
    option: {
        fontWeight: "bold",
        color: _app__WEBPACK_IMPORTED_MODULE_2__.glbl._yellow_color,
        padding: "3px 0px",
        border: "solid black 1px",
        textAlign: "center",
        backgroundColor: "#36c20f"
    }
};
class OptionC extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { children  } = this.props;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
            style: styles.option,
            ...this.props,
            children: children
        });
    }
}
class SelectC extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { children , className  } = this.props;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
            style: {
                ...styles.option,
                ...styles.select
            },
            className: className,
            ...this.props,
            children: children
        });
    }
}


/***/ })

};
;