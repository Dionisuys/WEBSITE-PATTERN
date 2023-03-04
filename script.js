let stepbl1 = document.getElementById("stepbl1");
let sepbrdr1 = document.getElementById("sepbrdr1");

let stepbl2 = document.getElementById("stepbl2");
let sepbrdr2 = document.getElementById("sepbrdr2");

let stepbl3 = document.getElementById("stepbl3");
let sepbrdr3 = document.getElementById("sepbrdr3");

stepbl1.onmouseover = function() {
    sepbrdr1.style.borderBottom = "3px solid white";
}

stepbl1.onmouseout = function() {
    sepbrdr1.style.borderBottom = "3px solid black";
}

stepbl2.onmouseover = function() {
    sepbrdr2.style.borderBottom = "3px solid white";
}

stepbl2.onmouseout = function() {
    sepbrdr2.style.borderBottom = "3px solid black";
}

stepbl3.onmouseover = function() {
    sepbrdr3.style.borderBottom = "3px solid white";
}

stepbl3.onmouseout = function() {
    sepbrdr3.style.borderBottom = "3px solid black";
}