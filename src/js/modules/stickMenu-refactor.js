import gsap from "gsap";

export default () => {
    let menu = document.querySelector('.mainmenu');
    if (!menu) return;

    let header = document.querySelector('header'),
        animation = gsap.timeline({paused:true}),
        animationTrigger = true,
        currentScroll = 0,
        headerTopDistance = header.getBoundingClientRect().top,

        logo   = document.querySelector(".logo-itm"),
        logoMin = document.querySelector(".logo-mini"),
        slogan = document.querySelector(".slogan-text");

    animation.to(header, {
        y: -170,
        duration: .8,
        onComplete: () => changeLogo(true),
    });
    animation.to(header, {
        y: 0,
        duration: .5,
        onReverseComplete: () => changeLogo(false)
    });

    function changeLogo(status) {
        if(status) {
            logo.setAttribute('style', 'visibility:hidden;');
            logoMin.classList.add("logo-min__position");
            slogan.textContent = "НИИД";
            slogan.classList.add("slogan-margin");
        } else {
            logo.removeAttribute('style');
            logoMin.classList.remove("logo-min__position");
            slogan.textContent = "НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ ИНСТИТУТ ИЗУЧЕНИЯ ПРИРОДЫ ДЕНЕГ";
            slogan.classList.remove("slogan-margin");
        }
    }
    
    window.addEventListener('scroll', ()=>{
        let newScroll = window.pageYOffset;

        if(newScroll > currentScroll) {
            if(newScroll >= headerTopDistance && animationTrigger) {
                header.style.position = 'fixed';
                header.style.top = 0;
                animation.restart();
                animationTrigger = false;
            }
        } else {
            if(newScroll < headerTopDistance) {
                header.style.position = 'absolute';
                header.style.top = '70px';
                animation.reverse();
                animationTrigger = true;
            }
        }

        currentScroll = newScroll;
    });

    
}