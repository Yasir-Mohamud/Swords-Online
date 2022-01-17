import React, { useState, useEffect } from "react";

//import profile from "./svgs/userProfile.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ReceiptPage from "./pages/ReceiptPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import axios from "axios";

export default function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    isLoggedIn: false,
    order: [],
  });

  const [products, setProducts] = useState({
    allProducts: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((response) => {
        setProducts({
          allProducts: response.data,
        });
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleClick() {
    console.log("clicked");
    axios
      .get("http://localhost:4000/users/" + user.email)
      .then((response) => {
        if (
          user.email === response.data.email &&
          user.password === response.data.password
        ) {
          setUser((prev) => {
            return {
              ...prev,
              isLoggedIn: true,
              username: response.data.username,
              id: response.data._id,
            };
          });
          navigate("/");
        }
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }

  function handleLogOut() {
    setUser((prev) => {
      return {
        ...prev,
        isLoggedIn: false,
      };
    });
  }

  return (
    <main>
      <Navbar user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products.allProducts} />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              key={user.id}
              user={user}
              handleChange={handleChange}
              handleClick={handleClick}
            />
          }
        />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </main>
  );
}
