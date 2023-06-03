"use strict";
exports.id = 9303;
exports.ids = [9303];
exports.modules = {

/***/ 9303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductsGridField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8117);
/* harmony import */ var _SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7069);
/* harmony import */ var _SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2639);
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4845);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6004);
/* harmony import */ var _SmallComponents_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2304);









class ProductsGridField extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { openModal  } = this.state;
        const { src , id  } = this.props;
        const styles = {
            field: {
                transition: "all 0.125s ease-in-out"
            },
            hide: {
                display: "none"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_3__.Store.Consumer, {
            children: (value)=>{
                const { saveToLocalStorage , products  } = value ?? {};
                const acObj = products?.filter((x)=>x.id === id)?.[0];
                const { name , image , price , quantity  } = acObj ?? "";
                const sizes = acObj?.sizes?.split(",");
                const closeModal = (e)=>{
                    e.preventDefault();
                    this.setState({
                        openModal: false
                    });
                };
                const addToCart = (e, newHowMany, newSize)=>{
                    if (newHowMany > 0) {
                        const addToCart = {
                            id,
                            name,
                            image,
                            price,
                            howMany: newHowMany,
                            sizeState: newSize,
                            time: new Date().getTime()
                        };
                        saveToLocalStorage(e, addToCart);
                    }
                };
                const showModal = (e)=>{
                    e.preventDefault();
                    this.setState({
                        openModal: true
                    });
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `products/${id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "field",
                                style: styles.field,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    src: src,
                                    alt: `photo of boots with id: ${id}`,
                                    x: _app__WEBPACK_IMPORTED_MODULE_7__.glbl._field_height,
                                    y: _app__WEBPACK_IMPORTED_MODULE_7__.glbl._field_height,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        value: "Add to cart",
                                        onClick: showModal,
                                        className: "addBTN",
                                        hidden: true
                                    })
                                })
                            })
                        }),
                        openModal && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            quantity: quantity,
                            sizes: sizes,
                            closeModal: closeModal,
                            addToCart: addToCart
                        })
                    ]
                });
            }
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            openModal: false
        };
    }
}


/***/ })

};
;