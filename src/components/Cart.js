import React from "react";

export default function Product(props) {
  console.log(`caart ${props}`);
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
        <p>$ {props.product.price}</p>
      </div>
      <div>
        <div>
          <label> Quantity </label>
          <br></br>
          <input />
          <br></br>
        </div>

        <div className="total">Total</div>
        <button> PURCHASE </button>
      </div>
    </div>
  );
}
