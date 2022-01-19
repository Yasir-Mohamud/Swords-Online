import React, { useState } from "react";

export default function Product(props) {
  console.log(`caart ${props}`);
  const [basket, setBasket] = useState({
    quantity: "",
    total: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setBasket((prev) => {
      return {
        [name]: value,
        total: value * props.cartProduct.price,
      };
    });
    f();
  }
  function f() {
    props.getTotal(basket.total);
  }

  return (
    <div>
      <div>
        <img
          src={props.cartProduct.imageURL}
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>

      <div>
        <h5>{props.cartProduct.name}</h5>
        <p>{props.cartProduct.description}</p>
        <p>$ {props.cartProduct.price}</p>
      </div>
      <div>
        <div>
          <label> Quantity </label>
          <br></br>
          <input
            type="text"
            name="quantity"
            value={basket.quantity}
            onChange={handleChange}
          />
          <br></br>
          <span> Total :{basket.total}</span>
        </div>
      </div>
    </div>
  );
}
