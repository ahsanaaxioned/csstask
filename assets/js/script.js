// global variable declaration start here
let a = 0;
let item = document.querySelectorAll(".slide-item");
console.log(item, "item here");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

// global variable declaration end here

// slider function start here
function slideShow() {
    let togg = document.querySelector(".active");
    togg.classList.remove("active");
    item[a].classList.add("active");

};
// slider function end here
// even for slider start here
left.addEventListener("click", function () {
    a--;
    if (a < 0) {
        a = item.length - 1;
    };
    slideShow();
});
right.addEventListener("click", function () {
    a++;
    if (a > item.length - 1) {
        a = 0;
    };
    slideShow();
});
// even for slider end here
// button event start here

// button event start here






















