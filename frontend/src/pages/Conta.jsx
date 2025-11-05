import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Conta() {
  return (
    <div className="login-container">
      <h1 className="title-main">Bem-vindos!</h1>
      <h2 className="subtitle">Unimais</h2>

      <div className="login-box">
        <h3 className="login-title">Acesse sua conta</h3>
        <p className="login-subtext">Escolha o tipo de login:</p>

        <div className="login-buttons">
          <Link to="/fornecedor" className="btn-login">Fornecedor</Link>
          <Link to="/lojista" className="btn-login">Lojista</Link>
        </div>
      </div>
    </div>
  );
}
