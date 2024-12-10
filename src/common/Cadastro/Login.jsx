import React, { useState } from "react";
import "./css/login.css";


const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulação de autenticação - Substituir pelo backend real
      if (email === "teste@exemplo.com" && password === "123456") {
        onLoginSuccess({ email }); // Passa os dados do usuário para o App
      } else {
        setError("E-mail ou senha inválidos.");
      }
    } catch (err) {
      setError("Erro ao tentar fazer login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="formLogin">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Digite sua senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>Mostrar senha</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <a href="/esquecisenha">Esqueci minha senha</a>
        <p>
        Ainda não tem uma conta? <a href="/cadastro">Crie uma.</a>
        </p>
        <input type="submit" value={loading ? "Carregando..." : "Acessar"} className="btn" disabled={loading} />
      </form>
    </div>
  );
};

export default Login;
