webpackHotUpdate("static/development/pages/index.js",{

/***/ "./componentes/Evento.js":
/*!*******************************!*\
  !*** ./componentes/Evento.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hacknew/version-control/react/react10Projects/bitcoinapp/componentes/Evento.js";


var Evento = function Evento(props) {
  var _props$info = props.info,
      name = _props$info.name,
      url = _props$info.url,
      description = _props$info.description;
  var titulo = name.text;

  if (titulo.length > 150) {
    titulo - titulo.substr(0, 150);
  }

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, titulo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.d8dfe4ec1cdc1260a5ea.hot-update.js.map