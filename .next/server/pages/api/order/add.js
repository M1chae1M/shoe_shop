"use strict";
(() => {
var exports = {};
exports.id = 9423;
exports.ids = [9423,6241];
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

/***/ 1457:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _connectionWithDB = __webpack_require__(2961);
const _authPromise = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(6850));
const createDate = ()=>{
    const today = new Date();
    const year = today.getFullYear().toString().padStart(4, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");
    const seconds = today.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
module.exports = (req, res)=>{
    const { body , method  } = req;
    if (method === "POST") {
        const cart = JSON.stringify(body.cart);
        (0, _authPromise.default)(req, res).then(({ data , login  })=>{
            if (data.length > 0) {
                const date = createDate();
                const state = "we are waiting for the payment to be posted";
                const query = `INSERT INTO orders (id, user, order_cart, state, date) VALUES (NULL, "${login}", '${cart}', "${state}", "${date}");`;
                _connectionWithDB.connection.query(query);
            }
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6850], () => (__webpack_exec__(1457)));
module.exports = __webpack_exports__;

})();