import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../../API/ProductService';
import { connect } from 'react-redux';

import { setAddBasketItem, setBasketItemCounter } from '../../redux/actions/productsBasketAction';

import CommonButton from '../../components/UI/CommonButton';
import BackButton from '../../components/UI/BackButton';

import Star from '../../images/star.svg';
import stockImg from '../../images/image-on-swiper-login-2(No).png';

import './style.scss';
import FormLink from '../../components/UI/FormLink';

const ProductPage = ({ setAddBasketItem, isAuthenticated, setBasketItemCounter }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetData();
  }, [id]);

  const handleGetData = async () => {
    if (id) {
      const result = await fetchData(`/products/${id}`);
      setData(result.data);
    }
  };

  //Redux basket

  const handleAddTobasket = () => {
    setAddBasketItem(data);
    setBasketItemCounter(data);
  };

  return (
    <div className="product_page">
      <div className="wrapper">
        <h3 className="title">{data?.title}</h3>
        <div className="rate_block">
          <img className="rate_image" src={Star} alt="star" />
          <div className="rate_title">
            <span>Rate:</span>
            {data?.rating.rate}
          </div>
        </div>
        <div className="product_content">
          <div className="image">
            <img src={data?.image} alt={data?.title} />
          </div>
          <div className="subtitle">
            <div className="subtitle_item">
              <span>Category:</span>
              {data?.category}
            </div>
            <div className="subtitle_item">
              <span>Price:</span>
              {data?.price} &#x20AC;
            </div>
            <div className="subtitle_item">
              <span>Description:</span>
              {data?.description}
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
              {data?.rating.count}
            </div>
          </div>
        </div>
        <BackButton
          href="/"
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
    setBasketItemCounter: (payload) => dispatch(setBasketItemCounter(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
