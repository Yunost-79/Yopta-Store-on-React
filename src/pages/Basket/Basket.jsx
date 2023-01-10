import { Button, ButtonGroup, Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BasketProductItem from '../../components/BasketProductItem/BasketProductItem';
import CommonButton from '../../components/UI/CommonButton';
import img from '../../images/testImg.png';

import './style.scss';

const Basket = () => {
  return (
    <div className="basket_container">
      <h2 className="basket_title">Shopping Basket</h2>
      <div className="basket_content">
        <div className="basket_content_block basket_content_left">
          <div className="content_left_tablehead">
            <div className="left_tablehead_block tablehead_links">
              <Link className="left_teblehead_item tablehead_link">Choose all</Link>
            </div>
            <div className="left_tablehead_block tablehead_spans">
              <span className="left_teblehead_item tablehead_span tablehead_description">Description</span>
              <span className="left_teblehead_item tablehead_item tablehead_span">Amount</span>
              <span className="left_teblehead_item tablehead_item tablehead_span">Price</span>
            </div>
          </div>
          <div className="content_left_products">
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
            <BasketProductItem />
          </div>
        </div>
        <div className="basket_content_block basket_content_right">
          <span className="right_product_item right_product_title">Subtotal</span>
          <span className="right_product_item right_product_amount">Total: 1 item</span>
          <span className="right_product_item right_product_price">Total price: 228$</span>
          <CommonButton className='right_product_item' >Checkout</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default Basket;
