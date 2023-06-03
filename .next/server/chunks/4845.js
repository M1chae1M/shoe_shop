"use strict";
exports.id = 4845;
exports.ids = [4845];
exports.modules = {

/***/ 4845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2639);
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7505);
/* harmony import */ var _SmallComponents_Number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(744);
/* harmony import */ var _SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9130);






class Modal extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { howMany , size  } = this.state;
        const { quantity , sizes , closeModal , addToCart  } = this.props;
        const styles = {
            Modal: {
                display: "grid",
                color: "white"
            },
            background: {
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                position: "fixed",
                top: "0%",
                left: "0%",
                background: "rgb(128 128 128 / 60%)",
                width: "100vw",
                height: "100vh",
                zIndex: "2000"
            },
            change: {
                display: "grid",
                gridAutoFlow: "column",
                alignItems: "center"
            }
        };
        const changeHowMany = (change)=>{
            const value = howMany + change;
            if (value <= quantity && value > 0) this.setState({
                howMany: value
            });
        };
        const addAndClose = (e)=>{
            closeModal(e);
            addToCart(e, howMany, size);
        };
        const clickModal = (e)=>e.target.id === "Background" && closeModal(e);
        const onChange = (e)=>this.setState({
                size: e.target.value
            });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Background__WEBPACK_IMPORTED_MODULE_3__["default"], {
            bgc: "rgb(128 128 128/60%)",
            zidx: "2000",
            onMouseDown: clickModal,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: styles.Modal,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: styles.change,
                        children: [
                            "How many: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_Number__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                value: howMany,
                                onChange: changeHowMany
                            }),
                            " Size: ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                value: size,
                                onChange: onChange,
                                className: "GreenBTN",
                                children: sizes?.map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_5__.OptionC, {
                                        value: x,
                                        children: x
                                    }, x))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        value: "Add to cart",
                        onClick: addAndClose,
                        className: "GreenBTN"
                    })
                ]
            })
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            howMany: 0,
            size: this.props.sizes?.[0]
        };
    }
}


/***/ })

};
;