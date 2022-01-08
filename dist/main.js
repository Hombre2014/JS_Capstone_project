/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto, sans serif';\\n  src: url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Roboto', sans-serif;\\n  background-color: #b3dadb;\\n}\\n\\n.header-section {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: -0.5rem;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0.5rem;\\n}\\n\\n.botHeader {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n\\n.menuItems {\\n  list-style: none;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 40%;\\n  margin-right: 1rem;\\n  font-family: 'Roboto', sans-serif;\\n  font-weight: 600;\\n  font-size: 1.25rem;\\n}\\n\\n.logo {\\n  width: 150px;\\n  border-radius: 50%;\\n  margin-left: 1rem;\\n}\\n\\n.Shows {\\n  display: grid;\\n  gap: 12px;\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  padding: 1rem;\\n}\\n\\n.movie {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 1px solid #000;\\n  padding-bottom: 1rem;\\n}\\n\\n.movie-title {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.movie-image {\\n  width: 90%;\\n}\\n\\n.userInterAct {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: 0.5rem;\\n  width: 90%;\\n}\\n\\n.likesCont {\\n  display: flex;\\n  align-items: baseline;\\n}\\n\\n.fa-heart {\\n  margin-right: 0.5rem;\\n  cursor: pointer;\\n}\\n\\n.fa-heart:hover {\\n  color: #f00;\\n  transform: scale(1.25);\\n  transition: all 0.5s;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  top: 5%;\\n  left: 5%;\\n  border-radius: 10px;\\n  overflow: scroll;\\n}\\n\\n.show-container {\\n  padding: 1rem;\\n  background-color: #72a0a1;\\n}\\n\\n.close-btn {\\n  display: flex;\\n  justify-content: flex-end;\\n  color: #f00;\\n  font-size: 35px;\\n  font-weight: 700;\\n  cursor: pointer;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.show-info {\\n  display: flex;\\n  column-gap: 2rem;\\n  padding-right: 2rem;\\n}\\n\\n.details > h1 {\\n  margin-top: 0;\\n}\\n\\n.meta {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.meta span {\\n  font-weight: bold;\\n}\\n\\n.left-side,\\n.right-side {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 1rem;\\n}\\n\\n.comments-section {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#form {\\n  display: flex;\\n  flex-direction: column;\\n  width: 30%;\\n}\\n\\ninput,\\ntextarea {\\n  border: solid 2px #000;\\n  padding: 10px;\\n  font-family: 'Roboto', sans-serif;\\n  margin: 10px 0 0;\\n  border-radius: 6px;\\n}\\n\\n#submit-btn,\\n.comment-btn {\\n  margin-top: 1.4rem;\\n  max-width: 5rem;\\n  text-align: center;\\n  align-self: center;\\n  padding: 4px 8px;\\n  border-radius: 4px;\\n  border: 1px solid #000;\\n  background-color: #0dbae6 !important;\\n  box-shadow: 2px 2px 4px;\\n  cursor: pointer;\\n}\\n\\nbutton:hover,\\n#submit-btn:hover {\\n  background-color: #2c8ce6 !important;\\n  box-shadow: 1px 1px 2px;\\n}\\n\\n.comment-btn {\\n  margin-top: 0;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  border-top: 1px solid #000;\\n  margin-top: 4rem;\\n  padding: 0 1rem;\\n  align-items: baseline;\\n}\\n\\n.licence {\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.dev {\\n  display: flex;\\n  align-items: flex-start;\\n  align-items: baseline;\\n  gap: 1rem;\\n  padding-left: 1rem;\\n}\\n\\n.media-links {\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 20px;\\n}\\n\\n.fab {\\n  color: #2c8ce6;\\n  font-size: large;\\n  cursor: pointer;\\n}\\n\\n.fab:hover {\\n  background-color: #2c8ce6;\\n  transform: scale(1.125);\\n  transition: all 0.4s;\\n}\\n\\n#and {\\n  font-size: 1.25rem;\\n  padding-left: 1rem;\\n  font-weight: 800;\\n}\\n\\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\\n  h2 {\\n    font-size: 1.25rem;\\n    font-weight: 800;\\n  }\\n}\\n\\n@media only screen and (min-width: 320px) and (max-width: 767px) {\\n  .Shows {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-around;\\n  }\\n\\n  .menuItems {\\n    width: 80%;\\n    font-size: 1rem;\\n    font-weight: 600;\\n  }\\n\\n  h3 {\\n    font-size: 1.125rem;\\n    font-weight: 700;\\n  }\\n\\n  .dev > h3 {\\n    font-size: 1rem;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitComment\": () => (/* binding */ submitComment),\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nfunction submitComment(itemId, userName, userComment) {\n  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/comments', {\n    method: 'POST',\n    headers: { 'Content-type': 'application/json' },\n    body: JSON.stringify({ item_id: `'${itemId}'`, username: userName, comment: userComment }),\n  })\n    .then((res) => res.ok)\n    .then((data) => (data));\n}\n\nfunction displayComments(itemId) {\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/comments?item_id='${itemId}'`)\n    .then((res) => res.json())\n    .then((data) => {\n      const commentsList = document.querySelector('.comments-list');\n      for (let i = 0; i < data.length; i += 1) {\n        const singleComment = document.createElement('p');\n        singleComment.innerText = `${data[i].creation_date}, ${data[i].username}: ${data[i].comment}`;\n        singleComment.classList.add('single-comment');\n        commentsList.appendChild(singleComment);\n      }\n      const allComments = document.getElementsByClassName('single-comment');\n      const counter = allComments.length;\n      const commentsCounter = document.getElementsByClassName('comments-count');\n      commentsCounter[0].innerText = `(${counter})`;\n    });\n}\n\nfunction getComments(itemId) {\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/comments?item_id='${itemId}'`)\n    .then((res) => res.json())\n    .then((data) => {\n      const commentsList = document.querySelector('.comments-list');\n      const singleComment = document.createElement('p');\n      singleComment.innerText = `${data[itemId].creation_date}, ${data[itemId].username}: ${data[itemId].comment}`;\n      commentsList.appendChild(singleComment);\n    });\n  displayComments(itemId);\n}\n\n//# sourceURL=webpack://webpack-setup/./src/comments.js?");

/***/ }),

/***/ "./src/getLikes.js":
/*!*************************!*\
  !*** ./src/getLikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/likes');\n  const json = await response.json();\n  return json;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://webpack-setup/./src/getLikes.js?");

/***/ }),

/***/ "./src/getMovies.js":
/*!**************************!*\
  !*** ./src/getMovies.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showsList\": () => (/* binding */ showsList),\n/* harmony export */   \"popShow\": () => (/* binding */ popShow),\n/* harmony export */   \"createModal\": () => (/* binding */ createModal),\n/* harmony export */   \"getShows\": () => (/* binding */ getShows)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/getLikes.js\");\n\n\n\nconst showsList = [];\nconst frontMovies = document.querySelector('.Shows');\nconst modalPopUp = document.querySelector('.modal');\n\nconst popShow = async (arr, likeArray) => {\n  const counter = document.getElementsByClassName('movies-counter');\n  const count = likeArray.length;\n  counter[0].innerText = `(${count})`;\n  frontMovies.innerHTML = '';\n  arr.forEach((movie, index) => {\n    let eachMovie = `\n    <div class=movie id=${movie.id}>\n      <h2 class=\"movie-title\">${movie.name}</h2>\n      <img class=\"movie-image\" src=${movie.image.medium}>\n      <div class= \"userInterAct\">\n        <button class=\"comment-btn\" value=\"${movie.id}\">Comment</button>\n        <div class='likesCont'>\n          <i class=\"fas fa-heart\" data-id=${movie.id}></i>`;\n    if (likeArray[index] === undefined) {\n      eachMovie += `<p class=\"likes\"> 0 Likes</p>\n                  </div>\n                </div>\n              </div>`;\n    } else {\n      eachMovie += `<p class=\"likes\">${likeArray[index].likes} Likes</p>\n                    </div>\n                </div>\n              </div>`;\n    }\n    frontMovies.insertAdjacentHTML('beforeend', eachMovie);\n  });\n  const likeIcons = document.querySelectorAll('.fa-heart');\n  const likeContainer = document.querySelectorAll('.likes');\n  likeIcons.forEach((like, index) => {\n    like.addEventListener('click', async () => {\n      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/likes', {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: like.dataset.id,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n      likeArray[index].likes += 1;\n      likeContainer[index].innerHTML = `${likeArray[index].likes} Likes`;\n    });\n  });\n};\n\nfunction convertDate(date) {\n  const yyyy = date.getFullYear().toString();\n  const mm = (date.getMonth() + 1).toString();\n  const dd = date.getDate().toString();\n  const mmChars = mm.split('');\n  const ddChars = dd.split('');\n  return `${yyyy}-${mmChars[1] ? mm : `0${mmChars[0]}`}-${ddChars[1] ? dd : `0${ddChars[0]}`}`;\n}\n\nfunction createModal(showID) {\n  const closeBtn = document.getElementsByClassName('close-btn');\n  modalPopUp.style.display = 'block';\n  modalPopUp.style.width = '90vw';\n  modalPopUp.style.height = '90vh';\n  modalPopUp.style.backgroundColor = '#f6f6f6';\n  const content = `\n  <div class=\"show-container\">\n    <span class=\"close-btn\">×</span>\n    <div class=\"show-info\">\n      <div class=\"poster\">\n        <img src=\"${showsList[showID].image.medium}\", alt=\"movie poster\">\n      </div>\n      <div class=\"details\">\n        <h1>${showsList[showID].name}</h1>\n        <h2>Summary:</h2>\n        <p>${showsList[showID].summary}</p>\n        <div class=\"meta\">\n          <div class=\"left-side\">\n            <span>Language: ${showsList[showID].language}</span>\n            <span>Genre: ${showsList[showID].genres[0]}, ${showsList[showID].genres[1]}, ${showsList[showID].genres[2]}</span>\n          </div>\n          <div class=\"right-side\">\n            <span>Rating: ${showsList[showID].rating.average}</span>\n            <span>Premiered: ${showsList[showID].premiered}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"comments-section\">\n      <h2 class=\"comments-title\">Comments <span class=\"comments-count\" data-id=${showID + 1}></span></h2>\n      <div class=\"comments-list\"></div>\n      <h3>Add a new comment</h3>\n      <form id=\"form\" data-id=${showID + 1}>\n        <input type=\"text\" placeholder=\"Your name\" id=\"name\" data-id=${showID + 1}>\n        <textarea id=\"comment-text\" data-id=${showID + 1} placeholder=\"Your comment\" maxlength=\"500\" rows=\"4\"></textarea>\n        <button id=\"submit-btn\" type=\"submit\" data-id=${showID + 1}>Comment</button>\n      </form>\n    </div>\n  </div>\n  `;\n  modalPopUp.innerHTML = content;\n  closeBtn[0].addEventListener('click', () => {\n    modalPopUp.style.display = 'none';\n  });\n  const newPost = document.getElementById('form');\n  newPost.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const userName = document.getElementById('name').value;\n    const comment = document.getElementById('comment-text').value;\n    // Post the comment on the DOM\n    const singleComment = document.createElement('p');\n    const todaysDate = new Date();\n    const currentDate = convertDate(todaysDate);\n    singleComment.innerText = `${currentDate}, ${userName}: ${comment}`;\n    singleComment.classList.add('single-comment');\n    const commentsList = document.querySelector('.comments-list');\n    commentsList.appendChild(singleComment);\n    // Update the comments counter\n    const allComments = document.getElementsByClassName('single-comment');\n    const counter = allComments.length;\n    const commentsCounter = document.getElementsByClassName('comments-count');\n    commentsCounter[0].innerText = `(${counter})`;\n    // Submit the comment to API\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.submitComment)(`'${showID}'`, userName, comment);\n    document.getElementById('name').value = '';\n    document.getElementById('comment-text').value = '';\n  });\n  showID += 1;\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(`'${showID}'`);\n}\n\nasync function getShows() {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  for (let i = 0; i < 16; i += 1) {\n    showsList.push(data[i]);\n  }\n\n  const likeArray = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  popShow(showsList, likeArray);\n\n  const commentBtns = document.querySelectorAll('.comment-btn');\n  commentBtns.forEach((btn) => {\n    const ID = btn.value;\n    btn.addEventListener('click', () => {\n      createModal(ID - 1);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://webpack-setup/./src/getMovies.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logoImage_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logoImage.jpg */ \"./src/logoImage.jpg\");\n/* harmony import */ var _getMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMovies.js */ \"./src/getMovies.js\");\n\n\n\n\n// Adding the logo image\nconst element = document.querySelector('.logoContainer');\nconst mylogo = new Image();\nmylogo.className = 'logo';\nmylogo.src = _logoImage_jpg__WEBPACK_IMPORTED_MODULE_1__;\nelement.append(mylogo);\n\n(0,_getMovies_js__WEBPACK_IMPORTED_MODULE_2__.getShows)();\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/logoImage.jpg":
/*!***************************!*\
  !*** ./src/logoImage.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5478a81c4745fdb038db.jpg\";\n\n//# sourceURL=webpack://webpack-setup/./src/logoImage.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;