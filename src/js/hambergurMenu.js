/**
 * The HamburgerMenu module implements simple toggle functionality for a hamburger menu 
 * given the hammenu element and the botton the controls it and their state modifiers 
 */

export const HamburgerMenu = function(menuElement,IconElement,MenuStateModifer,IconStateModifier){
    "use strict"

    // variables         
    const hamMenuElement = menuElement;    
    const hamMenuIcon = IconElement;
    const hamMenuStateModifer = MenuStateModifer ? MenuStateModifer:"nav__menu--active" ;
    const hamIconStateModifier = IconStateModifier ? IconStateModifier:"hamburger__menu--active";

    // initializing 
    _init()

    // EventBinding
    function _bindEnvents(){
        hamMenuIcon.addEventListener("click",() => {toggleMenu()})

    }

    // functions 
    function _init(){
        _bindEnvents()
    }
    
    function toggleMenu(){
        let state = hamMenuElement.classList.contains(hamMenuStateModifer) ? true : false;
        state ? closeMenu() : openMenu();
    }

    function openMenu(){
        hamMenuElement.classList.add(hamMenuStateModifer);
        hamMenuElement.setAttribute("aria-expended","true");      
        hamMenuIcon.classList.add(hamIconStateModifier);
    }

    function closeMenu(){
        hamMenuElement.classList.remove(hamMenuStateModifer);
        hamMenuElement.setAttribute("aria-expended","");      
        hamMenuIcon.classList.remove(hamIconStateModifier);
    }

    // public API 
    return {
        toggleMenu:toggleMenu,
        openMenu:openMenu,
        closeMenu:closeMenu ,
    };
    
};

