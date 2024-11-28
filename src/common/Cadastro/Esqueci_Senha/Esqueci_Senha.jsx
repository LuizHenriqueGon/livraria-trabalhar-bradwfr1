// eslint-disable-next-line no-unused-vars
import React from "react";
import "./recuperar_senha.css";

const EsqueciSenha = () => {
  return (
    <div className="page">
      <form method="POST" action="processar_recuperacao.php" className="formRecuperarSenha">
        <h1>Recuperar Senha</h1>
        <p>Insira o e-mail associado à sua conta para redefinir sua senha.</p>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
        <input type="submit" value="Enviar" className="btn" />
        <p><a href="/login">Voltar para o Login</a></p>
      </form>
    </div>
  );
};

export default EsqueciSenha;

