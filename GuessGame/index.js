"use strict";

const start_game = document.getElementById("start-game");
const game_on = document.getElementById("game-on");
const submit_number = document.getElementById("submit-number");
const selected_number = document.getElementById("selected-number");
const comment = document.getElementById("comment");

var randomNumber;
var count;
var userEntryList;

start_game.addEventListener("click", () => {
  // Random Number Generated
  randomNumber = Math.floor(Math.random() * 100 + 1);

  // disabling start game button
  start_game.style.display = "none";
  // enabling input and submit
  game_on.style.display = "inline";

  // resetting count
  count = 0;

  // user entry
  userEntryList = [];

  // emptying comments
  comment.innerText = "";

  // enabling submit button
  submit_number.disabled = false;
});

submit_number.addEventListener("click", () => {
  var userValue = selected_number.value;
  userEntryList.push(userValue);

  comment.innerText = `You Have Entered: ${userEntryList}`;
  if (count >= 9) {
    // This is to verify that count doesn't exceed 10

    comment.innerText = `You Have Entered: ${userValue}`;
  } else if (userValue > 100) {
    // checks if user entered value is out of range

    comment.innerText = `please enter a value between 1 - 100\nYou Have Entered: ${userEntryList}`;
  } else if (userValue == randomNumber) {
    // if user value is match

    comment.innerText = `Congrats You Win\nYou Have Entered: ${userEntryList}`;

    //displays the play again button
    start_game.style.display = "block";

    // blocks from submiting value
    submit_number.disabled = true;
  } else if (userValue > randomNumber) {
    // if user value is greater

    comment.innerText = `Way too High\nYou Have Entered: ${userEntryList}`;
  } else if (userValue < randomNumber) {
    // if user value is less

    comment.innerText = `Way too Low\nYou Have Entered: ${userEntryList}`;
  } else {
    // if user value is valid or not

    comment.innerText = "Enter a valid value";
  }
  count++;
});
