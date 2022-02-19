import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import { gsap } from "gsap";
// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';
import scrollBullet from "./modules/scrollBullet.js";
import stickMenu from "./modules/stickMenu.js";
import tabs from "./modules/tabs.js";


stickMenu();
scrollBullet();
tabs();




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
  modules: [ Navigation, Pagination ],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 520px
      520: {
        slidesPerView: 2,
      },
      // when window width is >= 800px
      800: {
        slidesPerView: 3,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 4,
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 5,
      }
    }
  });







gsap.to("#bg", {
  scrollTrigger : {
    scrub: 1
  },
    y : -300,
})