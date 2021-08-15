"use strict";

var username = document.getElementById("username");
var password = document.getElementById("password");
var uname = document.getElementById("uname");
var pass = document.getElementById("pass");

username.value = "";
function validate() {
  event.preventDefault();
  // Event.preventDefault();

  const msg = (text = "Enter a valid Email-Id", color = "rgb(255, 0, 0)") => {
    uname.innerHTML = text;
    uname.style.color = color;
    username.style.border = `1px solid ${color}`;
  };

  const email = username.value.trim();

  let email_regex = /^[a-z0-9.]+@[a-z]+\.com/gi;
  username.value = email;
  if (email_regex.test(email)) {
    msg("Success", "green");
  } else {
    msg("Enter a valid Email-Id", "red");
  }
}
