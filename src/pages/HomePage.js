import React from "react";
import Product from "../components/Product";

import "./HomePage.css";

export default function HomePage(props) {
  const allProducts = props.products.map((product) => {
    return <Product key={product._id} product={product} />;
  });
  return (
    <div className="home">
      <div className="home--welcome--text">
        <p>
          Welcome to SWORDS ONLINE! Browse through our variety of swords from
          different regions, eras , as well as fictional and non fictional.
        </p>
      </div>
      <div className="products">{allProducts}</div>
    </div>
  );
}
