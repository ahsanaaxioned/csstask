// global variable declaration start here
let a = 0;
let item = document.querySelectorAll(".slide-item");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let btn = document.querySelectorAll(".btn");
let topp = document.querySelector(".top");
// global variable declaration end here

// slider function start here
function slideShow(a) {
    let togg = document.querySelector(".active");
    togg.classList.remove("active");
    item[a].classList.add("active");
    let btnActive = document.querySelector(".btn-active");
    btnActive.classList.remove("btn-active");
    btn[a].classList.add("btn-active");

};
// slider function end here

// event for slider start here
left.addEventListener("click", function () {
    a--;
    if (a < 0) {
        a = item.length - 1;
    };
    slideShow(a);
});
right.addEventListener("click", function () {
    a++;
    if (a > item.length - 1) {
        a = 0;
    };
    slideShow(a);
});
// event for slider end here

// slider button event start here
btn.forEach(function (ele, i) {
    ele.addEventListener("click", function () {
        let btnActive = document.querySelector(".btn-active");
        btnActive.classList.remove("btn-active");
        btn[i].classList.add("btn-active");
        for (let li of item) {
            li.classList.remove("active");
        };
        item[i].classList.add("active");
        a=i;
    });
});
// slider button event end here

// window scroll event start here
topp.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});
// window scroll event end here




















