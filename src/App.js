import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Basket from './pages/Basket';

import Header from './components/Header';
import Footer from './components/Footer';

import { HEADER_LINKS_ITEMS } from './variables/variablesScripts';
import './variables/variablesStyle.scss';

const data = HEADER_LINKS_ITEMS;

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/basket">
            <Basket/>
          </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
