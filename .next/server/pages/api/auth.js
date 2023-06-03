"use strict";
(() => {
var exports = {};
exports.id = 2508;
exports.ids = [2508,6241];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ 6328:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 6273:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _authPromise = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(6850));
module.exports = (req, res)=>{
    (0, _authPromise.default)(req, res).then(({ data , login , token  })=>{
        if (data?.length > 0) {
            const { img  } = data[0];
            res.status(200).json({
                login,
                logged: true,
                img,
                token
            });
        } else res.status(200).json({
            logged: false
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6850], () => (__webpack_exec__(6273)));
module.exports = __webpack_exports__;

})();