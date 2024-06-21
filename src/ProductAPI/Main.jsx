import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Main = () => {
  const url = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <h1 className="display-3 text-center">Loading...</h1>;
  }

  return (
    <>
      <div className="container">
        <h1 className="display-3 text-center">Products</h1>
        <div className="container my-5">
          <div className="row">
            {products?.map((product, index) => {
              return <SingleProduct {...product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
