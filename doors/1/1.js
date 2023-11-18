"use strict";
console.log("JS Started");

const submit = document.querySelector('button');
const content = document.querySelector('.content');
const display = document.createElement("p");

submit.addEventListener("click", () => {
  if (document.querySelector("#Mexico").checked) {
    display.textContent = "Korrekt!";
    display.style.color = "green";
    display.style.marginBottom = ".5rem";
    content.appendChild(display);
  } else {
    display.textContent = "Falsch!";
    display.style.color = "red";
    display.style.marginBottom = ".5rem";
    content.append(display);
  }
});