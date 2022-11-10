import React from 'react';
import './style.scss';

import PreviewMain from '../../components/PreviewMain';
import ProductMain from '../../components/ProductMain';

const HomePage = ({ productData, isProductLoading }) => {
  return (
    <div className="main">
      <PreviewMain />
      <ProductMain productData={productData} isProductLoading={isProductLoading} />
    </div>
  );
};

export default HomePage;
