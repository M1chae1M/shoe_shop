"use strict";
exports.id = 7069;
exports.ids = [7069];
exports.modules = {

/***/ 7069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImgFrame)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2304);



const imgref = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
class ImgFrame extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        imgref?.current && this.loadIMG(this);
    }
    loadIMG(comp) {
        comp.setState({
            loading: false
        });
    }
    render() {
        const { loading  } = this.state;
        const { src , alt , children , className , x , y , id , endloading , shadow  } = this.props;
        const styles = {
            ImgFrame: {
                height: y,
                width: x,
                overflow: "hidden",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                textDecoration: "none",
                color: "black",
                position: "relative",
                boxShadow: "2px 2px grey, -2px -2px grey",
                justifyItems: "center",
                transition: "all 0.125s ease-in-out"
            },
            img: {
                height: y
            },
            hidden: {
                display: "none"
            }
        };
        const onLoad = ()=>{
            this.loadIMG(this);
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                ...styles.ImgFrame,
                ...shadow
            },
            id: id,
            children: [
                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    ref: imgref,
                    src: src,
                    alt: alt,
                    onLoad: onLoad,
                    style: {
                        ...styles.img,
                        ...loading ? styles.hidden : {}
                    }
                }),
                children
            ]
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            loading: true
        };
    }
}


/***/ }),

/***/ 2304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);



class Spinner extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const styles = {
            spinner: {
                fontSize: "35px",
                animation: "spin 1s ease-in-out infinite"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiLoaderCircle, {
            style: styles.spinner
        });
    }
}


/***/ })

};
;