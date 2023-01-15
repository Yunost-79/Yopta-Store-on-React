import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CommonButton from '../../../../components/UI/CommonButton';

import stockImg from '../../../../images/image-on-swiper-login-2(No).png';
import { setAddBasketItem } from '../../../../redux/actions/productsBasketAction';

import './style.scss';

const CatalogList = ({ products, setAddBasketItem, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleAddToBasket = (elem) => {
    setAddBasketItem(elem);
  };

  return (
    <>
      {products.map((elem) => (
        <div key={elem.id} className="product_block">
          <img className="product_image" src={elem.image} alt={elem.title} onClick={() => navigate(`/product/${elem.id}`)} />
          <div className="product_subcontent">
            <h3 className="product_title">{elem.title}</h3>
            <span className="product_price">{elem.price} &#x20AC;</span>
            <span className="product_category">{elem.category.name}</span>
            <CommonButton className="product_button" onClick={() => navigate(`/product/${elem.id}`)}>
              Open Details
            </CommonButton>
            {isAuthenticated && (
              <CommonButton className="product_button" onClick={() => handleAddToBasket(elem)}>
                Add in basket
              </CommonButton>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAddBasketItem: (payload) => dispatch(setAddBasketItem(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogList);
