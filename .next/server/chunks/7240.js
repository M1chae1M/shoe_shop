"use strict";
exports.id = 7240;
exports.ids = [7240];
exports.modules = {

/***/ 7240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrdersList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SmallComponents_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2304);




class OrdersList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        const { token  } = this.props;
        fetch(`${"http://localhost:3000/api/"}order/all`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token
            })
        }).then((res)=>res.json()).then((res)=>{
            const { data , message  } = res;
            this.setState({
                data,
                message,
                loading: false
            });
        });
    }
    render() {
        const { message , data , loading  } = this.state;
        const styles = {
            order: {
                textDecoration: "none",
                color: "black"
            },
            table: {
                table: {
                    textAlign: "center",
                    width: "80%",
                    height: "80%"
                },
                thead: {
                    position: "sticky",
                    top: "0%",
                    background: "white",
                    left: "0%"
                },
                tr: {
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.125s ease-in-out"
                },
                td: {
                    border: "solid black 1px",
                    padding: "3px"
                }
            },
            OrdersList: {
                overflowY: "auto",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                height: "80%"
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: styles.OrdersList,
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : data.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                cellSpacing: 1,
                style: styles.table.table,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        style: styles.table.thead,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            style: styles.table.tr,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: styles.table.td,
                                    children: "Id"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: styles.table.td,
                                    children: "State"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    style: styles.table.td,
                                    children: "Date"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: data.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                style: styles.table.tr,
                                className: "tr",
                                onClick: ()=>{
                                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/history/${x.id}`);
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        style: styles.table.td,
                                        children: [
                                            x.id,
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: x.state
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        style: styles.table.td,
                                        children: new Date(x.date).toLocaleString()
                                    })
                                ]
                            }, x.id))
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: message
            })
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            message: "",
            data: [],
            loading: true
        };
    }
}


/***/ })

};
;