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
/***/ (() => {

eval("\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    const btnSwitchTheme = document.querySelector(\"#btn-theme\");\r\n    const burgerMenu = document.querySelector(\"#burger-menu\");\r\n    const dialogMenu = document.querySelector(\"#dialog-menu\");\r\n    const dialogCard = document.querySelector(\"#dialog-card\");\r\n    const cardsOpen = document.querySelectorAll(\".card.card-open\");\r\n    const btnCardDialogClose = document.querySelector(\".dialog-card__close\");\r\n    const root = document.querySelector(\"html\");\r\n    const darkTheme = \"dark\";\r\n    const lightTheme = \"light\";\r\n    function switchTheme() {\r\n        if (root) {\r\n            root.dataset.theme = root.dataset.theme === darkTheme ? lightTheme : darkTheme;\r\n        }\r\n    }\r\n    function openDialog(dialog, modal = false) {\r\n        if (dialog) {\r\n            if (modal) {\r\n                document.body.classList.add(\"modal-open\");\r\n                dialog.showModal();\r\n            }\r\n            else {\r\n                dialog.show();\r\n            }\r\n        }\r\n    }\r\n    function closeDialog(dialog) {\r\n        if (dialog)\r\n            dialog.close();\r\n    }\r\n    /**\r\n     * EVENT LISTENER\r\n     */\r\n    // Switch theme\r\n    btnSwitchTheme === null || btnSwitchTheme === void 0 ? void 0 : btnSwitchTheme.addEventListener(\"click\", (e) => {\r\n        switchTheme();\r\n    });\r\n    // Display dialog menu\r\n    burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.addEventListener(\"click\", (e) => {\r\n        burgerMenu === null || burgerMenu === void 0 ? void 0 : burgerMenu.classList.toggle(\"menu-open\");\r\n        if (!(dialogMenu === null || dialogMenu === void 0 ? void 0 : dialogMenu.open)) {\r\n            openDialog(dialogMenu);\r\n        }\r\n        else {\r\n            closeDialog(dialogMenu);\r\n        }\r\n    });\r\n    // Open card dialog\r\n    cardsOpen.forEach((card) => {\r\n        card.addEventListener(\"click\", (e) => {\r\n            if (!(dialogCard === null || dialogCard === void 0 ? void 0 : dialogCard.open)) {\r\n                openDialog(dialogCard, true);\r\n            }\r\n        });\r\n    });\r\n    // Close card dialog\r\n    btnCardDialogClose === null || btnCardDialogClose === void 0 ? void 0 : btnCardDialogClose.addEventListener(\"click\", (e) => {\r\n        if (dialogCard === null || dialogCard === void 0 ? void 0 : dialogCard.open) {\r\n            closeDialog(dialogCard);\r\n        }\r\n    });\r\n    dialogCard === null || dialogCard === void 0 ? void 0 : dialogCard.addEventListener(\"close\", (e) => {\r\n        document.body.classList.remove(\"modal-open\");\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://@gnadrault/nexus-ui/./src/example.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/example.ts"]();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;