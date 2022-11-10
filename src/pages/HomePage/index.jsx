import React from 'react';
import './style.scss';

import PreviewMain from '../../components/PreviewMain';
import ProductMain from '../../components/ProductMain';

const HomePage = ({ productData }) => {
  return (
    <div className="main">
      <PreviewMain />
      <ProductMain productData={productData} />
    </div>
  );
};

export default HomePage;
