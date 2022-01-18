import React from "react";
import Cart from "../components/Cart";
import "./CartPage.css";

export default function CartPage(props) {
  const Products = props.cart.map((product) => {
    return <Cart key={product._id} product={product} />;
  });

  return (
    <div className="cart-page">
      <div>{Products}</div>
      <div> TOTAL : </div>
      <button> PURCHASE</button>
    </div>
  );
}
