"use strict";
console.log("JS Started");

const doors = document.querySelectorAll('.door-link');
const today = new Date().getDate();
const PRIME = "rgb(65, 131, 189)";
const SECOND = "whitesmoke";

doors.forEach((door) => {
  if (door.textContent <= today) {
    door.classList.toggle("open");
  } else {
    door.setAttribute("href", "#");
  }
});