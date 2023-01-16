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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDefaultOptions\": () => (/* binding */ getDefaultOptions),\n/* harmony export */   \"setDefaultOptions\": () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDays)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} - the new date with the days added\n * @throws {TypeError} - 2 arguments required\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\n\nfunction addDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyAmount);\n\n  if (isNaN(amount)) {\n    return new Date(NaN);\n  }\n\n  if (!amount) {\n    // If 0 days, no-op to avoid changing times in the hour before end of DST\n    return date;\n  }\n\n  date.setDate(date.getDate() + amount);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/addDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compareAsc)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @param {Date|Number} dateLeft - the first date to compare\n * @param {Date|Number} dateRight - the second date to compare\n * @returns {Number} the result of the comparison\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\n\nfunction compareAsc(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  var diff = dateLeft.getTime() - dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1; // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/compareAsc/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\n\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\n\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\n\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\n\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ subDays)\n/* harmony export */ });\n/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ \"./node_modules/date-fns/esm/addDays/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n\n\n\n/**\n * @name subDays\n * @category Day Helpers\n * @summary Subtract the specified number of days from the given date.\n *\n * @description\n * Subtract the specified number of days from the given date.\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the days subtracted\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Subtract 10 days from 1 September 2014:\n * const result = subDays(new Date(2014, 8, 1), 10)\n * //=> Fri Aug 22 2014 00:00:00\n */\n\nfunction subDays(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyAmount);\n  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dirtyDate, -amount);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/subDays/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__.UI.initializePage();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ \"./src/modules/default.js\");\n\n\n\nconst UI = (() => {\n\n    // SET UP NEW STORAGE OBJECT\n    const storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    // GENERATE DEFAULT DOM \n    (0,_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(storage.getTodoList().getProject(\"Inbox\").getName());\n\n    // SET CURRENT PROJECT TO DEFAULT (0)\n    storage.setCurrentProject(0);\n\n    // LOAD PAGE\n    const initializePage = () => {\n        initTaskButtons();\n        renderTasks();\n        initProjectButtons();\n        renderProjects();\n        DOM();\n    }\n\n    // TASK LISTENERS \n\n    const initTaskButtons = () => {\n        const addTaskBtn = document.querySelector(\".add-task-btn\");\n        const cancelTaskBtn = document.querySelector(\".cancel-btn\");\n        const taskForm = document.querySelector(\"#task-form\");\n        const taskList = document.querySelector(\".task-list\");\n\n        addTaskBtn.addEventListener(\"click\", openAddTask);\n        cancelTaskBtn.addEventListener(\"click\", closeAddTask);\n        taskForm.addEventListener(\"submit\", addTask);\n        taskList.addEventListener(\"click\", handleTask);\n    }\n\n    // TASK FUNCTIONS\n\n    const openAddTask = () => {\n        const addTaskBtn = document.querySelector(\".add-task-btn\");\n        const formDiv = document.querySelector(\".form-div\");\n        const submitBtn = document.querySelector(\".submit-btn\");\n\n        addTaskBtn.classList.add(\"active\");\n        formDiv.classList.add(\"active\");\n        submitBtn.textContent = \"Add\";\n    }\n\n    const closeAddTask = () => {\n        const addTaskBtn = document.querySelector(\".add-task-btn\");\n        const formDiv = document.querySelector(\".form-div\");\n        const taskForm = document.querySelector(\"#task-form\");\n\n        addTaskBtn.classList.remove(\"active\");\n        formDiv.classList.remove(\"active\");\n        taskForm.reset();\n    }\n\n    const addTask = (e) => {\n        e.preventDefault();\n        const projectName = document.querySelector(\".project-name\").textContent;\n        const name = document.querySelector(\"#name\").value;\n        const date = document.querySelector(\"#date\").value;\n        const submitBtn = document.querySelector(\".submit-btn\");\n        const taskForm = document.querySelector(\"#task-form\");\n\n        let projectTaskList = storage.getTodoList().getProject(projectName).getTasks();\n        const isDuplicate = projectTaskList.some((task) => task.name.toUpperCase() === name.toUpperCase());\n        \n        if (submitBtn.textContent === \"Add\") {\n            if (isDuplicate) {\n                alert(\"Tasks must have different names!\");\n                return\n            }\n            storage.addTask(projectName, name, date);            \n        } else {\n            const taskId = storage.getCurrentTask();\n            const newName = taskForm.elements.taskName.value;\n            const newDate = taskForm.elements.dueDate.value;\n            storage.renameTask(projectName, taskId, newName);\n            storage.setTaskDate(projectName, taskId, newDate);\n            storage.resetCurrentTask();\n        }\n\n        updateTasks();\n        closeAddTask();\n        renderTasks();\n    }\n\n    const editTask = (index) => {\n        const name = document.querySelector(\"#name\");\n        const date = document.querySelector(\"#date\");\n\n        name.value = storage.getTodoList().getProjects()[storage.getCurrentProject()].getTasks()[index].name;\n        date.value = storage.getTodoList().getProjects()[storage.getCurrentProject()].getTasks()[index].dueDate;\n    }\n\n    const handleTask = (e) => {\n        storage.setCurrentTask(storage.getCurrentProject(), e.target.parentNode.id);\n\n        // DELETE TASK\n        if (e.target.classList.contains(\"fa-x\")) {\n            const projectName = document.querySelector(\".project-name\").textContent;\n\n            storage.deleteTask(projectName, e.target.parentNode.id);\n            renderTasks();\n        }\n        // EDIT TASK\n        if (e.target.classList.contains(\"fa-pen-to-square\")) {            \n            const submitBtn = document.querySelector(\".submit-btn\");\n\n            editTask(e.target.parentNode.id);\n            openAddTask();\n            submitBtn.textContent = \"Edit\";\n        }\n    }\n\n    const renderTasks = () => {\n        const projectName = document.querySelector(\".project-name\").textContent;\n        const taskList = document.querySelector(\".task-list\");\n        taskList.innerHTML = \"\";\n\n        storage.getTodoList().getProject(projectName).getTasks().forEach((task, index) => {\n            taskList.innerHTML += `\n                <button class=\"task\" id=${index}>\n                         <i class=\"fa-solid fa-list-check\"></i>\n                         <p class=\"task-name\">${task.name}</p>\n                         <p class=\"task-date\">${task.dueDate}</p>\n                         <i class=\"fa-solid fa-pen-to-square\"></i>\n                         <i class=\"fa-solid fa-x\"></i>\n                 </button>`\n        })\n    }\n\n    const updateTasks = () => {\n        storage.updateTodayProject();\n        storage.updateWeekProject();\n    }\n\n    // PROJECT LISTENERS\n\n    const initProjectButtons = () => {\n        const addProjectBtn = document.querySelector(\".new-project\");\n        const cancelProjectBtn = document.querySelector(\".cancel-project\");\n        const projectForm = document.querySelector(\"#nav-form\");\n        const projectList = document.querySelector(\".project-list\");\n        const defaultProjectList = document.querySelector(\".default-options\");\n        \n        addProjectBtn.addEventListener(\"click\", openAddProject);\n        cancelProjectBtn.addEventListener(\"click\", closeAddProject);\n        projectForm.addEventListener(\"submit\", addProject);\n        projectList.addEventListener(\"click\", handleProject);\n        defaultProjectList.addEventListener(\"click\", openDefaultProjects);\n    }\n \n    // PROJECT FUNCTIONS\n\n    const openAddProject = () => {\n        const projectForm = document.querySelector(\"#nav-form\");\n        const addProjectBtn = document.querySelector(\".new-project\");\n\n        projectForm.classList.add(\"active\");\n        addProjectBtn.classList.add(\"active\");\n    }\n\n    const closeAddProject = () => {\n        const projectForm = document.querySelector(\"#nav-form\");\n        const addProjectBtn = document.querySelector(\".new-project\");\n\n        projectForm.classList.remove(\"active\");\n        addProjectBtn.classList.remove(\"active\");\n        projectForm.reset();\n    }\n\n    const addProject = (e) => {\n        e.preventDefault();\n        const projectName = document.querySelector(\"#projectName\").value;\n        storage.addProject(projectName);\n        closeAddProject();\n        renderProjects();\n    }\n\n    const handleProject = (e) => {\n        // DELETE PROJECT\n        if (e.target.classList.contains(\"fa-x\")) {\n            storage.deleteProject(e.target.parentNode.id);\n            renderProjects();\n            openProject(\"Inbox\");\n            storage.setCurrentProject(0);\n            renderTasks();\n        } else {\n            // SWITCH PROJECTS\n            const projectName = e.target.childNodes[3].textContent;\n            openProject(projectName);\n            storage.setCurrentProject(e.target.id);\n            renderTasks();\n        }\n    }\n\n    const openDefaultProjects = (e) => {\n        const projectName = e.target.childNodes[1].textContent;\n        openProject(projectName);\n        storage.setCurrentProject(e.target.id);\n        renderTasks();\n    }\n\n    const renderProjects = () => {\n        const projectList = document.querySelector(\".project-list\");\n        projectList.innerHTML = \"\";\n\n        storage.getTodoList().projects.forEach((project, index) => {\n            if (project.name !== \"Inbox\" && project.name !== \"Today\" && project.name !== \"This week\") {\n                projectList.innerHTML += `               \n                <button class=\"project\" id=${index}>\n                    <i class=\"fa-solid fa-list-check\"></i>\n                    <p class=\"task-name\">${project.name}</p>\n                    <i class=\"fa-solid fa-x\"></i>\n                </button>`\n            }\n        })\n    }\n\n    const loadProjectContent = (projectName) => {\n        const container = document.querySelector(\".top\");\n        container.innerHTML = `<h1 class=\"project-name\">${projectName}</h1>`\n        if (projectName === \"Today\" || projectName === \"This week\") {\n            const addTaskBtn = document.querySelector(\".add-task-btn\");\n            addTaskBtn.classList.add(\"active\");\n        } else {\n            const addTaskBtn = document.querySelector(\".add-task-btn\");\n            addTaskBtn.classList.remove(\"active\");\n        }\n\n        storage.getTodoList().getProject(projectName).getTasks();\n    }\n\n    const openProject = (projectName) => {\n        loadProjectContent(projectName);\n    }\n\n    // DROPDOWN -> MOBILE\n    \n    const dropDown = () => {\n        const navbar = document.querySelector(\".navbar\");\n        navbar.classList.toggle(\"active\");\n    }\n\n    const DOM = () => {\n        const dropIcon = document.querySelector(\".toggle-nav\");\n        dropIcon.addEventListener(\"click\", dropDown);\n    }\n\n    return { initializePage };\n})();\n\n//# sourceURL=webpack://todo-list/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NO_PROJECT_SELECTED\": () => (/* binding */ NO_PROJECT_SELECTED),\n/* harmony export */   \"NO_TASK_SELECTED\": () => (/* binding */ NO_TASK_SELECTED)\n/* harmony export */ });\nconst NO_TASK_SELECTED = -1;\nconst NO_PROJECT_SELECTED = -1;\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/constants.js?");

/***/ }),

/***/ "./src/modules/default.js":
/*!********************************!*\
  !*** ./src/modules/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onLoad)\n/* harmony export */ });\nfunction onLoad(name) {\n\n    const container = document.querySelector(\".project-view\");\n    container.innerHTML = `\n        <div class=\"top\">\n            <h1 class=\"project-name\">${name}</h1>\n        </div>\n        <div class=\"task-list\"></div>\n        <button class=\"add-task-btn\">\n            <i class=\"fa-solid fa-plus\"></i>\n            Add Task\n        </button>\n        <div class=\"form-div\">\n            <form id=\"task-form\" action=\"\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" id=\"name\" name=\"taskName\" required>\n                <label for=\"date\">Due Date</label>\n                <input type=\"date\" id=\"date\" name=\"dueDate\" required>\n                <div class=\"form-btns\">\n                    <button class=\"submit-btn\" type=\"submit\">Add</button>\n                    <button class=\"cancel-btn\" type=\"button\">Cancel</button>\n                </div>\n            </form>\n        </div>\n        `;\n};\n\n//# sourceURL=webpack://todo-list/./src/modules/default.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var date_fns_toDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/toDate */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/isToday */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isThisWeek */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var date_fns_subDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/subDays */ \"./node_modules/date-fns/esm/subDays/index.js\");\n\n\n\n\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    setName(name) {\n        this.name = name\n    }\n\n    getName() {\n        return this.name\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks\n    }\n\n    getTasks() {\n        return this.tasks\n    }\n\n    getTask(taskName) {\n        return this.tasks.find((task) => task.getName() === taskName)\n      }\n\n    addTask(newTask, date) {\n        this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTask, date));\n    }\n\n    deleteTask(index) {\n        this.tasks.splice(index, 1);\n    }\n\n    getTasksToday() {\n        return this.tasks.filter((task) => {\n            const date = new Date(task.getDate())\n            return (0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,date_fns_toDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(date))\n        })\n    }\n\n    getTasksThisWeek() {\n        return this.tasks.filter((task) => {\n            const date = new Date(task.getDate())\n            return (0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,date_fns_subDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,date_fns_toDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(date), 1))\n        })\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ \"./src/modules/todolist.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/modules/constants.js\");\n\n\n\n\n\nclass Storage {\n    constructor() {\n        this.currentProject = _constants__WEBPACK_IMPORTED_MODULE_3__.NO_PROJECT_SELECTED\n        this.currentTask = _constants__WEBPACK_IMPORTED_MODULE_3__.NO_TASK_SELECTED;\n    }\n\n    saveTodoList(data) {\n        localStorage.setItem(\"todoList\", JSON.stringify(data))\n    }\n\n    getTodoList() {\n        const todoList = Object.assign(new _todolist__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), JSON.parse(localStorage.getItem(\"todoList\")))\n\n        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project))\n        )\n\n        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), task))))\n\n        return todoList\n    }\n\n    addProject(project) {\n        const todoList = this.getTodoList()\n        todoList.addProject(project)\n        this.saveTodoList(todoList)\n    }\n\n    deleteProject(index) {\n        const todoList = this.getTodoList()\n        todoList.deleteProject(index)\n        this.saveTodoList(todoList)\n    }\n\n    addTask(projectName, name, date) {\n        const todoList = this.getTodoList()\n        todoList.getProject(projectName).addTask(name, date)\n        this.saveTodoList(todoList)\n    }\n\n    deleteTask(projectName, index) {\n        const todoList = this.getTodoList()\n        todoList.getProject(projectName).deleteTask(index)\n        this.saveTodoList(todoList)\n    }\n\n    renameTask(projectName, taskIndex, newName) {\n        const todoList = this.getTodoList();\n        todoList.getProject(projectName).getTasks()[taskIndex].name = newName\n        this.saveTodoList(todoList)\n    }\n\n    setTaskDate(projectName, taskIndex, newDate) {\n        const todoList = this.getTodoList();\n        todoList.getProject(projectName).getTasks()[taskIndex].dueDate = newDate\n        this.saveTodoList(todoList)\n    }\n\n    setCurrentProject(id) {\n        this.currentProject = id\n    }\n\n    getCurrentProject() {\n        return this.currentProject\n    }\n\n    setCurrentTask(index, id) {\n        this.currentProject = index\n        this.currentTask = id\n    }\n\n    resetCurrentTask() {\n        this.currentTask = _constants__WEBPACK_IMPORTED_MODULE_3__.NO_TASK_SELECTED;\n    }\n\n    getCurrentTask() {\n        return this.currentTask\n    }\n\n    updateTodayProject() {\n        const todoList = this.getTodoList()\n        todoList.updateTodayProject()\n        this.saveTodoList(todoList)\n    }\n\n    updateWeekProject() {\n        const todoList = this.getTodoList()\n        todoList.updateWeekProject()\n        this.saveTodoList(todoList)\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate;\n    }\n\n    setName(name) {\n        this.name = name\n    }\n\n    getName() {\n        return this.name\n    }\n\n    setDate(dueDate) {\n        this.dueDate = dueDate\n    }\n\n    getDate() {\n        return this.dueDate\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todolist.js":
/*!*********************************!*\
  !*** ./src/modules/todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/compareAsc */ \"./node_modules/date-fns/esm/compareAsc/index.js\");\n/* harmony import */ var date_fns_toDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/toDate */ \"./node_modules/date-fns/esm/toDate/index.js\");\n\n\n\n\n\nclass TodoList {\n    constructor() {\n        this.projects = []\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Inbox\"))\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Today\"))\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"This week\"))\n    }\n\n    setProjects(projects) {\n        this.projects = projects\n    }\n\n    getProjects() {\n        return this.projects\n    }\n\n    getProject(projectName) {\n        return this.projects.find((project) => project.getName() === projectName)\n    }\n\n    addProject(newProject) {\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newProject))\n    }\n\n    deleteProject(index) {\n        this.projects.splice(index, 1)\n    }\n\n    updateTodayProject() {\n        this.getProject(\"Today\").tasks = []\n\n        this.projects.forEach((project) => {\n            if (project.getName() === \"Today\" || project.getName() === \"This week\") return\n\n            const tasksToday = project.getTasksToday()\n            tasksToday.forEach((task) => {\n                const taskName = `${task.getName()} (${project.getName()})`\n                this.getProject(\"Today\").addTask(taskName, task.getDate())\n            })\n        })\n    }\n\n    updateWeekProject() {\n        this.getProject(\"This week\").tasks = []\n\n        this.projects.forEach((project) => {\n            if (project.getName() === \"Today\" || project.getName() === \"This week\") return\n\n            const tasksWeek = project.getTasksThisWeek()\n            tasksWeek.forEach((task) => {\n                const taskName = `${task.getName()} (${project.getName()})`\n                this.getProject(\"This week\").addTask(taskName, task.getDate())\n            })\n        })\n\n        this.getProject(\"This week\").setTasks(\n            this.getProject(\"This week\")\n            .getTasks().sort((taskA, taskB) => {\n                ;(0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n                    (0,date_fns_toDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(taskA.getDate())),\n                    (0,date_fns_toDate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new Date(taskB.getDate()))\n                )\n            })\n        )\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todolist.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;