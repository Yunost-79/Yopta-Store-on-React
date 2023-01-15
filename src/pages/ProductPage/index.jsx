import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../../API/ProductService';
import { connect } from 'react-redux';

import { setAddBasketItem } from '../../redux/actions/productsBasketAction';

import CommonButton from '../../components/UI/CommonButton';
import BackButton from '../../components/UI/BackButton';

import Star from '../../images/star.svg';
import stockImg from '../../images/image-on-swiper-login-2(No).png';

import './style.scss';
import FormLink from '../../components/UI/FormLink';

const ProductPage = ({ setAddBasketItem, isAuthenticated }) => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetData();
  }, [id]);

  const handleGetData = async () => {
    if (id) {
      const result = await fetchData(`/products/${id}`);
      setProductData(result.data);
    }
  };

  //Redux basket

  const handleAddTobasket = () => {
    setAddBasketItem(productData);
  };

  return (
    <div className="product_page">
      <div className="wrapper">
        <h3 className="title">{productData?.title}</h3>
        <div className="rate_block">
          <img className="rate_image" src={Star} alt="star" />
          <div className="rate_title">
            <span>Rate:</span>
            {productData?.rating.rate}
          </div>
        </div>
        <div className="product_content">
          <div className="image">
            <img src={productData?.image} alt={productData?.title} />
          </div>
          <div className="subtitle">
            <div className="subtitle_item">
              <span>Category:</span>
              {productData?.category}
            </div>
            <div className="subtitle_item">
              <span>Price:</span>
              {productData?.price} &#x20AC;
            </div>
            <div className="subtitle_item">
              <span>Description:</span>
              {productData?.description}
            </div>
            <div className="buttons">
              {isAuthenticated ? (
                <CommonButton onClick={handleAddTobasket} className="product_btn">
                  Add in basket
                </CommonButton>
              ) : (
                <div>
                  <CommonButton href="/auth/login" className="product_btn">
                    Login
                  </CommonButton>
                </div>
              )}
            </div>

            <div className="subtitle_item">
              <span>In Stock:</span>
              {productData?.rating.count}
            </div>
          </div>
        </div>
        <BackButton href='/'
          text="Come Back"
          onClick={() => {
            navigate();
          }}
        ></BackButton>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
