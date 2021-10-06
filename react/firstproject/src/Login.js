import React from "react";
import "./Login.css";

class Login extends React.Component {
  validate = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if (password.length < 8) {
      return (document.getElementById("password-span").value = "error");
    }
    if (username.length < 5) {
      return (document.getElementById("username-span").value = "error");
    }
  };
  render() {
    return (
      <center>
        <form name="login">
          <input
            id="username"
            type="text"
            placeholder="username"
            name="username"
            autoComplete="off"
          />
          <span id="username-span"></span>
          <br />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <span id="password-span"></span>
          <br />
          <button onClick={(event) => this.validate}> Submit</button>
        </form>
      </center>
    );
  }
}

export default Login;
