import React from 'react';
import { nanoid } from 'nanoid';

import './style.scss';
import CommonButton from '../Items/CommonButton';
import Loader from '../Items/Loader';

const ProductMain = ({ productData, isProductLoading }) => {
  console.log(productData);

  return (
    <div className="product_catalog_container">
      <div className="catalog_title">
        <h2>Yopta Store List</h2>
      </div>
      {isProductLoading ? (
        <Loader />
      ) : (
        <div className="catalog_list">
          {productData.map((elem) => (
            <div key={nanoid()} className="product_block">
              <img className="product_image" src={elem.category.image} />
              <div className="product_subcontent">
                <h3 className="product_title">{elem.title}</h3>
                <span className="product_price">{elem.price} &#x20AC;</span>
                <span className="product_category">{elem.category.name}</span>
                <CommonButton>Open Details</CommonButton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductMain;
