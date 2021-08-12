"use strict";

const start_game = document.getElementById("start-game");
const game_on = document.getElementById("game-on");
const submit_number = document.getElementById("submit-number");
const selected_number = document.getElementById("selected-number");
const comment = document.getElementById("comment");

var randomNumber;
var count = 0;
var userEntryList = [];

start_game.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  start_game.style.display = "none";
  game_on.style.display = "inline";
});

submit_number.addEventListener("click", () => {
  var userValue = selected_number.value;
  userEntryList.push(userValue);
  comment.innerText = `You Have Entered: ${userEntryList}`;
  if (count >= 9) {
    comment.innerText = `You Have Entered: ${userValue}`;
  } else if (userValue > 100) {
    comment.innerText = `please enter a value between 1 - 100\nYou Have Entered: ${userEntryList}`;
  } else if (userValue == randomNumber) {
    comment.innerText = `Congrats You Win\nYou Have Entered: ${userEntryList}`;
    start_game.style.display = "block";
    submit_number.disabled = true;
  } else if (userValue > randomNumber) {
    comment.innerText = `Way too High\nYou Have Entered: ${userEntryList}`;
  } else if (userValue < randomNumber) {
    comment.innerText = `Way too Low\nYou Have Entered: ${userEntryList}`;
  } else {
    comment.innerText = "Enter a valid value";
  }
});
