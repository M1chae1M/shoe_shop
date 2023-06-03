"use strict";
exports.id = 9988;
exports.ids = [9988];
exports.modules = {

/***/ 9988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7069);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5774);
/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8117);
/* harmony import */ var _HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4143);







class OrderTable extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { order_date , data , order_cart , totalPrice  } = this.props;
        const styles = {
            backBTN: {
                cursor: "pointer",
                top: "0%",
                left: "0%",
                position: "absolute",
                color: "black",
                fontSize: "18px",
                transition: "all 0.125s ease-in-out",
                fontWeight: "bold"
            },
            table: {
                table: {
                    textAlign: "center"
                },
                td: {
                    border: "solid black 1px",
                    padding: "5px"
                },
                tr: {
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.125s ease-in-out"
                }
            },
            product: {
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                gridTemplateColumns: "70px auto",
                border: "solid black 1px",
                margin: "3px 0px",
                padding: "5px 3px"
            },
            productList: {
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                minHeight: "110px",
                maxHeight: "130px",
                overflowY: "scroll",
                overflowY: "auto",
                padding: "0px 3px",
                width: "fit-content"
            },
            order: {
                position: "relative",
                padding: "18px"
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: styles.order,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/profile",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiOutlineArrowUturnLeft, {
                        style: styles.backBTN,
                        id: "backBTN"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    style: styles.table.table,
                    cellSpacing: 1,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: "State"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: "Order"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: "Total"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                style: styles.table.tr,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: order_date
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: data.state
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: styles.productList,
                                            children: order_cart.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: styles.product,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            src: x.image,
                                                            alt: `image of ${x.name}`,
                                                            x: "60px",
                                                            y: "40px"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                x.howMany,
                                                                " * ",
                                                                x.price
                                                            ]
                                                        })
                                                    ]
                                                }, i))
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        style: styles.table.td,
                                        children: [
                                            totalPrice,
                                            " PLN"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_ProductsHOC__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_HOC_HOC__WEBPACK_IMPORTED_MODULE_5__["default"])(OrderTable)));


/***/ })

};
;