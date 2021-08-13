"use strict";
const input_hex = document.getElementById("rgb-color");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  var red = Math.floor(Math.random() * 255 + 1);
  var green = Math.floor(Math.random() * 255 + 1);
  var blue = Math.floor(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  input_hex.innerText = `RGB(${red}, ${green}, ${blue})`;
});
