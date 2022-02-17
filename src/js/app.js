import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import { gsap } from "gsap";
// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';
import scrollBullet from "./modules/scrollBullet.js";


scrollBullet();






const burger = document.querySelector(".burger")

const burgerSpan = document.querySelector(".burger-span")
burgerSpan.addEventListener("click", function(){
  console.log("click");
  burger.classList.toggle("burger-active")


})




const acc = document.querySelectorAll(".tab-title_flex");
let i;
const arrow = document.querySelectorAll(".arrow")

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("tab-active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.classList.contains("tab-text-active")) {
            panel.classList.remove("tab-text-active");
        } else {
            panel.classList.add("tab-text-active");
    };
})}


//disable standart menu and add burger
let mql = window.matchMedia

if (mql("(max-width: 800px)").matches) {

  let mainMenu = document.querySelector(".main-menu")
  let burger = document.querySelector(".burger")
  mainMenu.style.display = "none"
  burger.style.display = "block"


  /* the viewport is at least 400 pixels wide */
} else {
  /* the viewport is less than 400 pixels wide */
}






const screenWidth = window.screen.width

let screen = Math.floor (screenWidth/300)


window.onresize = function(event) {
  screen = Math.floor (screenWidth/400)
  console.log(screen);
};




var swiper = new Swiper(".swiper", {
    slidesPerView: `${screen}`,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
  });



  window.addEventListener("scroll", function(){
    const menu = document.querySelector(".header_nav")
    const logo = document.querySelector(".logo-img")
    menu.classList.toggle("sticky", window.scrollY > 0)
    logo.classList.toggle("logo-stiky", window.scrollY > 0)
})

