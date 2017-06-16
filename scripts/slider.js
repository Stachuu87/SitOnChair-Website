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
