exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 2581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ RedButton),
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4043);
/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ children, href, className, onClick, download })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: `${(_button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${className}`,
        href: href,
        onClick: onClick,
        download: download,
        children: children
    });
};
const RedButton = ({ children, href, className, onClick, download })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: `${(_button_module_css__WEBPACK_IMPORTED_MODULE_1___default().red)} ${(_button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${className}`,
        href: href,
        onClick: onClick,
        download: download,
        children: children
    });
};


/***/ }),

/***/ 5785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DownArrowSVG)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function DownArrowSVG() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "40",
        height: "40",
        viewBox: "-6 -9 12 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M1-1 5-5C6-6 5-7 4-6L1-3C0-2 0-2-1-3L-4-6C-5-7-6-6-5-5L-1-1C0 0 0 0 1-1",
            fill: "currentColor"
        })
    });
}


/***/ }),

/***/ 4043:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "button_button__TIoc7",
	"red": "button_red__Q5Ye3"
};


/***/ })

};
;