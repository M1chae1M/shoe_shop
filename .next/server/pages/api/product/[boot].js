"use strict";
(() => {
var exports = {};
exports.id = 3174;
exports.ids = [3174,7226];
exports.modules = {

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

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

/***/ 7765:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _connectionWithDB = __webpack_require__(2961);
module.exports = (req, res)=>{
    const { method  } = req;
    if (method === "GET") {
        const { boot  } = req.query;
        const query = `SELECT * FROM products where id='${boot}'`;
        _connectionWithDB.connection.query(query, (err, resp)=>{
            res.status(200).json({
                resp: resp[0]
            });
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
var __webpack_exports__ = (__webpack_exec__(7765));
module.exports = __webpack_exports__;

})();