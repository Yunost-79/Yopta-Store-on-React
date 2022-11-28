import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Basket from './pages/Basket';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';

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
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
