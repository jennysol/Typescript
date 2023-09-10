"use strict";
const links = document.querySelectorAll(".link");
function activeElement(element) {
    element.style.color = "red";
    element.style.border = "2px solid red";
}
function activeElementButton(element) {
    element.style.color = "red";
    element.style.border = "2px solid red";
}
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        activeElement(link);
    }
});
