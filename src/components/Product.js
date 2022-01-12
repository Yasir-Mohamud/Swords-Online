import React from "react";
import "./Product.css";

export default function Product(props) {
  console.log(props);
  return (
    <div className="product">
      <div className="product--image">
        <img
          src={props.product.imageURL}
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>

      <div className="product--info">
        <h5>{props.product.name}</h5>
        <p>{props.product.description}</p>
        <p>{props.product.price}</p>
        <button> Add To Cart</button>
      </div>
    </div>
  );
}
