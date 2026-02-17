import React from "react";

// React.memo prevents unnecessary re-renders if props don't change
const ProductCard = React.memo(({ product, addToCart }) => {
  console.log("ProductCard Rendered:", product.name);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h4>{product.name}</h4>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
});

export default ProductCard;
