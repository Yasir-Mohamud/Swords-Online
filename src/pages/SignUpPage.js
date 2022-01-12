import React, { useState } from "react";
import "./SignUpPage.css";
import axios from "axios";

export default function SignUpPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    axios.post("http://localhost:4000/users/add", newUser).then((response) => {
      console.log(response.data);
    });

    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    // sends you back to the homepage
    // window.location = "/";
  }
  return (
    <div className="signUp">
      <div className="signUp--form"></div>
      <div className="form--outer">
        <form className="form--inner" onSubmit={handleSubmit}>
          <label for="username"> Username</label>
          <br></br>
          <input
            required
            id="username"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <br></br>
          <label for="email"> Email</label>
          <br></br>
          <input
            required
            id="email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <br></br>
          <label for="password"> Password</label>
          <br></br>
          <input
            required
            id="password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <br></br>
          <label for="confirmPassword">Confirm Password</label>
          <br></br>
          <input
            required
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />

          {user.password === user.confirmPassword && <button> SIGN UP </button>}
        </form>
      </div>
    </div>
  );
}
