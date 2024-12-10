import React, { useState } from 'react';
import './css/recuperar_senha.css';

const EsqueciSenha = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação
        // Por exemplo, uma chamada para uma API
        setMessage('Um e-mail de recuperação foi enviado para ' + email);
        setEmail('');
    };

    return (
        <div className="page">
            <form onSubmit={handleSubmit} className="formRecuperarSenha">
                <h1>Recuperar Senha</h1>
                <p>Insira o e-mail associado à sua conta para redefinir sua senha.</p>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="submit" value="Enviar" className="btn" />
                {message && <p className="message">{message}</p>}
                <p><a href="/login">Voltar para o Login</a></p>
            </form>
        </div>
    );
};

export default EsqueciSenha;
