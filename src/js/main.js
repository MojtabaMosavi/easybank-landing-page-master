import { HamburgerMenu } from "./hambergurMenu";
import {Observer} from "./observer"

const Main =(function(){
    document.addEventListener("DOMContentLoaded",() =>{
        // dom caching 
        const body = document.querySelector("body");
        const main = body.querySelector("main")
        const hamMenuButton = body.querySelector(".header__hamburger-menu");
        const hamMenuElement = body.querySelector(".header__nav");

        // initializing the hamburger menu 
       const HamMenu = new HamburgerMenu(
           hamMenuElement,hamMenuButton,"header__nav--active","hamburger-menu--active");

        Observer.init()

        
        })


    
})()