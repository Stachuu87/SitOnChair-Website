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
