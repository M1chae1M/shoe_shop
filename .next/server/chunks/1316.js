"use strict";
exports.id = 1316;
exports.ids = [1316];
exports.modules = {

/***/ 1316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8117);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9130);





class TopFilters extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const styles = {
            TopFilters: {
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                margin: "5px 0px"
            }
        };
        const types = [
            "all",
            "sport",
            "casual"
        ];
        const sexes = [
            "All",
            "Man",
            "Woman"
        ];
        const order = [
            {
                value: "cheapest",
                text: "from the cheapest"
            },
            {
                value: "expensive",
                text: "from the most expensive"
            },
            {
                value: "AtoZ",
                text: "A to Z"
            },
            {
                value: "ZtoA",
                text: "Z to A"
            },
            {
                value: "quantityDsc",
                text: "quantity descending"
            },
            {
                value: "quantityAsc",
                text: "quantity ascending"
            }
        ];
        const changeURL = (newURL)=>{
            const key = Object.keys(newURL);
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push({
                pathname: "/",
                query: {
                    ...(next_router__WEBPACK_IMPORTED_MODULE_3___default().query),
                    [key]: newURL[key]
                }
            });
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_2__.Store.Consumer, {
            children: (value)=>{
                const { changeState , sex , type  } = value ?? {};
                const onChange = (e, key)=>{
                    const value = e.target.value.toLowerCase();
                    changeState({
                        [key]: value
                    });
                    changeURL({
                        [key]: value
                    });
                };
                const changeOrder = (e)=>changeState({
                        order: e.target.value
                    });
                const sexSelectCValue = sex?.charAt?.(0).toUpperCase() + sex?.slice?.(1);
                const allOptionCs = order.map(({ value , text  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__.OptionC, {
                        value: value,
                        children: text
                    }, text));
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: styles.TopFilters,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "order",
                            children: [
                                "Order by: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    onChange: changeOrder,
                                    children: allOptionCs
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "sex",
                            children: [
                                "Sex: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    value: sexSelectCValue,
                                    onChange: (e)=>{
                                        onChange(e, "sex");
                                    },
                                    children: sexes.map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__.OptionC, {
                                            value: x,
                                            children: x
                                        }, x))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "types",
                            children: [
                                "Types: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    value: type,
                                    onChange: (e)=>{
                                        onChange(e, "type");
                                    },
                                    children: types.map((kind)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_4__.OptionC, {
                                            value: kind,
                                            children: kind
                                        }, kind))
                                })
                            ]
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