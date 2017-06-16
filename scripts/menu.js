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
