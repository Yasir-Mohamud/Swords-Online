import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
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

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((response) => {
        setProducts(response.data);
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

  function handleClick(id) {
    axios
      .get("http://localhost:4000/products/" + id)
      .then((response) => {
        let cartId = cart.map((c) => c._id);
        if (cartId.includes(response.data._id) !== true) {
          setCart((prev) => {
            return [...prev, response.data];
          });
        }
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }

  function handleCart(event) {
    const { name, value, id } = event.target;

    setCart((prev) => {
      const newArr = [];
      for (let i = 0; i < prev.length; i++) {
        let current = prev[i];
        if (current._id === id) {
          const u = {
            ...current,
            [name]: value,
            total: current.price * value,
          };
          newArr.push(u);
        } else {
          newArr.push(current);
        }
      }
      return newArr;
    });
  }

  return (
    <main>
      <Navbar user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} handleClick={handleClick} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage key={cart.length} cart={cart} handleCart={handleCart} />
          }
        />

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
