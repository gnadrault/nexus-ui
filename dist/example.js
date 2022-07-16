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

/***/ "./src/example.ts":
/*!************************!*\
  !*** ./src/example.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.exampleApp = void 0;\r\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nvar btnSwitchTheme = document.querySelector(\"#btn-theme\");\r\nvar burgerMenu = document.querySelector(\"#burger-menu\");\r\nvar dialogMenu = document.querySelector(\"#dialog-menu\");\r\nfunction exampleApp() {\r\n    /**\r\n     * EVENT LISTENER\r\n     */\r\n    // Switch theme\r\n    btnSwitchTheme === null || btnSwitchTheme === void 0 ? void 0 : btnSwitchTheme.addEventListener(\"click\", function (e) {\r\n        var root = document.querySelector(\"html\");\r\n        (0, utils_1.switchTheme)(root);\r\n    });\r\n    // Display dialog menu\r\n    burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.addEventListener(\"click\", function (e) {\r\n        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.toggle(\"menu-open\");\r\n        if (!(dialogMenu === null || dialogMenu === void 0 ? void 0 : dialogMenu.open)) {\r\n            (0, utils_1.openPopup)(dialogMenu);\r\n        }\r\n        else {\r\n            (0, utils_1.closePopup)(dialogMenu);\r\n        }\r\n    });\r\n    (0, utils_1.popup)();\r\n}\r\nexports.exampleApp = exampleApp;\r\nexampleApp();\r\n\n\n//# sourceURL=webpack://@gnadrault/nexus-ui/./src/example.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.popup = exports.closePopup = exports.openPopup = exports.switchTheme = void 0;\r\nfunction switchTheme(root) {\r\n    if (root) {\r\n        root.dataset.theme = root.dataset.theme === \"dark\" ? \"light\" : \"dark\";\r\n    }\r\n}\r\nexports.switchTheme = switchTheme;\r\nfunction openPopup(dialog) {\r\n    if (dialog)\r\n        dialog.show();\r\n}\r\nexports.openPopup = openPopup;\r\nfunction closePopup(dialog) {\r\n    if (dialog)\r\n        dialog.close();\r\n}\r\nexports.closePopup = closePopup;\r\nfunction popup() {\r\n    var popup_transform = \"\";\r\n    var $body = document.body;\r\n    var $popupContainer = document.querySelector(\".card-popup\");\r\n    var openPopup = function (e) {\r\n        if ($popupContainer) {\r\n            var popup_bounding_rect = $popupContainer.getBoundingClientRect(), card_bounding_rect = e.target.getBoundingClientRect(), translateX = card_bounding_rect.left + \"px\", translateY = card_bounding_rect.top + \"px\", scaleX = card_bounding_rect.width / popup_bounding_rect.width, scaleY = card_bounding_rect.height / popup_bounding_rect.height;\r\n            popup_transform = \"translate(\" + translateX + \",\" + translateY + \") scale(\" + scaleX + \", \" + scaleY + \")\";\r\n            $popupContainer.style.transform = popup_transform;\r\n            document.body.offsetWidth;\r\n            $body.classList.add(\"popup-open\");\r\n            $popupContainer.style.transform = \"translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1)\";\r\n        }\r\n    };\r\n    var closePopup = function (e) {\r\n        if ($popupContainer) {\r\n            $popupContainer.addEventListener(\"transitionend\", resetPopup, false);\r\n            $popupContainer.style.transform = popup_transform;\r\n            $body.classList.add(\"popup-close\");\r\n            $body.classList.remove(\"popup-open\");\r\n        }\r\n    };\r\n    var resetPopup = function (e) {\r\n        if ($popupContainer && e.target === $popupContainer) {\r\n            $body.classList.remove(\"popup-close\");\r\n            $popupContainer.removeAttribute(\"style\");\r\n            $popupContainer.removeEventListener(\"transitionend\", resetPopup);\r\n        }\r\n    };\r\n    document.addEventListener(\"click\", function (e) {\r\n        var matches = e.target.matches(\".card.card-open\");\r\n        if (matches) {\r\n            openPopup(e);\r\n        }\r\n    }, false);\r\n    document.addEventListener(\"click\", function (e) {\r\n        var matches = e.target.matches(\".card-popup__dismiss\");\r\n        if (matches) {\r\n            closePopup(e);\r\n        }\r\n    }, false);\r\n    document.addEventListener(\"keydown\", function (e) {\r\n        if (e.code === \"Escape\" && $body.classList.contains(\"popup-open\")) {\r\n            closePopup(e);\r\n        }\r\n    }, false);\r\n}\r\nexports.popup = popup;\r\n\n\n//# sourceURL=webpack://@gnadrault/nexus-ui/./src/utils.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/example.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;