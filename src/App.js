import React, { useEffect, useState } from 'react';
import { fetchData } from './API/ProductService';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Basket from './pages/Basket';

import Header from './components/Header';
import Footer from './components/Footer';

import './variables/variablesStyle.scss';

function App() {
  const [productData, setProductData] = useState([]);
  const [isProductLoading, setIsProductLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setIsProductLoading(true);
    const data = await fetchData();
    const products = data.data;
    setProductData(products);
    setIsProductLoading(false);
  };

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route index element={<HomePage productData={productData} isProductLoading={isProductLoading} />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
