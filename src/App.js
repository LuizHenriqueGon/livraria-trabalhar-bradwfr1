import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Login from "./common/Cadastro/Login"; // Importa o componente de login
import Cadastro from "./common/Cadastro/Cadastro"; // Importa o componente de cadastro

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);
  const [user, setUser ] = useState(null); // Estado para gerenciar autenticação

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)));
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)));
    }
  };

  const handleLogin = (userData) => {
    setUser (userData); // Salva os dados do usuário ao fazer login
  };

  const handleLogout = () => {
    setUser (null); // Remove os dados do usuário ao fazer logout
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} user={user} onLogout={handleLogout} />
        <Switch>
          <Route path="/login" exact>
            {user ? <Redirect to="/" /> : <Login onLoginSuccess={handleLogin} />}
          </Route>
          <Route path="/cadastro" exact>
            <Cadastro /> {/* Adiciona a rota para o componente Cadastro */}
          </Route>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;