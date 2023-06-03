"use strict";
exports.id = 6850;
exports.ids = [6850,368,9116];
exports.modules = {

/***/ 6850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var _connectionWithDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2961);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verificationKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4440);
/* harmony import */ var _loginQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(351);




function auth(req, res) {
    const { body  } = req;
    const { token  } = body;
    if (token) {
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().decode(token, _verificationKey__WEBPACK_IMPORTED_MODULE_2__.verificationKey);
        const { login , password  } = decoded ?? "";
        const query = (0,_loginQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(login, password);
        return new Promise((resolve, reject)=>{
            _connectionWithDB__WEBPACK_IMPORTED_MODULE_0__.connection.query(query, (err, data)=>{
                if (err) reject(err);
                else if (data?.length > 0) resolve({
                    data,
                    login,
                    token
                });
                else resolve({
                    data: [],
                    login,
                    token
                });
            });
        });
    } else return Promise.resolve([]);
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