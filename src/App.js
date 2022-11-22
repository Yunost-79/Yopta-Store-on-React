import React, { useEffect, useState } from 'react';
import { fetchData } from './API/ProductService';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Basket from './pages/Basket';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';
import './variables/variablesStyle.scss';
import ProductPage from './pages/ProductPage';

function App() {
  const [productData, setProductData] = useState([]);
  const [isProductLoading, setIsProductLoading] = useState(false);

  const [singleProductId, setSingleProductId] = useState('');


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
        <Route index element={<HomePage productData={productData} isProductLoading={isProductLoading} setSingleProductId={setSingleProductId} />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<ProductPage setIsProductLoading={setIsProductLoading} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
