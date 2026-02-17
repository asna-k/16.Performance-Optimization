import React, { useState, useCallback } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphones" },
  ]);

  const [cartCount, setCartCount] = useState(0);

  // useCallback prevents function recreation on every render
  const addToCart = useCallback(() => {
    setCartCount((prev) => prev + 1); // fixed increment issue
  }, []);

  console.log("ProductList Rendered");

  return (
    <div>
      <h2>Products</h2>
      <h3>Cart Count: {cartCount}</h3>

      {products.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
