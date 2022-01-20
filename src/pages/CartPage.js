import React, { useState } from "react";
import Cart from "../components/Cart";
import "./CartPage.css";

export default function CartPage(props) {
  const cartProducts = props.cart.map((cartProduct) => {
    return (
      <Cart
        key={cartProduct._id}
        cartProduct={cartProduct}
        handleCart={props.handleCart}
      />
    );
  });

  const total = props.cart.map((product) => product.total);
  console.log(total);
  const getTotal = () => {
    let num = 0;
    total.forEach((element) => {
      return (num = num + element);
    });
    return num;
  };
  return (
    <div className="cart-page">
      {cartProducts.length === 0 ? (
        <div className="center"> Your Cart Is Empty!</div>
      ) : (
        <div>
          ({cartProducts}
          <div className="bottom">
            <button> PURCHASE ${getTotal()} </button>
          </div>
        </div>
      )}
    </div>
  );
}
