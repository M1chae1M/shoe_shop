"use strict";
(() => {
var exports = {};
exports.id = 6331;
exports.ids = [6331,2888,2197,130,5101,1861,1298,8511,5243,5310,7192,6432,3183,9515,7428,7281,6968,5580,149];
exports.modules = {

/***/ 4865:
/***/ ((module) => {


module.exports = {
    env: {
        API_READY: false
    }
};


/***/ }),

/***/ 8293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4865);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6544);
/* harmony import */ var _HOC_HOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8117);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6004);
/* harmony import */ var _SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7069);
/* harmony import */ var _SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2639);
/* harmony import */ var _SmallComponents_Number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(744);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9130);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_3__]);
node_fetch__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












async function getStaticPaths() {
    if (!_config__WEBPACK_IMPORTED_MODULE_2__.API_READY) {
        return {
            paths: [],
            fallback: "blocking"
        };
    }
    const paths = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])(`${"http://localhost:3000/api/"}product/all`).then((res)=>res.json()).then((res)=>{
        return res.resp?.map((product)=>({
                params: {
                    boot: product.id.toString()
                }
            }));
    });
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps(ctx) {
    const { boot  } = ctx.params;
    // const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}product/${boot}`,{
    //   method:'GET',
    //   headers:{'Content-Type':'application/json'},
    // })
    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_3__["default"])(`${"http://localhost:3000/api/"}product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            boot
        })
    }).then((res)=>res.json()).then((resp)=>resp.resp);
    const data = res;
    return {
        props: {
            data
        }
    };
}
class Boot extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        const { data  } = this.props;
        const { id , image , sex , description , category , name , price , quantity , sizes  } = data;
        const { sizeState , howMany  } = this.state;
        const styles = {
            Product: {
                width: "70vw",
                padding: "5px",
                display: "grid",
                justifyItems: "center",
                alignItems: "center"
            },
            btn: {
                width: "fit-content",
                padding: "5px"
            },
            description: {
                width: _app__WEBPACK_IMPORTED_MODULE_5__.glbl._width,
                padding: "5px"
            },
            path: {
                padding: "5px"
            },
            Link: {
                color: "black",
                textDecoration: "none"
            },
            change: {
                display: "grid",
                gridAutoFlow: "column",
                justifyItems: "center",
                alignItems: "center"
            }
        };
        const changeHowMany = (change)=>{
            const value = howMany + change;
            if (value <= quantity && value > 0) {
                this.setState({
                    howMany: value
                });
            }
        };
        const addToCartNewBoot = ()=>{
            next_router__WEBPACK_IMPORTED_MODULE_9___default().push("/");
            return {
                id,
                name,
                image,
                price,
                howMany,
                sizeState,
                time: new Date().getTime()
            };
        };
        const onChange = (e)=>this.setState({
                sizeState: e.target.value
            });
        const links = [
            {
                href: "/",
                text: "Boots > "
            },
            {
                href: `/?sex=${sex}`,
                text: `${sex} > `
            },
            {
                href: `/?type=${category}`,
                text: `${category} > `
            },
            {
                href: `/products/${id}`,
                text: name
            }
        ];
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HOC_HOC__WEBPACK_IMPORTED_MODULE_4__.Store.Consumer, {
            children: (value)=>{
                const { saveToLocalStorage  } = value ?? {};
                const addToCart = (e)=>{
                    saveToLocalStorage(e, addToCartNewBoot());
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: styles.Product,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: styles.path,
                            children: links.map(({ href , text  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    style: styles.Link,
                                    href: href,
                                    children: text
                                }, text))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_ImgFrame__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            src: image,
                            alt: "",
                            x: _app__WEBPACK_IMPORTED_MODULE_5__.glbl._img_height,
                            y: _app__WEBPACK_IMPORTED_MODULE_5__.glbl._img_height
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: styles.description,
                            children: description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: styles.path,
                            children: [
                                "Price: ",
                                price,
                                " PLN"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: styles.path,
                            children: [
                                "Sizes: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                    value: sizeState,
                                    onChange: onChange,
                                    className: "GreenBTN",
                                    children: sizes.split(",").map((x)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_SelectC__WEBPACK_IMPORTED_MODULE_10__.OptionC, {
                                            value: x,
                                            children: x
                                        }, x))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: styles.path,
                            children: [
                                "Available quantity: ",
                                quantity
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                ...styles.path,
                                ...styles.change
                            },
                            children: [
                                "how many boots you need?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_Number__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                    value: howMany,
                                    onChange: changeHowMany
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: styles.btn,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmallComponents_GreenBTN__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                value: "Add to cart",
                                onClick: addToCart,
                                className: "GreenBTN"
                            })
                        })
                    ]
                });
            }
        });
    }
    constructor(...args){
        super(...args);
        this.state = {
            sizeState: this.props?.data?.sizes.split(",")[0] || "0",
            howMany: 1
        };
    }
}
// export default Boot;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_HOC__WEBPACK_IMPORTED_MODULE_4__["default"])(Boot));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,7069,8117,2639,9130,744], () => (__webpack_exec__(8293)));
module.exports = __webpack_exports__;

})();