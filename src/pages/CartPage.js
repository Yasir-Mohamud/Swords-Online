import React, { useState } from "react";
import Cart from "../components/Cart";
import "./CartPage.css";

export default function CartPage(props) {
  const cartProducts = props.cart.map((cartProduct) => {
    return (
      <Cart
        key={cartProduct._id}
        cartProduct={cartProduct}
        getTotal={getTotal}
      />
    );
  });

  function getTotal(total) {
    console.log(total);
  }

  return (
    <div className="cart-page">
      <div>{cartProducts}</div>
      <div> TOTAL : </div>
      <button> PURCHASE</button>
    </div>
  );
}
