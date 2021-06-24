var numCount = 1;

$("#p1").on("hide.bs.modal", function () {
    document.getElementById("numberCount").innerHTML = 1;
    numCount = 1;
});

function increase() {
    document.getElementById("numberCount").innerHTML = ++numCount;
}

function decrease() {

    document.getElementById("numberCount").innerHTML = --numCount;
    if (numCount < 1) {
        numCount = 1;
        document.getElementById("numberCount").innerHTML = numCount;
    }
}

