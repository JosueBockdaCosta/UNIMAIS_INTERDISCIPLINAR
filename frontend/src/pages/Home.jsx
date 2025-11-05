import React from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { id: 1, name: "Notebook Dell", price: 3200 },
    { id: 2, name: "Celular Samsung", price: 2200 },
    { id: 3, name: "Fone Bluetooth", price: 150 },
  ];

  return (
    <div className="home">
      <h1>Bem-vindo ao UNIMAIS</h1>
      <div className="product-list">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
