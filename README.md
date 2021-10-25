# Frontend Mentor - Easy-banking-landing-page


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)
### Links

- Live Site URL: []()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript 
- BEM 
- Sass

### What I learned

1-Doing this project I learned how to change hover state to svg icon by defining an external svg file with desired behaviors and then applying it to the svg icon's hover state.
```css
element {
  &.hover{
  filter : url("loaction of the external svg file")
  }
}
```
2- Revealing module pattern is really neat way to structure code. This pattern gives you the ability to create seperate namespaces for each different components and thus the benefit of not polluting the global namespace. Another advantage with this pattern is that it gives the ability to create a public api in witch you expose the peaces of the fucntionality you want and keep the rest private.It's also fexiable and can be modified to not be an IFEE which makes possible to create new instances of the module.

```Js
YourModule = (function(){})() 
or
YourModule = function(){}
```
3- Intersection API is a way to asynchronously observe changes in the intersection of a target element with a ancestor element or if not specified the top-level document's viewport.This API allows to implenent features such as infinite scroll, srcoll on view and lazy loading of images to name a few. In this porject I scratched the surface of what this API can do by implementing partial scroll on view. 

### Continued development

1- Deepening my knowledge about accessibility and bem.
2- Try new features of js.
3- Leaning more about git 
4- Experiment with css new properties. 

### Useful resources

- [Revealing-module-pattern]https://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern) - Good starter on the basics of revealing module pattern.
- [Hover-state-of-svgs](https://css-tricks.com/the-many-ways-to-change-an-svg-fill-on-hover-and-when-to-use-them/) -How to change styles of svg on hover.
