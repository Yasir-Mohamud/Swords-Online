import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";

export default function HomePage() {
  const [productsData, setProductsData] = useState({
    products: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((response) => {
        console.log(response.data);
        setProductsData((prev) => {
          return {
            ...prev,
            id: response.data[0]._id,
            name: response.data[0].name,
            price: response.data[0].price,
            description: response.data[0].description,
            imageURL: response.data[0].imageURL,
          };
        });
      })
      .catch((error) => console.log(`ERROR ${error}`));
  }, []);
  console.log(`product ${productsData[0]}`);
  //   const products = productsData.map((product) => {
  //     return <Product key={product.id} product={product} />;
  //   });
  return (
    <div>
      <div className="home--welcome--text">
        <p>
          Welcome to SWORDS ONLINE! Browse through our variety of swords from
          different regions, eras , as well as fictional and non fictional.
        </p>
      </div>
      {/* {products} */}
    </div>
  );
}
