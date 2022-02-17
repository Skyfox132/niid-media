import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

export default ()=>{
    let bullets = document.querySelectorAll('.dots');
    if(bullets.length == -1) return;

    //console.log(bullets);
    

    gsap.registerPlugin(ScrollTrigger);

    bullets.forEach(el=>{
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top center+=15%",
                end: "bottom bottom-=12%",
                markers: false,
                onEnter: ()=>{
                    el.classList.remove("dots-active")
                    el.classList.add("dots-active")
                   // console.log(`enter: ${el.innerText}`);
                },
                onEnterBack: ()=>{
                    el.classList.remove("dots-active")

                   // console.log(`leave: ${el.innerText}`);
                }
            }
        })
    });
    
}


