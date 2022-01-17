import React from "react";
import "./LoginPage.css";

export default function LoginPage(props) {
  return (
    <div className="login">
      <div className="login--form"></div>
      <div className="login--outer">
        <div className="login--inner">
          <label for="email"> Email </label>
          <br></br>
          <input
            id="email"
            type="email"
            name="email"
            value={props.user.email}
            onChange={props.handleChange}
          />
          <br></br>
          <label for="password"> Password </label>
          <br></br>
          <input
            id="password"
            type="password"
            name="password"
            value={props.user.password}
            onChange={props.handleChange}
          />
          <br></br>
          <br></br>
          <button onClick={props.handleClick}> Log In</button>
        </div>
      </div>
    </div>
  );
}
