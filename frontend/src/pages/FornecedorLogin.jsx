import React from "react";
import "../styles.css";

export default function FornecedorLogin() {
  return (
    <div className="login-container">
      <h1>Login do Fornecedor</h1>
      <div className="login-box">
        <form className="login-form">
          <input
            type="text"
            placeholder="Email, CPF ou CNPJ"
            className="input-login"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="input-login"
            required
          />
          <button type="submit" className="btn-login">Entrar</button>
        </form>
      </div>
    </div>
  );
}
