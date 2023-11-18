"use strict";
console.log("JS Started");

const submit = document.querySelector('button');
const content = document.querySelector('.content');
const display = document.createElement("p");

submit.addEventListener("click", () => {
  if (document.getElementById("1").checked) {
    display.textContent = "Corretto!";
    display.style.color = "green";
    display.style.marginBottom = ".5rem";
    content.appendChild(display);
  } else {
    display.textContent = "Sbagliato!";
    display.style.color = "red";
    display.style.marginBottom = ".5rem";
    content.append(display);
  }
});