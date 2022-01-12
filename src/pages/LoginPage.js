import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login">
      <div className="login--form"></div>
      <div className="login--outer">
        <div className="login--inner">
          <label for="username"> Username </label>
          <br></br>
          <input id="username" />
          <br></br>
          <label for="password"> Password </label>
          <br></br>
          <input id="password" />
          <br></br>
          <button> Log In</button>
        </div>
      </div>
    </div>
  );
}
