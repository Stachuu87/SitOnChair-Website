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
