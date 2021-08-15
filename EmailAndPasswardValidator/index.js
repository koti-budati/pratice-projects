"use strict";

var username = document.getElementById("username");
var password = document.getElementById("password");
var uname = document.getElementById("uname");
var upass = document.getElementById("pass");

username.value = "";
function validate() {
  event.preventDefault();
  // Event.preventDefault();

  const msg_email = (
    text = "Enter a valid Email-Id",
    color = "rgb(255, 0, 0)"
  ) => {
    uname.innerHTML = text;
    uname.style.color = color;
    username.style.border = `1px solid ${color}`;
  };

  const email = username.value.trim();

  let email_regex = /^[a-z0-9.]+@[a-z]+\.com/gi;
  username.value = email;
  if (email_regex.test(email)) {
    msg_email("Success", "green");
  } else {
    msg_email("Enter a valid Email-Id", "red");
  }

  const msg_pass = (
    text = "Min. passward length is 8 characters",
    color = "rgb(255, 0, 0)"
  ) => {
    upass.innerHTML = text;
    upass.style.color = color;
    password.style.border = `1px solid ${color}`;
  };
  const pass = password.value;

  let passRegex = [/[a-z]/g, /[A-Z]/g, /[0-9]/g, /[!@#$%^&*]/g];
  let checkPass = false;
  if (pass.length >= 8) {
    for (var i = 0; i < passRegex.length; i++) {
      if (pass.match(passRegex[i]) == null) {
        console.log(passRegex[i]);
        msg_pass("Enter a valid Pass", "red");
        checkPass = true;
        break;
      }
    }
    if (!checkPass) {
      msg_pass("Success", "green");
    }
  } else {
    msg_pass();
  }
}
