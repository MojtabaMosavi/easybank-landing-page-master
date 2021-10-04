console.log("working");
const navMenu = document.querySelector(".header__hamburger-menu");
const nav = document.querySelector(".header__nav");

navMenu.addEventListener("click",()=>{
    navMenu.classList.toggle("hamburger-menu--active");
    nav.classList.toggle("header__nav--active")
})