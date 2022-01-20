import React from "react";
import "./Cart.css";

export default function Product(props) {
  return (
    <div className="all">
      <div className="cartProduct">
        <div className="cartProduct--image">
          <img src={props.cartProduct.imageURL} alt="..." />
        </div>

        <div className="cartProduct--info">
          <p>{props.cartProduct.name}</p>
          <p>{props.cartProduct.description}</p>
          <p>$ {props.cartProduct.price}</p>
        </div>
      </div>
      <div className="cartProduct--total">
        <div>
          <label> Quantity </label>
          <br></br>
          <input
            id={props.cartProduct._id}
            type="number"
            name="quantity"
            value={props.cartProduct.quantity}
            onChange={props.handleCart}
          />
        </div>
        <div> Total : ${props.cartProduct.total}</div>
      </div>
    </div>
  );
}
