import React, { useEffect, useState } from 'react';
import './style.scss';

import PreviewMain from '../HomePage/PreviewMain';
import ProductMain from '../HomePage/ProductMain';
import { fetchData } from '../../API/ProductService';

const HomePage = () => {
  const [productsList, setProductsList] = useState([]);
  const [isProductLoading, setIsProductLoading] = useState(false);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setIsProductLoading(true);
    const data = await fetchData('/products');
    const products = data.data;
    setProductsList(products);
    setIsProductLoading(false);
  };
  return (
    <div className="main">
      <PreviewMain />
      <ProductMain productsList={productsList} isProductLoading={isProductLoading} />
    </div>
  );
};

export default HomePage;
