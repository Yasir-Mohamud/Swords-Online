import React from "react";
import { useNavigate } from "react-router-dom";
// import profile from "../svgs/userProfile.svg";
// import home from "../svgs/home.svg";
// import cart from "../svgs/cart.svg";
import logo from "../svgs/swordsonlineLOGO.png";
import "./Navbar.css";

export default function Navbar(props) {
  let navigate = useNavigate();
  return (
    <nav className="nav">
      <img className="nav--logo" src={logo} alt="logo" />
      <div className="nav--left">
        <span className="nav--title"> SWORDS ONLINE </span>
      </div>

      <div className="nav--right">
        <span className="nav--span" onClick={() => navigate("/")}>
          Home
        </span>
        <span className="nav--span" onClick={() => navigate("/cart")}>
          Cart
        </span>
        {props.user.isLoggedIn === true ? (
          <button> LOG OUT </button>
        ) : (
          <span>
            <span className="nav--span" onClick={() => navigate("/login")}>
              Login
            </span>
            <span className="nav--span" onClick={() => navigate("/signUp")}>
              Sign Up
            </span>
          </span>
        )}
      </div>
    </nav>
  );
}
