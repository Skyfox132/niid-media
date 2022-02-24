import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import { gsap } from "gsap";
// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import scrollBullet from "./modules/scrollBullet.js";
import stickMenu from "./modules/stickMenu.js";
import tabs from "./modules/tabs.js";
import opacityText from "./modules/opacityText.js";


stickMenu();
scrollBullet();
tabs();
opacityText();








// //disable standart menu and add burger
// let mql = window.matchMedia

// if (mql("(max-width: 800px)").matches) {

//   let mainMenu = document.querySelector(".main-menu")
//   let burger = document.querySelector(".burger")
//   mainMenu.style.display = "none"
//   burger.style.display = "block"


//   /* the viewport is at least 400 pixels wide */
// } else {
//   /* the viewport is less than 400 pixels wide */
// }






// const screenWidth = window.screen.width

// let screen = Math.floor (screenWidth/300)


// window.onresize = function(event) {
//   screen = Math.floor (screenWidth/400)
//   console.log(screen);
// };


var swiper = new Swiper(".swiper", {
    modules: [ Navigation, Pagination, Scrollbar],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    loop: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable:true,
    },
    breakpoints: {
      // when window width is >= 520px
      520: {
        slidesPerView: 2,
      },
      // when window width is >= 800px
      801: {
        slidesPerView: 3,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 4,
      },
      // when window width is >= 1440px
      1441: {
        slidesPerView: 4.5,
      },
      // when window width is >= 1920px
      1880: {
        slidesPerView: 4,
      }
    }
  });



  gsap.to("#bg", {
    scrollTrigger : {
      scrub: 1
    },
      y : -200,
  })

  

  gsap.to("#bg-contact", {
    scrollTrigger : {
      scrub: 1
    },
      y : -1800,
  })
  





const burger_icon = document.querySelector(".burger_icon")
const burger = document.querySelector(".burger")
const links = document.querySelector(".menu-link")
const logo = document.querySelector(".logo")
const cabinet = document.querySelector(".cabinet")


burger_icon.addEventListener("click", function() {
    links.classList.toggle("menu-link_active")
    document.body.classList.toggle('lock');
    this.classList.toggle("burger_active")
    logo.classList.toggle("logo_active")
    cabinet.classList.toggle("cabinet_active")
})

