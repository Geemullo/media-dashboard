# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: (https://www.frontendmentor.io/profile/Geemullo)
- Live Site URL: (https://geemullo.github.io/media-dashboard/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Javascript DOM

### What I learned

To see how did I make my toggle switch:

```html
<div id="dark-mode">
    <h3>Dark Mode</h3>
    <div class="toggle"></div>
</div>
```
```css
.toggle.on {
    background: linear-gradient(to right, hsl(210, 78%, 56%),hsl(146, 68%, 55%));
}

.toggle.on::before {
    transform: translateX(24px);
}
```
```js
const toggle = document.queryselector(".toggle")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("on");
});
```

## Author

- Frontend Mentor - [@geemullo](https://www.frontendmentor.io/profile/Geemullo)
