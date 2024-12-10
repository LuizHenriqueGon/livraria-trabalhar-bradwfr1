import React, { useState } from 'react';
import './css/cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = 'O nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório.';
    } else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(formData.email)) {
      newErrors.email = 'O email não é válido.';
    }
    if (!formData.senha) {
      newErrors.senha = 'A senha é obrigatória.';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'A senha deve ter pelo menos 6 caracteres.';
    }
    if (formData.confirmarSenha !== formData.senha) {
      newErrors.confirmarSenha = 'As senhas não coincidem.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Cadastro realizado com sucesso!');
      console.log('Dados do formulário:', formData);
      setFormData({ nome: '', email: '', senha: '', confirmarSenha: '' });
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {errors.nome && <p className="error">{errors.nome}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
          {errors.senha && <p className="error">{errors.senha}</p>}
        </div>
        <div className="form-group">
          <label>Confirmar Senha:</label>
          <input
            type="password"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
          />
          {errors.confirmarSenha && (
            <p className="error">{errors.confirmarSenha}</p>
          )}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
