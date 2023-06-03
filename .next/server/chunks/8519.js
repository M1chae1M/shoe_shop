"use strict";
exports.id = 8519;
exports.ids = [8519];
exports.modules = {

/***/ 8519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WithAuth = (ToWrap)=>{
    return class Login extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        componentDidMount() {
            const token = localStorage.getItem("token");
            fetch(`${"http://localhost:3000/api/"}auth`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token
                })
            }).then((res)=>res.json()).then((res)=>{
                const { logged , login , token , img  } = res;
                this.setState({
                    logged,
                    login,
                    token,
                    img
                });
            });
        }
        render() {
            const { logged , login , token , img  } = this.state;
            const resetLoggedState = ()=>this.setState({
                    logged: false,
                    login: "",
                    token: "",
                    img: ""
                });
            const changeAuthState = (newState)=>this.setState(newState);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToWrap, {
                profile: {
                    login,
                    token,
                    img,
                    resetLoggedState
                },
                changeAuthState: changeAuthState,
                logged: logged,
                ...this.props
            });
        }
        constructor(...args){
            super(...args);
            this.state = {
                logged: false
            };
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithAuth);


/***/ })

};
;