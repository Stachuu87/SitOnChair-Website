function slide() {
    var prev = document.querySelector(".leftArrow");
    var next = document.querySelector(".rightArrow");
    var fields = document.querySelectorAll('.slider');
    var visibleField = document.querySelector(".slider.visible")
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
