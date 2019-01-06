webpackHotUpdate("static/development/pages/index.js",{

/***/ "./componentes/Evento.js":
/*!*******************************!*\
  !*** ./componentes/Evento.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./componentes/Eventos.js":
/*!********************************!*\
  !*** ./componentes/Eventos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Evento */ "./componentes/Evento.js");
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Evento__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/hacknew/version-control/react/react10Projects/bitcoinapp/componentes/Eventos.js";



var Eventos = function Eventos(props) {
  var eventosId = Object.keys(props.eventos);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, eventosId.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: key,
      info: props.eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.e1012badbf84849e13a7.hot-update.js.map