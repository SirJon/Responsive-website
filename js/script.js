var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function(){
    if (navMain.classList.contains("main-nav--open")){
        navMain.classList.remove("main-nav--open");
        navMain.classList.add("main-nav--close");
    } else{
        navMain.classList.remove("main-nav--close");
        navMain.classList.add("main-nav--open");
    }
});