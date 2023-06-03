"use strict";
exports.id = 1595;
exports.ids = [1595];
exports.modules = {

/***/ 1595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8117);
/* harmony import */ var _SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7069);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6004);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







class InCart extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { data , cart  } = this.props;
        const { id , image , name , price , howMany , sizeState  } = data;
        const styles = {
            inCart: {
                display: "grid",
                gridTemplateColumns: `calc(${_app__WEBPACK_IMPORTED_MODULE_5__.glbl._field_height} + 8px) calc(${_app__WEBPACK_IMPORTED_MODULE_5__.glbl._field_height} * 2) auto`,
                margin: "8px 0px",
                justifyItems: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden"
            },
            close: {
                fontSize: "60px",
                color: "red"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_2__.Store.Consumer, {
            children: (value)=>{
                const { changeState  } = value ?? {};
                const totalPrice = (price * howMany)?.toFixed?.(2);
                const removeFromCart = ()=>{
                    let removeIndex;
                    cart.map((x, i)=>{
                        if (x.name === name) removeIndex = i;
                    });
                    const newCart = [
                        ...cart.slice(0, removeIndex),
                        ...cart.slice(removeIndex + 1)
                    ];
                    localStorage.setItem("cart", JSON.stringify(newCart));
                    changeState({
                        cart: newCart
                    });
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: styles.inCart,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            href: `/products/${id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                src: image,
                                alt: "",
                                x: "95px",
                                y: "95px",
                                id: "bigPhoto"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Name: ",
                                        name
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Size: ",
                                        sizeState
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Price: ",
                                        price?.toFixed?.(2),
                                        " PLN"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "How many: ",
                                        howMany
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "Total: ",
                                        totalPrice,
                                        " PLN"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__.CgClose, {
                            style: styles.close,
                            onClick: removeFromCart,
                            className: "GreenBTN"
                        })
                    ]
                });
            }
        });
    }
}


/***/ })

};
;