import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

export default ()=>{
    const h2 = document.querySelectorAll("h2")
    const p = document.querySelectorAll("p")

    // console.log(h2,p);
    h2.forEach(el => {
        el.style.opacity = "0"
        gsap.to(el,{
            scrollTrigger: {
                trigger: el,
                markers: false,
                start: "top bottom",
                end: "bottom center"
                
            },

            opacity: 1,
            duration: 1,

        })
        
    });

    p.forEach(el => {
        el.style.opacity = "0"
        gsap.to(el,{
            scrollTrigger: {
                trigger: el,
                markers: false,
                start: "top bottom",
                end: "bottom center"
                
            },

            opacity: 1,
            duration: 2,

        })
        
    });




}