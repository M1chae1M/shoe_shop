"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277,2888,2197,130,5101,1861,1298,8511,5243,5310,7192,6432,3183,9515,7428,7281,6968,5580,149];
exports.modules = {

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/HOC/HOC.js
var HOC = __webpack_require__(8117);
// EXTERNAL MODULE: ./pages/HOC/WithAuth.js
var WithAuth = __webpack_require__(8519);
// EXTERNAL MODULE: ./pages/login/WithLogin.js
var WithLogin = __webpack_require__(9406);
;// CONCATENATED MODULE: external "react-icons/tb"
const tb_namespaceObject = require("react-icons/tb");
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./pages/profile/OrdersList.js
var OrdersList = __webpack_require__(7240);
// EXTERNAL MODULE: ./pages/HOC/ProductsHOC.js
var ProductsHOC = __webpack_require__(4143);
;// CONCATENATED MODULE: ./pages/profile/index.js










class Profile extends external_react_.Component {
    render() {
        const { profile  } = this.props;
        const { login  } = profile;
        const styles = {
            ProfileLogged: {
                display: "grid",
                position: "relative",
                width: "80vw",
                height: "80vh",
                alignItems: "center",
                gridTemplateRows: "15% 85%"
            },
            logout: {
                cursor: "pointer",
                fontSize: _app.glbl._height,
                position: "absolute",
                right: "0%",
                top: "0%",
                transition: "all 0.125s ease-in-out"
            },
            bold: {
                fontWeight: "bold"
            }
        };
        return /*#__PURE__*/ jsx_runtime_.jsx(HOC.Store.Consumer, {
            children: (value)=>{
                const { changeState , profile  } = value ?? {};
                const { resetLoggedState , token  } = profile ?? {};
                const logOut = ()=>{
                    localStorage.removeItem("token");
                    localStorage.removeItem("cart");
                    resetLoggedState();
                };
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: styles.ProfileLogged,
                    id: "ProfileLogged",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "You are login as: ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    style: styles.bold,
                                    children: login
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(tb_namespaceObject.TbLogout, {
                                    className: "logout",
                                    style: styles.logout,
                                    onClick: logOut
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(OrdersList["default"], {
                            token: token
                        })
                    ]
                });
            }
        });
    }
}
/* harmony default export */ const profile = ((0,WithAuth["default"])((0,ProductsHOC["default"])((0,HOC["default"])((0,WithLogin["default"])(Profile)))));


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,7069,8117,8519,9406,7240], () => (__webpack_exec__(365)));
module.exports = __webpack_exports__;

})();