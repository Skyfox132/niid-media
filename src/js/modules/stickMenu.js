
export default ()=>{
    window.addEventListener("scroll", function(){
        const menu = document.querySelector(".header_nav")
        const logo = document.querySelector(".logo-img")
        const logomin = document.querySelector(".logo-min-img")
        menu.classList.toggle("sticky", window.scrollY > 0)
        logo.classList.toggle("logo-stiky", window.scrollY > 0)
        logomin.classList.toggle("logo-min_sticky", window.scrollY > 0)
    })
}