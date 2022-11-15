import React from 'react';
import CommonButton from '../UI/CommonButton';

import './style.scss';

const CatalogList = ({ products }) => {
  return (
    <>
      {products.map((elem) => (
        <div key={elem.id} className="product_block">
          <img className="product_image" src={elem.image} alt="" />
          <div className="product_subcontent">
            <h3 className="product_title">{elem.title}</h3>
            <span className="product_price">{elem.price} &#x20AC;</span>
            <span className="product_category">{elem.category.name}</span>
            <CommonButton>Open Details</CommonButton>
          </div>
        </div>
      ))}
    </>
  );
};

export default CatalogList;
