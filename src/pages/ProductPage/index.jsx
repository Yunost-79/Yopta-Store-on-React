import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../../API/ProductService';
import { connect } from 'react-redux';

import { setAddProductsData, setDeleteProductsData } from '../../redux/actions/productsAction';

import CommonButton from '../../components/UI/CommonButton';
import BackButton from '../../components/UI/BackButton';

import Star from '../../images/star.svg';

import './style.scss';

const ProductPage = ({ setAddProductsData, setDeleteProductsData }) => {
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
    setAddProductsData(productData);
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
              <CommonButton className="product_btn">Buy Now</CommonButton>
              <CommonButton onClick={handleAddTobasket} className="product_btn">
                Add in basket
              </CommonButton>
            </div>
            <div className="subtitle_item">
              <span>In Stock:</span>
              {productData?.rating.count}
            </div>
          </div>
        </div>
        <BackButton
          text="Come Back"
          onClick={() => {
            navigate('/');
          }}
        ></BackButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddProductsData: (payload) => dispatch(setAddProductsData(payload)),
    setDeleteProductsData: (payload) => dispatch(setDeleteProductsData(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ProductPage);
