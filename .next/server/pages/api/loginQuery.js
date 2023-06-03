"use strict";
(() => {
var exports = {};
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginQuery)
/* harmony export */ });
function loginQuery(login, password) {
    return `SELECT * FROM users WHERE login="${login}" AND password=SHA2("${password}",256)`;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(351));
module.exports = __webpack_exports__;

})();