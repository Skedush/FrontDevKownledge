/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* index.js :webpack入口文件\n 1.运行指令：\n 开发环境：webpack --entry ./src/index.js --output-path ./build --mode=development\n    webpack会以 ./src/indexedDB.js为入口文件开始打包，打包输出到 ./build/built.js\n    整体打包环境，是开发环境\n 生产环境：webpack --entry ./src/index.js --output-path ./build --mode=production --mode=production\n    webpack会以 ./src/indexedDB.js为入口文件开始打包，打包输出到 ./build/built.js\n    整体打包环境，是生产环境\n*/\n\nfunction add(x, y) {\n  return x + y;\n}\n\nconsole.log(add(1, 2));\n\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;