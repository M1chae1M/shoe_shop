"use strict";
exports.id = 9406;
exports.ids = [9406];
exports.modules = {

/***/ 9406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const loginRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
const passwordRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
const WithLogin = (ToWrap)=>{
    return class Login extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
        componentDidUpdate(prevProps, prevState) {
            if (this.props.logged !== prevProps.logged) this.setState({
                logged: this.props.logged
            });
            return null;
        }
        render() {
            const { message , logged  } = this.state;
            const { changeAuthState  } = this.props;
            const styles = {
                submit: {
                    fontWeight: "bold",
                    margin: "0px 3px",
                    padding: "3px 3px",
                    borderRadius: "5px",
                    border: "solid black 2px",
                    boxShadow: "2px 2px grey"
                },
                failed: {
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                    minHeight: "45px",
                    maxHeight: "45px"
                }
            };
            const tryToLogIn = (e)=>{
                e.preventDefault();
                fetch(`${"http://localhost:3000/api/"}login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        login: loginRef.current.value,
                        password: passwordRef.current.value
                    })
                }).then((res)=>res.json()).then((res)=>{
                    const { message , token , logged , login , img  } = res;
                    if (token) localStorage.setItem("token", token);
                    this.setState({
                        message: message,
                        logged: logged
                    });
                    changeAuthState({
                        login,
                        logged,
                        token,
                        img
                    });
                });
            };
            const signIn = (e)=>{
                fetch(`${"http://localhost:3000/api/"}signIn`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        login: loginRef.current.value,
                        password: passwordRef.current.value
                    })
                }).then((res)=>res.json()).then((res)=>{
                    const { message  } = res;
                    this.setState({
                        message: message
                    });
                });
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: !logged ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: tryToLogIn,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ref: loginRef,
                            type: "text",
                            placeholder: "login",
                            style: styles.submit,
                            className: "login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ref: passwordRef,
                            type: "password",
                            placeholder: "password",
                            style: styles.submit,
                            className: "login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "submit",
                            value: "Login",
                            style: styles.submit,
                            className: "login"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "button",
                            value: "sign in",
                            style: styles.submit,
                            onClick: signIn
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: styles.failed,
                            children: message
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToWrap, {
                    ...this.props
                })
            });
        }
        constructor(...args){
            super(...args);
            this.state = {
                logged: this.props.logged,
                message: ""
            };
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithLogin);


/***/ })

};
;