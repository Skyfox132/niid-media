import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import { gsap } from "gsap";
// import Swiper from 'swiper';
import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
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
    initialSlide : 0,
    modules: [ Navigation, Pagination, Scrollbar, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    autoplay: 
    {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
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
      811: {
        slidesPerView: 3,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 3.5,
      },
      // when window width is >= 1440px
      1441: {
        slidesPerView: 4.5,
      },
      // when window width is >= 1920px
      1880: {
        slidesPerView: 5,
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
  





const burgerItem = document.querySelector(".burger-item")
const burger = document.querySelector(".burger-icon")
const menuBurger = document.querySelector(".burgerMenu")
// const links = document.querySelector(".menu-link")
// const logo = document.querySelector(".logo")
// const cabinet = document.querySelector(".cabinet")


if(burger) {
  burger.addEventListener("click", function() {
    console.log("ok");
      burger.classList.toggle("_active")
      document.body.classList.toggle('lock');
      menuBurger.classList.toggle("_active")
  
  })
  
}




const subm = document.querySelector(".coop-btn")
const btnSubm = document.querySelector(".thankp")
const checkBox = document.querySelector("#check_box")
const errorPolitic = document.querySelector(".errorP")

if (subm) {
  subm.addEventListener("click", (event) => {
    event.preventDefault
    if (checkBox.checked) {
      btnSubm.style.display = "block"
    } else if (checkBox) {
      errorPolitic.style.display = "block"
    }
    
  })
}
  


