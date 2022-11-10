import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchData } from './API/ProductService';
import './App.scss';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Basket from './pages/Basket';

import Header from './components/Header';
import Footer from './components/Footer';

// import { HEADER_LINKS_ITEMS } from './variables/variablesScripts';
import './variables/variablesStyle.scss';

// const data = HEADER_LINKS_ITEMS;

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    handleGetData() 
  }, []);


  const handleGetData = async () =>{
    const data = await fetchData();
    const products = data.data;
    setProductData(products);
  }

  return (
    <div className="wrapper">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage productData={productData} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
