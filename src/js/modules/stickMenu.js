export default ()=>{
    window.onscroll = () => {
        let header = document.querySelector(".mainmenu")
        let logo   = document.querySelector(".logo-itm")
        let logoMin = document.querySelector(".logo-mini")
        let slogan = document.querySelector(".slogan-text")
      
        if(window.pageYOffset > 240) {
            header.style.opacity = "1"
            header.classList.add("stick-menu")
            logo.style.width = "0px";
            logoMin.classList.add("logo-min__position")
            slogan.textContent = "НИИД"
            slogan.classList.add("slogan-margin")

        }  else {
            header.classList.remove("stick-menu")
            logo.style.width = "148px";
            logoMin.classList.remove("logo-min__position")
            slogan.textContent = "НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ ИНСТИТУТ ИЗУЧЕНИЯ ПРИРОДЫ ДЕНЕГ"
            slogan.classList.remove("slogan-margin")
        }
    
    }

}