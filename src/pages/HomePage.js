import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import "./HomePage.css";

export default function HomePage() {
  const [productsData, setProductsData] = useState({
    products: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((response) => {
        console.log(response.data);
        setProductsData({
          products: response.data,
        });
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }, []);
  console.log(`product ${productsData.products}`);
  const allProducts = productsData.products.map((product) => {
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
