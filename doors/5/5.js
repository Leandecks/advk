"use strict";
console.log("JS Started");

const submit = document.querySelector('button');
const content = document.querySelector('.content');
const display = document.createElement("p");

submit.addEventListener("click", () => {
  if (document.getElementById("2").checked
      && document.getElementById("4").checked
      && !document.getElementById("1").checked
      && !document.getElementById("3").checked) {
    display.textContent = "Korrekt!";
    display.style.color = "green";
    display.style.marginBottom = ".5rem";
    content.appendChild(display);
  } else if (document.getElementById("1").checked || document.getElementById("3").checked) {
    display.textContent = "Falsch!";
    display.style.color = "red";
    display.style.marginBottom = ".5rem";
    content.append(display);
  } else if (document.getElementById("2").checked || document.getElementById("4").checked) {
    display.textContent = "Es fehlt noch eine Antwort!";
    display.style.color = "rgb(237, 182, 0)";
    display.style.marginBottom = ".5rem";
    content.appendChild(display);
  } else {
    display.textContent = "Falsch!";
    display.style.color = "red";
    display.style.marginBottom = ".5rem";
    content.append(display);
  }
});