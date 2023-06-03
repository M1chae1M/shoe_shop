"use strict";
(() => {
var exports = {};
exports.id = 9190;
exports.ids = [9190,2888,2197,130,5101,1861,1298,8511,5243,5310,7192,6432,3183,9515,7428,7281,6968,5580,149];
exports.modules = {

/***/ 4978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8117);
/* harmony import */ var _InCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1595);
/* harmony import */ var _SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2639);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HOC_WithAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8519);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4143);









class OpenCart extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const styles = {
            cart: {
                display: "grid",
                justifyItems: "center",
                alignContent: "center"
            },
            cartList: {
                overflowY: "scroll"
            },
            size: {
                maxHeight: "300px",
                minHeight: "300px",
                height: "300px"
            },
            empty: {
                display: "grid",
                width: "100%",
                height: "100%",
                justifyItems: "center",
                alignItems: "center"
            },
            total: {
                width: "300px",
                textAlign: "center"
            },
            header: {
                fontSize: "1.2rem",
                fontWeight: "bold"
            },
            hidden: {
                display: "none"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_2__.Store.Consumer, {
            children: (value)=>{
                const { cart , profile , changeState  } = value ?? {};
                const { token  } = profile ?? {};
                const totalPaid = cart.reduce((acc, elem)=>acc + elem.price * elem.howMany, 0).toFixed(2);
                const addToOrders = ()=>{
                    if (token) {
                        fetch(`${"http://localhost:3000/api/"}order/add`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                token,
                                cart
                            })
                        }).then(localStorage.removeItem("cart")).then(changeState({
                            cart: []
                        }));
                    } else next_router__WEBPACK_IMPORTED_MODULE_7___default().push("/profile");
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: styles.cart,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                ...styles.header
                            },
                            children: "Cart"
                        }),
                        cart.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        ...styles.cartList,
                                        ...styles.size
                                    },
                                    children: cart?.map(({ time , ...x })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InCart__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            data: x,
                                            cart: cart
                                        }, time))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: styles.total,
                                    children: [
                                        "Total to be paid: ",
                                        totalPaid,
                                        " PLN",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            value: "PAY",
                                            className: "GreenBTN",
                                            onClick: addToOrders
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: styles.size,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: styles.empty,
                                        children: "Your cart is empty"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: styles.total,
                                    children: [
                                        "First you need to add your orders to the cart",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                value: "Back to shop",
                                                className: "GreenBTN"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                });
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_WithAuth__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_HOC_HOC__WEBPACK_IMPORTED_MODULE_2__["default"])(OpenCart))));


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
var __webpack_exports__ = __webpack_require__.X(0, [1664,7069,8117,2639,8519,1595], () => (__webpack_exec__(4978)));
module.exports = __webpack_exports__;

})();