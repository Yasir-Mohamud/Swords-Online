import React, { useState, useEffect } from "react";

//import profile from "./svgs/userProfile.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ReceiptPage from "./pages/ReceiptPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
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
        console.log(response.data);
        setProducts({
          allProducts: response.data,
        });
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products.allProducts} />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
