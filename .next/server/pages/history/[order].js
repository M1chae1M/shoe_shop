"use strict";
(() => {
var exports = {};
exports.id = 3052;
exports.ids = [3052,2888,2197,5101,130,1861,5310,1298,8511,5243,3183,7192,6432,9515,7428,6968,7281,5580,8998,149];
exports.modules = {

/***/ 3744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_WithAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8519);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1604);
/* harmony import */ var _OrderTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9988);






async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    order: "15"
                }
            }
        ],
        fallback: true
    };
}
async function getStaticProps(context) {
    const { order  } = context.params;
    return {
        props: {
            order
        }
    };
}
let task;
class Order extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        this.fetchOrder(this);
    }
    componentDidUpdate() {
        this.fetchOrder(this);
        if (task) clearTimeout(task);
        task = setTimeout(()=>{
            if (this.state.data.length < 1) {
                next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/profile");
            }
        }, 1000);
    }
    shouldComponentUpdate(prevProps, prevState) {
        const condition1 = JSON.stringify(prevState.data) !== JSON.stringify(this.state.data);
        const condition2 = this.props.order !== prevProps.order;
        if (condition1 || condition2) return true;
        return false;
    }
    fetchOrder(comp) {
        (async function() {
            if (localStorage?.getItem("token")) {
                const { order  } = comp.props;
                const token = await localStorage.getItem("token");
                // const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}order/${order}`,{
                //   method:'POST',
                //   headers:{'Content-Type':'application/json'},
                //   body:JSON.stringify({token})
                // })
                const res = await fetch(`${"http://localhost:3000/api/"}order`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        token,
                        order
                    })
                }).then((res)=>res.json()).then(({ data  })=>comp.setState({
                        data: data
                    }));
            }
        })();
    }
    render() {
        const { data  } = this.state;
        const order_cart = data?.order_cart ? JSON.parse(data.order_cart) : [];
        const order_date = new Date(data.date).toLocaleString();
        const totalPrice = (order_cart ? order_cart?.reduce((acc, elem)=>acc + elem.price * elem.howMany, 0) : 0).toFixed(2);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: // order_date!=='Invalid Date'?
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
                order_date: order_date,
                data: data,
                order_cart: order_cart,
                totalPrice: totalPrice
            })
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            data: []
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_WithAuth__WEBPACK_IMPORTED_MODULE_2__["default"])(Order));


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

/***/ 5774:
/***/ ((module) => {

module.exports = require("react-icons/hi2");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,7069,8117,8519,9988], () => (__webpack_exec__(3744)));
module.exports = __webpack_exports__;

})();