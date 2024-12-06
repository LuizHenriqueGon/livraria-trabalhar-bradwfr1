import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({ CartItem, user, onLogout }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
      <div className="user-auth">
        {user ? (
          <div>
            <span>Bem-vindo, {user.email}</span>
            <button onClick={onLogout}>Sair</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </>
  );
};

export default Header;

