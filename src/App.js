import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { userIsAuth } from './redux/actions/userActions';
import { setProductsBasketData, setAddProductsData } from './redux/actions/productsBasketAction';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Basket from './pages/Basket/Basket';
import AuthPage from './pages/AuthPage/AuthPage';
import AuthLogin from './pages/AuthPage/items/AuthLogin';
import AuthSignUp from './pages/AuthPage/items/AuthSignUp';
import MyProfile from './pages/MyProfile/MyProfile';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';
import './variables/variablesStyle.scss';

function App({ userIsAuth, productBasketData, setProductsBasketData, setAddProductsData }) {

  useEffect(() => {
    const userLocalData = JSON.parse(localStorage.getItem('user_data'));

    if (userLocalData?.isAuth) {
      userIsAuth();
    }

    const getJSONBasket = JSON.parse(localStorage.getItem('basket_data')) || [];
    setProductsBasketData(getJSONBasket);
  }, []);

  useEffect(() => {
    localStorage.setItem('basket_data', JSON.stringify(productBasketData));
  }, [productBasketData]);


  

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<MyProfile />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/auth" element={<AuthPage />}>
          <Route path="/auth/login" element={<AuthLogin />} />
          <Route path="/auth/sign-up" element={<AuthSignUp />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

// export default App;

const mapStateToProps = (state) => ({
  productBasketData: state.productsBasket.productBasketData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userIsAuth: (payload) => dispatch(userIsAuth(payload)),
    setProductsBasketData: (payload) => dispatch(setProductsBasketData(payload)),
    setAddProductsData: (payload) => dispatch(setAddProductsData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
