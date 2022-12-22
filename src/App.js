import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Basket from './pages/Basket';
import AuthPage from './pages/AuthPage/AuthPage';
import AuthLogin from './pages/AuthPage/items/AuthLogin';
import AuthSignUp from './pages/AuthPage/items/AuthSignUp';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';
import './variables/variablesStyle.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/auth" element={<AuthPage />}>
          <Route index element={<AuthLogin />} />
          <Route path="/auth/sign-up" element={<AuthSignUp />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
