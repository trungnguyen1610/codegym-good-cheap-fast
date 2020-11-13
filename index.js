
var goodbtn = document.getElementById("good");
var fastbtn = document.getElementById("fast");
var cheapbtn = document.getElementById("cheap");
var good = false;
var cheap = false;
var fast = false;
goodbtn.addEventListener("click", function () {
    if (!goodbtn.checked) {
        good = false;

    } else {
        good = true;
        if (fast && cheap) {
            fast = false;
            fastbtn.checked = false;
        }
    }
});
cheapbtn.addEventListener("click", function () {
    if (!cheapbtn.checked ) {
        cheap = false;
    } else {
        cheap = true;
        if (fast && good) {
            good = false;
            goodbtn.checked = false;
        }
    }
});
fastbtn.addEventListener("click", function () {
    if (!fastbtn.checked) {
        fast = false;

    } else {
        fast = true;
        if (cheap && good) {
            cheap = false;
            cheapbtn.checked = false;
        }
    }
});