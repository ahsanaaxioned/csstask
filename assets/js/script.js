// global variable declaration start here
const listItem = document.querySelectorAll(".slide-item"),
    left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    btn = document.querySelectorAll(".btn"),
    topp = document.querySelector(".top");
let index = 0;
// global variable declaration end here

// slider function start here
function setSlide(index) {
    const toggle = document.querySelector(".active");
    toggle.classList.remove("active");
    listItem[index].classList.add("active");
    const btnActive = document.querySelector(".btn-active");
    btnActive.classList.remove("btn-active");
    btn[index].classList.add("btn-active");
};
// slider function end here

// event for slider start here
if(left){
left.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = listItem.length - 1;
    };
    setSlide(index);
});
};
if(right){
right.addEventListener("click", function () {
    index++;
    if (index > listItem.length - 1) {
        index = 0;
    };
    setSlide(index);
});
};
// event for slider end here

// slider button event start here
function removeClass() {
    for (let li of listItem) {
        li.classList.remove("active");
    };
}
if (btn){
btn.forEach(function (ele, i) {
    ele.addEventListener("click", function () {
        const btnActive = document.querySelector(".btn-active");
        btnActive.classList.remove("btn-active");
        btn[i].classList.add("btn-active");
        index = i;
        removeClass();
        listItem[i].classList.add("active");
    });
});
};
// slider button event end here

// window scroll event start here
if(topp){
topp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
};
// window scroll event end here

