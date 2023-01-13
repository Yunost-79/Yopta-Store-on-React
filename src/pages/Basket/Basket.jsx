import React from 'react';
import { connect } from 'react-redux';
import { setAddProductsData, setDeleteProductsData } from '../../redux/actions/productsAction';
import { Link } from 'react-router-dom';
import BasketProductItem from '../../components/BasketProductItem/BasketProductItem';
import CommonButton from '../../components/UI/CommonButton';

import './style.scss';

const Basket = ({ productBasketData }) => {
  console.log('productBasketData', productBasketData);


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
  productBasketData: state.products.productBasketData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAddProductsData: (payload) => dispatch(setAddProductsData(payload)),
    setDeleteProductsData: (payload) => dispatch(setDeleteProductsData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
