import React from "react";
import "./Product.css";

export default function Product(props) {
  console.log(props);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.product.imageURL}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.product.name}</h5>
            <p className="card-text">{props.product.description}</p>
            <p className="card-text">{props.product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
