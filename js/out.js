/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function slide() {
    var prev = document.querySelector(".leftArrow");
    var next = document.querySelector(".rightArrow");
    prev.addEventListener("click", function () {
        var fields = document.querySelectorAll('.slider');
        var visibleField = document.querySelector(".slider.visible")
        if (visibleField == fields[0]) {
            fields[fields.length - 1].classList.add("visible");
            fields[fields.length - 1].classList.remove("hidden");
            console.log("pierwszy");
        } else {
            visibleField.previousElementSibling.classList.add("visible");
            visibleField.previousElementSibling.classList.remove("hidden");
            console.log("nie pierwszy");
        }
        visibleField.classList.remove("visible");
        visibleField.classList.add("hidden");
    });
    next.addEventListener("click", function () {
        var fields = document.querySelectorAll('.slider');
        var visibleField = document.querySelector(".slider.visible")
        if (visibleField == fields[fields.length - 1]) {
            fields[0].classList.add("visible");
            fields[0].classList.remove("hidden");
            console.log("ostatni");
        } else {
            visibleField.nextElementSibling.classList.add("visible");
            visibleField.nextElementSibling.classList.remove("hidden");
            console.log("nie ostatni");
        }
        visibleField.classList.remove("visible");
        visibleField.classList.add("hidden");
    });
};
slide();

module.exports = slide;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var slider = __webpack_require__(0);
var gallery = __webpack_require__(2);
var hiddenMenu = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function galleryHover() {
    var descriptions = document.querySelectorAll("#sec_section .description");
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].parentElement.addEventListener("mouseover", function () {
            this.firstElementChild.classList.add("hidden");
        });
        descriptions[i].parentElement.addEventListener("mouseleave", function () {
            this.firstElementChild.classList.remove("hidden");
        });
    };
};
galleryHover();

module.exports = galleryHover;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function hiddenMenu() {
    var inside;
    var hiddenList = document.querySelector(".menu_hidden");
    hiddenList.parentElement.addEventListener("mouseover", function () {
        hiddenList.classList.remove("hidden");
        hiddenList.classList.add("visible");
    });
    hiddenList.parentElement.addEventListener("mouseleave", function () {
        hiddenList.classList.add("hidden");
        hiddenList.classList.remove("visible");
    });
    hiddenList.addEventListener("mouseover", function () {

        hiddenList.classList.remove("hidden");
        hiddenList.classList.add("visible");
    });
    hiddenList.addEventListener("mouseleave", function () {
        hiddenList.classList.add("hidden");
        hiddenList.classList.remove("visible");
    });

};
hiddenMenu();


/***/ })
/******/ ]);