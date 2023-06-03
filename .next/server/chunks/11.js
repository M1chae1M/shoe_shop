"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 11:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8117);
/* harmony import */ var _ProductsGridField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9303);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6004);
/* harmony import */ var _SmallComponents_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2304);






class ProductsList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const styles = {
            ProductsList: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 120px))",
                gridAutoRows: "min-content",
                padding: "6px",
                minWidth: "60%",
                gridColumnGap: "6px",
                gridRowGap: "6px",
                width: "fit-content",
                minHeight: `calc(${_app__WEBPACK_IMPORTED_MODULE_4__.glbl._field_height} * 3 + 4 * 4px)`,
                maxHeight: `calc(${_app__WEBPACK_IMPORTED_MODULE_4__.glbl._field_height} * 3 + 4 * 4px)`,
                height: "fit-content",
                position: "relative"
            },
            loading: {
                position: "absolute",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: "auto"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: styles.ProductsList,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_2__.Store.Consumer, {
                children: (value)=>{
                    const { products , order , sex , type  } = value ?? {};
                    let sorted = (()=>{
                        switch(order){
                            case "cheapest":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.price.asc(products);
                                }
                            case "expensive":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.price.dsc(products);
                                }
                            case "AtoZ":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.name.asc(products);
                                }
                            case "ZtoA":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.name.dsc(products);
                                }
                            case "quantityDsc":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.quantity.asc(products);
                                }
                            case "quantityAsc":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.quantity.dsc(products);
                                }
                            default:
                                {
                                    return products;
                                }
                        }
                        ;
                    })();
                    sorted = (()=>{
                        switch(sex){
                            case "man":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.types.sex(sorted, sex);
                                }
                            case "woman":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.types.sex(sorted, sex);
                                }
                            default:
                                {
                                    return sorted;
                                }
                        }
                    })();
                    sorted = (()=>{
                        switch(type){
                            case "sport":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.types.type(sorted, type);
                                }
                            case "casual":
                                {
                                    return _app__WEBPACK_IMPORTED_MODULE_4__.sort.types.type(sorted, type);
                                }
                            default:
                                {
                                    return sorted;
                                }
                        }
                    })();
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: products?.length > 0 ? sorted?.map(({ image , id  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductsGridField__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                id: id,
                                src: image
                            }, id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: styles.loading,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                        })
                    });
                }
            })
        });
    }
}


/***/ })

};
;