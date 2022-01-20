import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product--image">
        <img src={props.product.imageURL} alt="..." />
      </div>

      <div className="product--info">
        <p>{props.product.name}</p>
        <p>{props.product.description}</p>
        <p>$ {props.product.price}</p>
        <button onClick={() => props.handleClick(props.product._id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
