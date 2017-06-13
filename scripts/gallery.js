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
