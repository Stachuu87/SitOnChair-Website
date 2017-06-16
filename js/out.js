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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function calculator() {
    var positions = document.querySelector(".panel_left").children; // left side of summary table
    var values = document.querySelector(".panel_right").children; // right side of summary table
    var arrows = document.querySelectorAll(".list_arrow"); // all the arrows in drop down lists
    var checkbox = document.querySelector(".check-box input")
    var chairPrice = 0;
    var materialPrice = 0;
    var transportCost = 0;
    var totalCost = 0;
    for (var i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener("click", function () { // each arrow gets an eventListener
            if (this.nextElementSibling.style.display == "block") { // if proper drop down list is visible, than hide it
                this.nextElementSibling.style.display = "none";
            } else {
                this.nextElementSibling.style.display = "block"; //if not, than show it
                for (var j = 0; j < this.nextElementSibling.children.length; j++) { // and then add event listener to each position from that list
                    this.nextElementSibling.children[j].addEventListener("click", function () {
                        if (this.parentElement.previousElementSibling == arrows[0]) { // if it's chair model chosen
                            positions[0].innerText = this.innerText;
                            switch (this.innerText) {
                                case "Clair":
                                    values[0].innerText = 200; // than add apropriate data to right panel
                                    chairPrice = 200;
                                    break;
                                case "Margarita":
                                    values[0].innerText = 250;
                                    chairPrice = 250;
                                    break;
                                case "Selena":
                                    values[0].innerText = 300;
                                    chairPrice = 300;
                                    break;
                            };
                        };

                        if (this.parentElement.previousElementSibling == arrows[1]) { // the same if it's color picked up
                            positions[1].innerText = this.innerText;
                            values[1].innerText = 0;
                        }
                        if (this.parentElement.previousElementSibling == arrows[2]) { // and the same if it's the material type
                            positions[2].innerText = this.innerText;
                            switch (this.innerText) {
                                case "Tkanina":
                                    values[2].innerText = 0;
                                    materialPrice = 0;
                                    break;
                                case "Skóra":
                                    values[2].innerText = 100;
                                    materialPrice = 100;
                                    break;
                            };
                        };
                        this.parentElement.previousElementSibling.previousElementSibling.innerText = this.innerText;
                        this.parentElement.style.display = "none"; // each click on any position from any drop down list is hiding that list
                        calculateCost(); // each click on any position from any drop down list runs the calculateCost function
                    });
                };
            };
        });
    };
    checkbox.addEventListener("click", function () { // checkbox gets the eventlistener
        if (checkbox.checked == true) {
            positions[3].innerText = "Transport";
            values[3].innerText = 80;
            transportCost = 80;
            calculateCost();
        } else {
            positions[3].innerText = "";
            values[3].innerText = "";
            transportCost = 0;
            calculateCost();
        }
    });

    function calculateCost() {
        totalCost = chairPrice + materialPrice + transportCost;
        document.querySelector(".sum").innerText = totalCost + " zł";

    }
};
calculator();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function galleryHover() {
    var descriptions = document.querySelectorAll("#sec_section .description"); // find the description fields in gallery
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].parentElement.addEventListener("mouseover", function () { // each parent element gets 2 separate event listeners
            this.firstElementChild.classList.add("hidden"); //when mouse gets over, than hide description child
        });
        descriptions[i].parentElement.addEventListener("mouseleave", function () { // when mouse leave, than show it again
            this.firstElementChild.classList.remove("hidden");
        });
    };
};
galleryHover(); // run the function

module.exports = galleryHover;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function hiddenMenu() {
    var inside;
    var hiddenList = document.querySelector(".menu_hidden"); // find the hidden lsit
    hiddenList.parentElement.addEventListener("mouseover", function () { // when mouse gets over parent Element
        hiddenList.classList.remove("hidden"); // than show the hidden part
    });
    hiddenList.parentElement.addEventListener("mouseleave", function () { // whgen mouse leaves
        hiddenList.classList.add("hidden"); // than hide it
        hiddenList.classList.remove("visible");
    });

};
hiddenMenu();


/***/ }),
/* 3 */
/***/ (function(module, exports) {

function slide() {
    var prev = document.querySelector(".leftArrow"); // find control arrows
    var next = document.querySelector(".rightArrow");
    var fields = document.querySelectorAll('.slider'); // than find all pages of the slider
    prev.addEventListener("click", function () { // left one gets an event listener, when clicked
        var visibleField = document.querySelector(".slider.visible") // fin the visible one
        if (visibleField == fields[0]) { // if visible one is the first one of the list
            fields[fields.length - 1].classList.add("visible"); // than show tha last one
            fields[fields.length - 1].classList.remove("hidden");
        } else {
            visibleField.previousElementSibling.classList.add("visible"); // if it's not the first one, than show previos sibline
            visibleField.previousElementSibling.classList.remove("hidden");
        }
        visibleField.classList.remove("visible");
        visibleField.classList.add("hidden"); // hide the one which was visible at the moment of clicking
    });
    next.addEventListener("click", function () { // when right arrow was clicked
        var visibleField = document.querySelector(".slider.visible") // again check which one is being showed at the moment
        if (visibleField == fields[fields.length - 1]) { // if it's the last one
            fields[0].classList.remove("hidden"); // than show the first one
            fields[0].classList.add("visible");
        } else {
            visibleField.nextElementSibling.classList.add("visible"); // if visible was not the last one
            visibleField.nextElementSibling.classList.remove("hidden"); // than show next sibling
        }
        visibleField.classList.remove("visible");
        visibleField.classList.add("hidden"); // and again hide the one which was visible when button was clicked
    });
};
slide();

module.exports = slide;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var slider = __webpack_require__(3);
var gallery = __webpack_require__(1);
var hiddenMenu = __webpack_require__(2);
var calculator = __webpack_require__(0);


/***/ })
/******/ ]);