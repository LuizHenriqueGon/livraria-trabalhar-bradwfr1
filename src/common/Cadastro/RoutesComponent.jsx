// src/components/RoutesComponent.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import EsqueciSenha from "./Esqueci_Senha";
import Cadastro from "./Cadastro";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  );
};

export default RoutesComponent;
