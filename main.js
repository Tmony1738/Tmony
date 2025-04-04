const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute(
        "class",
         isOpen ? "ri-close-line" : "ri-menu-4-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(" .header-content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(" .header-content .section-description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(" .header-content .header-btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// about container
ScrollReveal().reveal(".about-content .section-header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about-content .section-description", {
    ...scrollRevealOption,
    delay: 500,
});

// service container
ScrollReveal().reveal(".service-card", {
    ...scrollRevealOption,
    interval: 500,
});

// porfolio container
ScrollReveal().reveal(".portfolio-card", {
    duration: 1000,
    interval: 500,
});