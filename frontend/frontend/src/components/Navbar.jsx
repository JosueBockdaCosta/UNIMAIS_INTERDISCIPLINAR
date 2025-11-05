import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🛒 UNIMAIS</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/seller">Vendedor</Link></li>
        <li><Link to="/buyer">Comprador</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
