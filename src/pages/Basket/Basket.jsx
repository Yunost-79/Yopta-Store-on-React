import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setDeleteBasketDataAll } from '../../redux/actions/productsBasketAction';
import { Link } from 'react-router-dom';
import BasketProductItem from '../../components/BasketProductItem/BasketProductItem';
import CommonButton from '../../components/UI/CommonButton';

import './style.scss';

const Basket = ({ productBasketData, basketCounter, basketPrice, setDeleteBasketDataAll }) => {
  const handleDeleteAll = () => {
    setDeleteBasketDataAll();
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
              <Link className="left_teblehead_item tablehead_link" onClick={handleDeleteAll}>
                Clear all
              </Link>
            </div>
            <div className="left_tablehead_block tablehead_spans">
              <span className="left_teblehead_item tablehead_span tablehead_description">Description</span>
              <span className="left_teblehead_item tablehead_item tablehead_span">Amount</span>
              <span className="left_teblehead_item tablehead_item tablehead_span">Price</span>
              <span className="left_teblehead_item tablehead_item tablehead_span_remove "></span>
            </div>
          </div>
          <div className="content_left_products">
            {productBasketData.length === 0 ? (
              <div>Empty basket</div>
            ) : (
              productBasketData.map((data) => {
                return <BasketProductItem key={data.id} data={data} />;
              })
            )}
          </div>
        </div>
        <div className="basket_content_block basket_content_right">
          <span className="right_product_item right_product_title">Subtotal</span>
          <span className="right_product_item right_product_amount">{`Total: ${basketCounter}`}</span>
          <span className="right_product_item right_product_price">{`Total price: ${basketPrice === 0 ? basketPrice.toFixed() : basketPrice.toFixed(2) } €`}</span>
          <CommonButton className="right_product_item">Checkout</CommonButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productBasketData: state.productsBasket.productBasketData,
  basketCounter: state.productsBasket.basketCounter,
  basketPrice: state.productsBasket.basketPrice,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setDeleteBasketDataAll: (payload) => dispatch(setDeleteBasketDataAll(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
