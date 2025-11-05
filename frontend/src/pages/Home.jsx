import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles.css";

export default function Home() {
  const banners = [
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80",
  ];

  const products = [
    { id: 1, name: "Notebook Dell", price: 3200, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Celular Samsung", price: 2200, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Fone Bluetooth", price: 150, image: "https://images.unsplash.com/photo-1585386959984-a4155223f5c6?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Smart TV LG", price: 3400, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Mouse Gamer", price: 250, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80" },
  ];

  const [current, setCurrent] = useState(0);

  // muda o slide automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="home">
      {}
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={banners[current]} alt={`Banner ${current + 1}`} />
        </div>

        {}
        <div className="carousel-buttons">
          {banners.map((_, index) => (
            <button
              key={index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>

      <h1>Ofertas em destaque</h1>

      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
