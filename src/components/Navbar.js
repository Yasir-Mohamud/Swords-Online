import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../svgs/userProfile.svg";
import home from "../svgs/home.svg";
import cart from "../svgs/cart.svg";
import "./Navbar.css";

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar">
      <img src="" alt="" />
      <span> SWORDS ONLINE </span>

      <img src={home} alt="home icon" onClick={() => navigate("/")} />
      <img src={cart} alt="cart icon" onClick={() => navigate("/cart")} />
      <img src={profile} alt="user profile icon" />
      <button onClick={() => navigate("/login")}>LOGIN</button>
      <button onClick={() => navigate("/signUp")}>SIGN UP</button>
    </nav>
  );
}
