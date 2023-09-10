const links = document.querySelectorAll(".link");

function activeElement(element: HTMLElement) {
  element.style.color = "red";
  element.style.border = "2px solid red";
}

function activeElementButton(element: HTMLElement) {
  element.style.color = "red";
  element.style.border = "2px solid red";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    activeElement(link);
  }
});
