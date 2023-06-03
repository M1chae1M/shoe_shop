"use strict";
(() => {
var exports = {};
exports.id = 8626;
exports.ids = [8626,6241];
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

/***/ 8776:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _connectionWithDB = __webpack_require__(2961);
const _authPromise = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(6850));
module.exports = (req, res)=>{
    const { order  } = req.body;
    (0, _authPromise.default)(req, res).then(({ data , login  })=>{
        if (data?.length > 0) {
            const query = `SELECT * FROM orders WHERE user="${login}" AND id='${order}'`;
            _connectionWithDB.connection.query(query, (err, data)=>{
                if (data.length > 0) res.status(200).json({
                    data: data[0],
                    message: ""
                });
                else res.status(200).json({
                    data: [],
                    message: "no orders"
                });
            });
        } else res.status(401).json({
            data: [],
            message: "no orders"
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
var __webpack_exports__ = __webpack_require__.X(0, [6850], () => (__webpack_exec__(8776)));
module.exports = __webpack_exports__;

})();