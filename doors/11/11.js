"use strict";
console.log("JS Started");

const submit = document.querySelector('button');
const content = document.querySelector('.content');
const display = document.createElement("p");

const solution = [
  "If I had learned back then, I would have passed the test",
  "If I had learned back then, I would have passed the exam",
  "If I had studied back then, I would have passed the test",
  "If I had studied back then, I would have passed the exam",
  "If I had learned back then I would have passed the test"
];

submit.addEventListener("click", () => {
  if (solution.includes(document.getElementById("1").value)) {
    display.textContent = "Korrekt!";
    display.style.color = "green";
    display.style.marginBottom = ".5rem";
    content.appendChild(display);
  } else {
    display.textContent = 'Falsch: die korrekte Antwort wäre "If I had learned back then, I would have passed the test"';
    display.style.color = "red";
    display.style.marginBottom = ".5rem";
    content.append(display);
  }
});