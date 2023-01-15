import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAddProductsData, setDeleteProductsData, setProductsBasketData, setDeleteProductsDataAll } from '../../redux/actions/productsBasketAction';
import { Link } from 'react-router-dom';
import BasketProductItem from '../../components/BasketProductItem/BasketProductItem';
import CommonButton from '../../components/UI/CommonButton';

import './style.scss';
import { useEffect } from 'react';

const Basket = ({ productBasketData, setAddProductsData, setProductsBasketData, setDeleteProductsData, setDeleteProductsDataAll }) => {
  const handleDeleteItem = () => {
    setDeleteProductsDataAll();
    localStorage.removeItem('basket_data');
  };

  return (
    <div className="basket_container">
      <h2 className="basket_title">Shopping Basket</h2>
      <div className="basket_content">
        <div className="basket_content_block basket_content_left">
          <div className="content_left_tablehead">
            <div className="left_tablehead_block tablehead_links">
              <Link className="left_teblehead_item tablehead_link">Choose all</Link>
              <Link className="left_teblehead_item tablehead_link" onClick={handleDeleteItem}>
                Clear all
              </Link>
            </div>
            <div className="left_tablehead_block tablehead_spans">
              <span className="left_teblehead_item tablehead_span tablehead_description">Description</span>
              <span className="left_teblehead_item tablehead_item tablehead_span">Amount</span>
              <span className="left_teblehead_item tablehead_item tablehead_span">Price</span>
            </div>
          </div>
          <div className="content_left_products">
            {productBasketData.length === 0 ? (
              <div>Empty basket</div>
            ) : (
              <BasketProductItem productBasketData={productBasketData} setDeleteProductsData={setDeleteProductsData} />
            )}
          </div>
        </div>
        <div className="basket_content_block basket_content_right">
          <span className="right_product_item right_product_title">Subtotal</span>
          <span className="right_product_item right_product_amount">Total: 1 item</span>
          <span className="right_product_item right_product_price">Total price: 228$</span>
          <CommonButton className="right_product_item">Checkout</CommonButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productBasketData: state.productsBasket.productBasketData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsBasketData: (payload) => dispatch(setProductsBasketData(payload)),
    setAddProductsData: (payload) => dispatch(setAddProductsData(payload)),
    setDeleteProductsData: (payload) => dispatch(setDeleteProductsData(payload)),
    setDeleteProductsDataAll: (payload) => dispatch(setDeleteProductsDataAll(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
