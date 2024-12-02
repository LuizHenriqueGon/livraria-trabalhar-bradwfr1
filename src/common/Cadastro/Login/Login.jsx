// eslint-disable-next-line no-unused-vars
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="page">
      <form method="POST" action="/assets/php/processar_login.php" className="formLogin">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" placeholder="Digite seu e-mail" required autoFocus />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" placeholder="Digite sua senha" required />
        <a href="/esqueci-senha">Esqueci minha senha</a>
        <p>
          Ainda não tem uma conta? <a href="/cadastro">Crie uma.</a>
        </p>
        <input type="submit" value="Acessar" className="btn" />
      </form>
    </div>
  );
};

export default Login;
