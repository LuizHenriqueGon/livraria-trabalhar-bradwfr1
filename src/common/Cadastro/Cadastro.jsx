// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./css/cadastro.css"; // Certifique-se de que o arquivo CSS esteja correto
import img134 from './img/undraw_Sign_up_n6im.png' 

const Cadastro = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Lógica para envio dos dados
  };

  return (
    <>
        <div className="container">
        <div className="form-image">
            <img
            src={img134}
            alt="Ilustração de cadastro"
            />
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
            <div className="form-header">
                <div className="title">
                <h1>Cadastre-se</h1>
                </div>
                <div className="login-button">
                <button type="button">
                    <a href="#">Entrar</a>
                </button>
                </div>
            </div>
            <div className="input-group">
                <div className="input-box">
                <label htmlFor="firstname">Primeiro Nome</label>
                <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Digite seu primeiro nome"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="input-box">
                <label htmlFor="lastname">Sobrenome</label>
                <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Digite seu sobrenome"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="input-box">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="input-box">
                <label htmlFor="phone">Telefone</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(xx) xxxx-xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="input-box">
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className="input-box">
                <label htmlFor="confirmPassword">Confirme sua senha</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Digite sua senha novamente"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                </div>
            </div>
            <div className="gender-inputs">
                <div className="gender-title">
                <h6>Gênero</h6>
                </div>
                <div className="gender-group">
                <div className="gender-input">
                    <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="female">Feminino</label>
                </div>
                <div className="gender-input">
                    <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    />
                    <label htmlFor="male">Masculino</label>
                </div>
                <div className="gender-input">
                    <input
                    type="radio"
                    id="others"
                    name="gender"
                    value="others"
                    onChange={handleChange}
                    />
                    <label htmlFor="others">Outros</label>
                </div>
                <div className="gender-input">
                    <input
                    type="radio"
                    id="none"
                    name="gender"
                    value="none"
                    onChange={handleChange}
                    />
                    <label htmlFor="none">Prefiro não dizer</label>
                </div>
                </div>
            </div>
            <div className="continue-button">
                <button type="submit">Continuar</button>
            </div>
            </form>
        </div>
        </div>
    </>
  );
};

export default Cadastro;

