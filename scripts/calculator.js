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
