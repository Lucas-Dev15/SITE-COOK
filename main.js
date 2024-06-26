const body = document.querySelector("body");
const navBar = document.querySelector("nav");

body.addEventListener("scroll", () => {
    navBar.classList.add("active");
})