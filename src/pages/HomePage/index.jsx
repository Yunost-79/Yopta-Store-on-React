import React from 'react';
import './style.scss';

import PreviewMain from '../../components/PreviewMain';
import ProductMain from '../../components/ProductMain';

const HomePage = ({ productData, isProductLoading, setSingleProductId }) => {
  return (
    <div className="main">
      <PreviewMain />
      <ProductMain productData={productData} isProductLoading={isProductLoading} setSingleProductId={setSingleProductId}/>
    </div>
  );
};

export default HomePage;
