export default()=> {
    const acc = document.querySelectorAll(".tab-title_flex");
    let i;
    const tabIcon = document.querySelectorAll(".tab-icon")

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

}