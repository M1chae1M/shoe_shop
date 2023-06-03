"use strict";
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Number)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GreenBTN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);



class Number extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { value , onChange  } = this.props;
        const styles = {
            Number: {
                textAlign: "center",
                margin: "5px"
            },
            btn: {
                width: "20px"
            },
            changeNumber: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "0px 7px",
                width: "fit-content"
            }
        };
        const minus = ()=>onChange(-1);
        const plus = ()=>onChange(+1);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: styles.changeNumber,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: styles.btn,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GreenBTN__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        value: "-",
                        onClick: minus,
                        className: "GreenBTN"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: styles.Number,
                    children: value
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: styles.btn,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GreenBTN__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        value: "+",
                        onClick: plus,
                        className: "GreenBTN"
                    })
                })
            ]
        });
    }
}


/***/ })

};
;