"use strict";
(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994,6241,7226,368,9116];
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

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connection": () => (/* binding */ connection)
/* harmony export */ });
/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7993);
/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);

const connection = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


/***/ }),

/***/ 1694:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _mysql2 = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(7993));
const _connectionWithDB = __webpack_require__(2961);
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(9344));
const _verificationKey = __webpack_require__(4440);
const _loginQuery = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(351));
module.exports = (req, res)=>{
    const { body  } = req;
    const { login , password  } = body;
    const query = (0, _loginQuery.default)(login, password);
    _connectionWithDB.connection.query(query, (err, data)=>{
        if (err) {
            console.error(err);
        } else {
            if (data.length > 0) {
                const { img  } = data[0];
                const token = _jsonwebtoken.default.sign({
                    login,
                    password
                }, _verificationKey.verificationKey);
                res.status(200).json({
                    login,
                    logged: true,
                    token,
                    img,
                    message: ""
                });
            } else res.status(401).json({
                logged: false,
                message: "Failed login! Try again!"
            });
        }
    });
};


/***/ }),

/***/ 351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginQuery)
/* harmony export */ });
function loginQuery(login, password) {
    return `SELECT * FROM users WHERE login="${login}" AND password=SHA2("${password}",256)`;
}


/***/ }),

/***/ 4440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verificationKey": () => (/* binding */ verificationKey)
/* harmony export */ });
const verificationKey = process.env.VERIFICATION_KEY;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1694));
module.exports = __webpack_exports__;

})();