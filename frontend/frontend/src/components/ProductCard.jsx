import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </div>
  );
}
